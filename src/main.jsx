import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Homepage from "./Pages/Homepage.jsx";
import RestaurantPage from "./Pages/RestaurantPage.jsx";
import AllOrderPage from "./Pages/AllOrderPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignupPage.jsx";
import AdminLoginPage from "./Pages/AdminLoginPage.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/restaurant/:id", 
        element: <RestaurantPage />,
      },
      {
        path: "/order",
        element: <AllOrderPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/admin",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
