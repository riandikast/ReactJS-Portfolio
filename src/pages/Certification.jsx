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
import Desktop1 from "../assets/ProjectDesktop1.jpeg";
import Sertif1 from "../assets/BinarAndroid.jpg";
import Sertif2 from "../assets/HtmlCssSertif.jpg";
import Sertif3 from "../assets/JSES6.jpg";
import Sertif4 from "../assets/ReactJS.jpg";
import Sertif5 from "../assets/ReactNative.jpg";
import Carousel from "better-react-carousel";
import { useScrollPosition } from "../customHooks/useScrollPosition";
import { useAtom, atom } from "jotai";
import { useNavigate } from "react-router-dom";

function Certification() {
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

  const scrollPosition = useScrollPosition();
  console.log("a", scrollPosition);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const imageSliderDesktop = () => {
    return (
      <>
        {console.log("las", showNav)}
        <div
          className={`flex flex-col h-screen w-3/6 z-0   ${
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
            autoplay={6000}
          >
            <Carousel.Item>
              <div className="flex flex-col mt-4 px-8 w-full   ">
                <div>
                  <img
                  
                    width="100%"
                    src={Sertif1}
                    className=""
                  />
                </div>

                <div className="my-auto mx-auto flex flex-col mt-4 ">
                  <div className="text-[1.2rem]">Android Engineering (Kotlin) </div>

                
                </div>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex flex-col  p-8 w-full  ">
                <div>
                  <img
                  
                    width="100%"
                    src={Sertif2}
                    className=""
                  />
                </div>

                <div className="my-auto mx-auto flex flex-col mt-4">
                  <div className="text-[1.2rem]">HTML dan CSS Dasar </div>

                
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col  p-8 w-full  ">
                <div>
                  <img
                  
                    width="100%"
                    src={Sertif3}
                    className=""
                  />
                </div>

                <div className="my-auto mx-auto flex flex-col mt-4">
                  <div className="text-[1.2rem]">Javascript ES6 </div>

                
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col  p-8 w-full  ">
                <div>
                  <img
                  
                    width="100%"
                    src={Sertif4}
                    className=""
                  />
                </div>

                <div className="my-auto mx-auto flex flex-col mt-4">
                  <div className="text-[1.2rem]">React (Javascript)</div>

                
                </div>

              </div>
            </Carousel.Item>

            
            <Carousel.Item>
              <div className="flex flex-col  p-8 w-full  ">
                <div>
                  <img
                  
                    width="100%"
                    src={Sertif5}
                    className=""
                  />
                </div>

                <div className="my-auto mx-auto flex flex-col mt-4">
                  <div className="text-[1.2rem]">React Native</div>

                
                </div>

              </div>
            </Carousel.Item>
          
          </Carousel>
        </div>
      </>
    );
  };
  
  const imageSliderMobile = () => {
      return (
        <>
          {console.log("las", showNav)}
          <div
            className={`flex flex-col h-screen w-5/6    ${
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
              autoplay={6000}
            >
              <Carousel.Item>
                <div className="flex flex-col py-2 mx-auto w-[15rem]  ">
                  <div>
                    <img
                    
                      width="100%"
                      src={Sertif1}
                      className=""
                    />
                  </div>
  
                  <div className="my-auto mx-auto flex flex-col mt-4">
                    <div className="text-[0.9rem]">Android Engineering (Kotlin) </div>
  
                  
                  </div>
  
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="flex flex-col py-2 mx-auto w-[15rem]  ">
                  <div>
                    <img
                    
                      width="100%"
                      src={Sertif2}
                      className=""
                    />
                  </div>
  
                  <div className="my-auto mx-auto flex flex-col mt-4">
                    <div className="text-[0.9rem]">HTML dan CSS Dasar </div>
  
                  
                  </div>
  
                </div>
              </Carousel.Item>
  
              <Carousel.Item>
                <div className="flex flex-col py-2 mx-auto w-[15rem]  ">
                  <div>
                    <img
                    
                      width="100%"
                      src={Sertif3}
                      className=""
                    />
                  </div>
  
                  <div className="my-auto mx-auto flex flex-col mt-4">
                    <div className="text-[0.9rem]">Javascript ES6 </div>
  
                  
                  </div>
  
                </div>
              </Carousel.Item>
  
              <Carousel.Item>
                <div className="flex flex-col py-2 mx-auto w-[15rem]  ">
                  <div>
                    <img
                    
                      width="100%"
                      src={Sertif4}
                      className=""
                    />
                  </div>
  
                  <div className="my-auto mx-auto flex flex-col mt-4">
                    <div className="text-[0.9rem]">React (Javascript)</div>
  
                  
                  </div>
  
                </div>
              </Carousel.Item>
  
              
              <Carousel.Item>
                <div className="flex flex-col py-2 mx-auto w-[15rem]  ">
                  <div>
                    <img
                    
                      width="100%"
                      src={Sertif5}
                      className=""
                    />
                  </div>
  
                  <div className="my-auto mx-auto flex flex-col mt-4">
                    <div className="text-[0.9rem]">React Native</div>
  
                  
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

  const mobileMode = () => {
      return (
        <>
          <div className={`flex flex-col items-center`}>
            {imageSliderMobile()}
          </div>
        </>
      );
    };

  return (
    <>
      <motion.div
        className={`${
          darkMode ? "bg-[#0d1117] " : "bg-[#f3f3f9]"
        }  flex flex-col `}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5, ...transition }}
        variants={pageVariants}
      >
     <div
          className={`flex  flex-col  mx-auto mt-32 min501:mt-20 w-5/6 z-0 text-[1.3rem] min501:text-[1.5rem]  min501:mt-4 ${
            darkMode ? "text-white" : "text-[#405189]"
          }`}
        >
          Certification
        </div>
        <div className="hidden min501:block">{desktopMode()}</div>
        <div className="min501:hidden">{mobileMode()}</div>
      </motion.div>
    </>
  );
}

export default Certification;
