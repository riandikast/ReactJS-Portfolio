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
import Desktop2 from "../assets/ProjectDesktop2.jpeg";
import Desktop3 from "../assets/bmax.jpg";
import Carousel from "better-react-carousel";
import { useScrollPosition } from "../customHooks/useScrollPosition";
import { useAtom, atom } from "jotai";
import { useNavigate } from "react-router-dom";

function DesktopProject() {
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
          className={`flex flex-col mb-20 w-5/6 z-0     ${
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
              <div className="flex flex-row px-7 py-2 ">
                <div>
                  <img
                  
                    width="100%"
                    src={Desktop1}
                    className=""
                  />
                </div>

                <div className="my-auto ml-5 flex flex-col text-left w-96 ">
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Monster Shooter</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Windows</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-4 text-justify">Monster Shooter is a 2D shooter game built with Python (pygame)</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://youtu.be/pIG8BH9Z0TI')} className={`text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://drive.google.com/file/d/13a0FVE_-NFJc-NRAz2Cq-EBhKa3gevCc/view?usp=share_link')} className={`text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-row px-7 py-2 ">
                <div>
                  <img
                 
                    width="100%"
                    src={Desktop2}
                    className=""
                  />
                </div>

                <div className="my-auto ml-5 flex flex-col text-left w-96">
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Clever Class</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Windows</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-4 text-justify">Clever Class is a Windows application built with Java, designed for presenting senior
high school lessons.</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button className={`opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={`opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-row py-2 ">
                <div>
                  <img
                 
                    width="100"
                    src={Desktop3}
                    className="mt-6  w-[32rem] ml-6 "
                  />
                </div>

                <div className="my-auto ml-10 mr-10 flex flex-col text-left w-96">
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Bmax</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Windows</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-4 text-justify">Bmax is python executable, main purpose is to set brightness to the maximum on every startup. Useful if you're too lazy to increase brightness when working outdoors.</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://github.com/riandikast/Bmax')} className={`text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://github.com/riandikast/Bmax/releases/tag/alpha')} className={`text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
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
          className={`flex flex-col mb-20 w-5/6   z-0 relative bottom-60 ${
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
              <div className="flex flex-col px-3 mt-60  mx-auto w-[15rem] ">
                <div>
                  <img
                  
                    width="100%"
                    src={Desktop1}
                    className=""
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Monster Shooter</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Windows</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-5">Monster Shooter is a 2D shooter game built with Python (pygame).</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://youtu.be/pIG8BH9Z0TI')} className={`text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://drive.google.com/file/d/13a0FVE_-NFJc-NRAz2Cq-EBhKa3gevCc/view?usp=share_link')} className={`text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[15rem] ">
                <div>
                  <img
                  
                    width="100%"
                    src={Desktop2}
                    className=""
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Clever Class</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Windows</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-5">Clever Class is a Windows application built with Java, designed for presenting senior
high school lessons.</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button className={`opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={`opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[15rem]">
                <div>
                  <img
                 
                    width="100"
                    src={Desktop3}
                    className="w-[20rem] "
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Bmax</div>
                  <div className="text-[0.6rem] mt-4">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Windows</div>
                  <div className="text-[0.6rem] mt-4">Description:</div>
                  <div className="text-[0.7rem] line-clamp-5 text-justify">Bmax is python executable, main purpose is to set brightness to the maximum on every startup. Useful if you're too lazy to increase brightness when working outdoors.</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://github.com/riandikast/Bmax')} className={`text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://github.com/riandikast/Bmax/releases/tag/alpha')} className={`text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
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
        } h-screens flex flex-col -mt-2`}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5, ...transition }}
        variants={pageVariants}
      >
        <div
          className={`flex flex-col mb-2 mx-auto w-5/6 z-0 text-[1rem] min501:text-[1.2rem] mt-28 min501:mt-4 ${
            darkMode ? "text-white" : "text-[#405189]"
          }`}
        >
          Desktop Project
        </div>
        <div className="hidden min501:block">{desktopMode()}</div>
        <div className="min501:hidden">{mobileMode()}</div>
      </motion.div>
    </>
  );
}

export default DesktopProject;
