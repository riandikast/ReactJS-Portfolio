/* eslint-disable jsx-a11y/alt-text */
import { motion, AnimatePresence } from "framer-motion";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { themeState, showNavState } from "../components/Navbar";
import Website1 from "../assets/ProjectWebsite1.jpg";
import Website2 from "../assets/ProjectWebsite2.jpg";
import Website3 from "../assets/ProjectWebsite3.jpeg";
import Website4 from "../assets/ProjectWebsite4.jpeg";
import Website5 from "../assets/ProjectWebsite5.jpg";
import Carousel from "better-react-carousel";
import { useScrollPosition } from "../customHooks/useScrollPosition";
import { useAtom, atom } from "jotai";
import { useNavigate } from "react-router-dom";
import Popup from "../components/PopUp";
import { render } from "@testing-library/react";

function WebsiteProject() {
  const navigate = useNavigate();
  const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };
  const pageVariants = {
    initial: { scale: 0.2, opacity: 100 },
    in: { scale: 1, opacity: 1 },
    out: {
      scale: 0.2,
      opacity: 0,
      transition: { duration: 1, ...transition },
    },
  };

  const [darkMode, setDarkMode] = useAtom(themeState);
  const [showNav, setShowNav] = useAtom(showNavState);
  const [refreshType, setRefreshType] = useState(1);

  const [isPopup, setIsPopup] = useState(false);
  const [projectImg, setProjectImg] = useState();
  const [projectName, setProjectName] = useState("");
  const [projectPlatform, setProjectPlatform] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectLink1, setProjectLink1] = useState("");
  const [projectLink2, setProjectLink2] = useState("");

  const scrollPosition = useScrollPosition();
  console.log("a", scrollPosition);

  const handlePopup = (status, imgsrc, name, platf, desc, link1, link2) => {
    console.log("test poppup", projectName);
    setIsPopup(status);
    setProjectImg(imgsrc);
    setProjectName(name);
    setProjectPlatform(platf);
    setProjectDesc(desc);
    setProjectLink1(link1)
    setProjectLink2(link2)
    render();
  };


  const imageSliderDesktop = () => {
    return (
      <>
        {console.log("las", showNav)}
        <div
          className={`flex flex-col mb-20 w-5/6 min501:w-4/6 z-0   ${
            darkMode ? "text-white" : "text-[#405189]"
          }`}
        >
          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop={true}
            hideArrow={showNav ? true : false}
            mobileBreakpoint={100}
            dotColorInactive={darkMode ? "#405189" : "#a8a8a8"}
            dotColorActive={darkMode ? "#f8fafc" : "#405189"}
            showDots={true}
            // autoplay={6000}
          >
            <Carousel.Item>
              <div className="flex flex-col  py-2 w-5/6 mx-auto">
                <div className="">
                  <img
                    width="100%"
                    src={Website2}
                    className=""
                    onClick={
                      !isPopup
                        ? () =>
                            handlePopup(
                              true,
                              Website2,
                              "Bukapedia",
                              "Website",
                              "Ecommerce Website that sell fashion things like cloth and bag",
                              "https://github.com/riandikast/React-E-Commerce",
                              "https://react-e-commerce-seven.vercel.app/",
                              
                            )
                        : () => setIsPopup(false)
                    }
                  />

                  <div className="text-[1.2rem] min501:text-[1.4rem] line-clamp-1  mt-4">
                    Bukapedia
                  </div>
                </div>
              </div>
            </Carousel.Item>


            <Carousel.Item>
              <div className="flex flex-col  py-2 w-5/6 mx-auto ">
                <div className="">
                  <img
                    width="100%"
                    src={Website1}
                    className=""
                    onClick={
                      !isPopup
                        ? () =>
                            handlePopup(
                              true,
                              Website1,
                              "MovieList",
                              "Website",
                              "Straightforward Wesbite that showing movie trailer and desc from API",
                              "https://github.com/riandikast/React-Movie-Final",
                              "https://react-movie-h8are3rvm-riandikast.vercel.app/",
                            )
                        : () => setIsPopup(false)
                    }
                  />

                  <div className="text-[1.2rem] min501:text-[1.4rem] line-clamp-1  mt-4">
                    Movie List
                  </div>
                </div>
              </div>
            </Carousel.Item>

                </Carousel>
        </div>
      </>
    );
  };


  const desktopMode = () => {
    return (
      <>
        <div className={`flex flex-col items-center`}>
          {imageSliderDesktop()}
        </div>
      </>
    );
  };


  return (
    <>
      <motion.div
        className={`${
          darkMode ? "bg-[#0d1117] " : "bg-[#f3f3f9]"
        } h-screens flex flex-col mt-32 min501:mt-12`}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5, ...transition }}
        variants={pageVariants}
      >
        <div
          className={`flex  flex-col mb-2 mx-auto w-5/6 z-0 text-[1.3rem] min501:text-[1.5rem]  min501:mt-4 ${
            darkMode ? "text-white" : "text-[#405189]"
          }`}
        >
          Website Project
        </div>
        <div className="">{desktopMode()}</div>
      

        <div className={`absolute  w-full  ${isPopup ? "" : "hidden"} `}>
          {isPopup ? (
            <Popup
              image={projectImg}
              name={projectName}
              desc={projectDesc}
              platform={projectPlatform}
              link1={projectLink1}
              link2={projectLink2}
              video={false}
              demo={true}
              cancel={() => setIsPopup(false)}
            />
          ) : (
            ""
          )}
   
        </div>
      </motion.div>
    </>
  );
}

export default WebsiteProject;
