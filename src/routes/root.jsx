import React from "react";
import HeaderNav from "../Components/User/HeaderNav"
import FooterNav from "../Components/User/FooterNav";
import { Outlet } from "react-router-dom";

function root(){
    return(
        <>
        <HeaderNav/>
        <Outlet/>
        <FooterNav/>
        </>
    )
}

export default root