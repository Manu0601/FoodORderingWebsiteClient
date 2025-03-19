import React from "react";
import HeaderNav from "../Components/HeaderNav"
import FooterNav from "../Components/FooterNav";
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