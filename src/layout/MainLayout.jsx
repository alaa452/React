import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";

export default function MainLayout() {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
