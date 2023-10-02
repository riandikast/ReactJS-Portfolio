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
          className={`flex flex-col mb-20 w-4/6 z-0 px-10    ${
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
              <div className="flex flex-row py-2 ">
              <div className="w-[11rem] ml-auto">
                  <img
                 
                    width="100%"
                    src={Bobosa}
                    className="max-h-80"
                  />
                </div>

                <div className="my-auto ml-5 mr-auto flex flex-col w-60 text-left ">
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Bobosa</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Android</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-4">Bobosa is a Kotlin-built application designed for estimating the body weight of cows.</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.sleepydev.bobosa')} className={`text-[0.9rem] p-2 rounded-lg  ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.sleepydev.bobosa')} className={`text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-row py-2 ">
              <div className="w-[11rem] ml-auto">
                  <img
                 
                    width="100%"
                    src={Ftt}
                    className="max-h-80"
                  />
                </div>

                <div className="my-auto ml-5 mr-auto flex flex-col w-60 text-left ">
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Floating Text Template</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Android</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-5">Floating Text Template is a note-taking Android application with a unique feature that
allows it to float over other apps, making it easier to copy any saved note.</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button className={` opacity-40  text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>
            
              <Carousel.Item>
              <div className="flex flex-row py-2 ">
              <div className="w-[11rem] ml-auto">
                  <img
                 
                    width="100%"
                    src={Mobile1}
                    className=""
                  />
                </div>

                <div className="my-auto ml-5 mr-auto flex flex-col w-60 text-left ">
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Movflix</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Android</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-4">Simple android application created using kotlin that showing movie data from API with trailer and description</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button className={`opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://drive.google.com/file/d/1nJVX9V5ZLtDJ6KJI6uq2Gf1blIfoZGgt/view?usp=share_link')} className={` text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>
 
            <Carousel.Item>
              <div className="flex flex-row py-2">
              <div className="w-[11rem] ml-auto">
                  <img
                 
                    width="100%"
                    src={Mobile2}
                    className=""
                  />
                </div>

                <div className="my-auto ml-5 mr-auto flex flex-col w-60 text-left "> 
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">SecondHand</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Android</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-7">E-Commerce Application that we can buy and sell second products that we used before. This app will bring sellers and buyers to be able to negotiate goods and conduct transactions directly outside the app</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button className={` opacity-40  text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-row py-2">
              <div className="w-[11rem] ml-auto">
                  <img
                 
                    width="100%"
                    src={Mobile3}
                    className=""
                  />
                </div>

                <div className="my-auto ml-5 mr-auto flex flex-col w-60 text-left "> 
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">Simple Note</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Android</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-7">Simple note app, usually used for saving meeting schedule, important note, etc. </div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button className={` opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-row py-2">
              <div className="w-[11rem] ml-auto">
                  <img
                 
                    width="100%"
                    src={Mobile4}
                    className=""
                  />
                </div>

                <div className="my-auto ml-5 mr-auto flex flex-col w-60 text-left "> 
                  <div className="text-[0.8rem]">Name:</div>
                  <div className="text-[0.9rem] line-clamp-1">STAY: Hotel Reservation</div>
                  <div className="text-[0.8rem] mt-4">Platform:</div>
                  <div className="text-[0.9rem] line-clamp-1">Android</div>
                  <div className="text-[0.8rem] mt-4">Description:</div>
                  <div className="text-[0.9rem] line-clamp-7">This app can help user to booking a hotel</div>
                  <div className={`flex flex-row space-x-4 mt-4 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://youtu.be/lj4HE5IB18M')}  className={` text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  
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
              <div className="flex flex-col px-3 mt-60  mx-auto w-[14rem] ">
                <div>
                  <img
                    width="100%"
                    src={Bobosa}
                    className="max-h-80"
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 w-40 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Bobosa</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Android</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-7">Bobosa is a Kotlin-built application designed for estimating the body weight of cows.</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.sleepydev.bobosa')} className={`text-[0.6rem] p-2 rounded-lg  ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.sleepydev.bobosa')} className={`text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[14rem] ">
                <div>
                  <img
                    width="100%"
                    src={Ftt}
                    className="max-h-80"
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 w-40 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Floating Text Template</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Android</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-7">Floating Text Template is a note-taking Android application with a unique feature that
allows it to float over other apps, making it easier to copy any saved note.</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button className={` opacity-40  text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.9rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[14rem] ">
                <div>
                  <img
                  
                    width="100%"
                    src={Mobile1}
                    className=""
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 w-40 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Movflix</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Android</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-7">Simple android application created using kotlin that showing movie data from API with trailer and description</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button className={`opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button onClick={() => openInNewTab('https://drive.google.com/file/d/1nJVX9V5ZLtDJ6KJI6uq2Gf1blIfoZGgt/view?usp=share_link')} className={` text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[14rem] ">
                <div>
                  <img
                  
                    width="100%"
                    src={Mobile2}
                    className=""
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 w-40 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">SecondHand</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Android</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-7">E-Commerce Application that we can buy and sell second products that we used before. This app will bring sellers and buyers to be able to negotiate goods and conduct transactions directly outside the app</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button className={` opacity-40  text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[14rem] ">
                <div>
                  <img
                  
                    width="100%"
                    src={Mobile3}
                    className=""
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 w-40 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">Simple Note</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Android</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-7">Simple note app, usually used for saving meeting schedule, important note, etc</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button className={` opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  </div>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex flex-col px-3 mt-60  mx-auto w-[14rem] ">
                <div>
                  <img
                  
                    width="100%"
                    src={Mobile4}
                    className=""
                  />
                </div>

                <div className="my-auto  flex flex-col text-left mt-2 px-2 w-40 ">
                  <div className="text-[0.6rem]">Name:</div>
                  <div className="text-[0.7rem] line-clamp-1">STAY: Hotel Reservation</div>
                  <div className="text-[0.6rem] mt-2">Platform:</div>
                  <div className="text-[0.7rem] line-clamp-1">Android</div>
                  <div className="text-[0.6rem] mt-2">Description:</div>
                  <div className="text-[0.7rem] line-clamp-7">This app can help user to booking a hotel</div>
                  <div className={`flex flex-row space-x-4 mt-2 ${darkMode ? '' : ''}`}> 
                  <button onClick={() => openInNewTab('https://youtu.be/lj4HE5IB18M')}  className={` text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Preview</button>
                  <button className={` opacity-40 text-[0.6rem] p-2 rounded-lg ${darkMode ? 'bg-[#394c5d] text-white' : 'bg-[#405189] text-white'}`}>Download</button>
                  
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
          className={`flex flex-col mb-2 mx-auto w-5/6 z-0  text-[1rem] min501:text-[1.2rem] mt-12 min501:mt-4  ${
            darkMode ? "text-white" : "text-[#405189]"
          }`}
        >
          Mobile Project
        </div>
        <div className="hidden min501:block">{desktopMode()}</div>
        <div className="min501:hidden">{mobileMode()}</div>
      </motion.div>
    </>
  );
}

export default MobileProject;
