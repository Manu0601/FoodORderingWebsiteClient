import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === "next"
      ? { ...style, right: "10px" }
      : { ...style, left: "10px", zIndex: "1" };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const BestSellerSlider = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://foodorderingwebsiteserver.onrender.com/api/menu/all"
        );

        if (response.data && Array.isArray(response.data.menuItems)) {
          setProductList(response.data.menuItems);
        } else {
          setProductList([]);
        }
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 400,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex flex-col py-12 gap-2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center my-5 fs-1 fw-bold">Best Seller</h2>
        </div>
        <div className="mx-12">
          {productList.length > 0 ? (
            <Slider {...settings}>
              {productList.map((item, index) => (
                <div key={index} className="">
                  <div className="text-center d-flex flex-column flex-nowrap align-items-center">
                    <Image
                      roundedCircle
                      width={250}
                      height={250}
                      src={item.image}
                      alt={item.name}
                      className=""
                    />
                    <div className="flex flex-col gap-2 px-2 py-4">
                      <div className="text-lg text-center fw-bold">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center">No bestsellers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellerSlider;
