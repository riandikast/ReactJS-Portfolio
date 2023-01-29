import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import DesktopProject from "../pages/DesktopProject";
import WebsiteProject from "../pages/WebsiteProject";
import MobileProject from "../pages/MobileProject";
import Certification from "../pages/Certification";
import Home from "../pages/Home";
function AnimatedRoutes() {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/desktop" element={<DesktopProject />} />
        <Route path="/project/website" element={<WebsiteProject />} />
        <Route path="/project/mobile" element={<MobileProject />}/>
        <Route path="/certification" element={<Certification />}/>
        <Route />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
