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
import Bobosa from "../assets/1a.png";
import Ftt from "../assets/2a.jpg";
import Mobile1 from "../assets/ProjectMobile1.jpeg";
import Mobile2 from "../assets/ProjectMobile2.jpg";
import Mobile3 from "../assets/ProjectMobile3.jpg";
import Mobile4 from "../assets/ProjectMobile4.jpg";
import Carousel from "better-react-carousel";
import { useScrollPosition } from "../customHooks/useScrollPosition";
import { useAtom, atom } from "jotai";
import { useNavigate } from "react-router-dom";
import Popup from "../components/PopUp";
import { render } from "@testing-library/react";

function MobileProject() {
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
    setProjectLink1(link1);
    setProjectLink2(link2);
    render();
  };

  const imageSlider = () => {
    return (
      <>
        {console.log("las", showNav)}
        <div
          className={`flex flex-col h-screen w-[90%]  min501:w-2/6 z-0  z-0   ${
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
              <div className="flex flex-col py-2 w-3/6 h-[40%] m-auto">
                <div className="my-auto  ">
                  <img
                    width="100%"
                    src={Bobosa}
                    className="h-[70%] min501:h-[80%] mt-12"
                    onClick={
                      !isPopup
                        ? () =>
                            handlePopup(
                              true,
                              Bobosa,
                              "Bobosa",
                              "Android",
                              "Bobosa is a Kotlin-built application designed for estimating the body weight of cows.",
                              "https://play.google.com/store/apps/details?id=com.sleepydev.bobosa"
                            )
                        : () => setIsPopup(false)
                    }
                  />
                  <div className="text-[1.2rem] min501:text-[1.4rem] line-clamp-1  mt-4">
                    Bobosa
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col py-2 w-3/6 mx-auto h-[40%]">
                <div>
                  <img
                    width="100%"
                    src={Ftt}
                    className="h-[70%] min501:h-[80%] mt-12"
                    onClick={
                      !isPopup
                        ? () =>
                            handlePopup(
                              true,
                              Ftt,
                              "Floating Text",
                              "Android",
                              "Floating Text Template is a note-taking Android application with a unique feature that",
                              "https://play.google.com/store/apps/details?id=com.sleepydev.floatingtexttemplate"
                            )
                        : () => setIsPopup(false)
                    }
                  />
                  <div className="text-[1.2rem] min501:text-[1.4rem] line-clamp-2  mt-4">
                    Floating Text
                  </div>
                </div>
              </div>
            </Carousel.Item>

  
            <Carousel.Item>
              <div className="flex flex-col  py-2 w-3/6 mx-auto h-[40%]">
                <div>
                  <img
                    width="100%"
                    src={Mobile2}
                    className="h-[80%] min501:h-[90%] mt-12"
                    onClick={
                      !isPopup
                        ? () =>
                            handlePopup(
                              true,
                              Mobile2,
                              "SecondHand",
                              "Android",
                              "E-Commerce Application that we can buy and sell second products.",
                              "https://github.com/riandikast/SecondHand5"
                            )
                        : () => setIsPopup(false)
                    }
                  />
                  <div className="text-[1.2rem] min501:text-[1.4rem] line-clamp-1  mt-4">
                    SecondHand
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col py-2 w-3/6 mx-auto my-auto h-[40%]" >
                <div>
                  <img width="100%" src={Mobile4} className="h-[80%] min501:h-[90%] mt-12" onClick={
                      !isPopup
                        ? () =>
                            handlePopup(
                              true,
                              Mobile4,
                              "Stay",
                              "Android",
                              "This app help user to booking a hotel",
                              "https://github.com/riandikast/SecondHand5"
                            )
                        : () => setIsPopup(false)
                    }/>
                  <div className="text-[1.2rem] min501:text-[1.4rem] line-clamp-1  mt-4">
                    Stay
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
        <div className={`flex flex-col items-center `}>{imageSlider()}</div>
      </>
    );
  };

  return (
    <>
      <motion.div
        className={`${
          darkMode ? "bg-[#0d1117] " : "bg-[#f3f3f9]"
        } flex flex-col `}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5, ...transition }}
        variants={pageVariants}
      >
        <div
          className={`flex  flex-col mb-2 mx-auto w-5/6 mt-32 min501:mt-12 z-0 text-[1.3rem] -mb-12 min501:text-[1.5rem]  min501:mt-4  ${
            darkMode ? "text-white" : "text-[#405189]"
          }`}
        >
          Mobile Project
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
              demo={false}
              cancel={() => setIsPopup(false)}
              mobileProject={
                "h-[11rem] min501:h-[15rem] w-3/6 min501:w-[45%] px-8  "
              }
              mobileProjectBg={"min501:w-2/6 "}
            />
          ) : (
            ""
          )}
     
        </div>
      </motion.div>
    </>
  );
}

export default MobileProject;
