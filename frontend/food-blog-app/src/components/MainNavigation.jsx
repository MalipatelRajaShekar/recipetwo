import React from 'react'
import Navbar from "./Footer"
import Footer from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainNavigation() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
