/* eslint-disable jsx-a11y/alt-text */
import { motion, AnimatePresence } from "framer-motion";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import AvatarDesktop from "../components/AvatarDesktop";
import { themeState, showNavState } from "../components/Navbar";
import Social from "../components/Social";
import About from "../components/About";
import { ReactComponent as Kotlin } from "../assets/Kotlin.svg";
import { ReactComponent as Javascript } from "../assets/Javascript.svg";
import { ReactComponent as ReactIcon } from "../assets/React.svg";
import { ReactComponent as Python } from "../assets/Python.svg";
import { ReactComponent as Html } from "../assets/Html.svg";
import { ReactComponent as Css } from "../assets/Css.svg";
import { ReactComponent as Java } from "../assets/Java.svg";
import { ReactComponent as Git } from "../assets/Git.svg";
import { ReactComponent as Mysql } from "../assets/Mysql.svg";
import Desktop from "../assets/Desktop.png";
import Phone from "../assets/Phone.png";
import Website from "../assets/Website.png";
import WinTerminal from "../assets/wint.png";
import Carousel from "better-react-carousel";
import { Typewriter } from "react-simple-typewriter";
import { useScrollPosition } from "../customHooks/useScrollPosition";
import { useAtom, atom } from "jotai";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Home() {
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

  const scrollPosition = useScrollPosition();
  console.log("a", scrollPosition);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const typeWriterLoop = () => {
    if (scrollPosition > 205 && scrollPosition <= 680) {
      return 0;
    } else {
      return 1;
    }
  };

  const imageSlider = () => {
    return (
      <>
        {console.log("las", showNav)}
        <div
          className={`flex flex-col mb-20 w-4/6 z-0    ${
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
            showDots={true}
            autoplay={3000}
            dotColorInactive={darkMode ? "#405189" : "#a8a8a8"}
            dotColorActive={darkMode ? "#f8fafc" : "#405189"}
          >
            <Carousel.Item>
              <img
                onClick={() => navigate("/project/desktop")}
                width="100%"
                src={Desktop}
                className="p-5 "
              />
              <div className="text-[0.8rem] ">Desktop</div>
            </Carousel.Item>

            <Carousel.Item>
              <img
                onClick={() => navigate("/project/website")}
                width="100%"
                src={Website}
                className="p-5"
              />
              <div className="text-[0.8rem] ">Website</div>
            </Carousel.Item>

            <Carousel.Item>
              <img
                onClick={() => navigate("/project/mobile")}
                width="100%"
                src={Phone}
                className="p-5"
              />
              <div className="text-[0.8rem] ">Mobile</div>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  };

  const imageSliderDesktop = () => {
    return (
      <>
        {console.log("las", showNav)}
        <div
          className={`flex flex-col mb-20 w-60  z-0    ${
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
            autoplay={3000}
          >
            <Carousel.Item>
              <img
                onClick={() => navigate(`/project/desktop`)}
                width="100%"
                src={Desktop}
                className="p-5 "
              />
              <div className="text-[0.8rem] ">Desktop</div>
            </Carousel.Item>

            <Carousel.Item>
              <img
                onClick={() => navigate("/project/website")}
                width="100%"
                src={Website}
                className="p-5"
              />
              <div className="text-[0.8rem] ">Website</div>
            </Carousel.Item>

            <Carousel.Item>
              <img
                onClick={() => navigate("/project/mobile")}
                width="100%"
                src={Phone}
                className="p-5"
              />
              <div className="text-[0.8rem] ">Mobile</div>
            </Carousel.Item>

          
          </Carousel>
        </div>
      </>
    );
  };

  const mobileMode = () => {
    return (
      <>
        <div className="flex flex-col -mt-4 items-center">
          <div className="justify-center flex flex-col items-center mt-3 w-[70%]">
            <Avatar width={"w-4/5"} height={"h-35"} />
          </div>
          <div
            className={`w-4/6 mb-2 mt-4  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.95rem] font-semibold  `}
          >
            Amanda Riandikaseta
          </div>

          <div
            className={`w-4/6 mb-2  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.8rem] font-semibold  `}
          >
            Software Engineer
          </div>

          <div>
            <Social size={"text-3xl"} />
          </div>

          {/* About me........................................ */}

          <div
            data-aos="fade-up"
            className={` mb-2 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[0.8rem] font-semibold  `}
          >
            About me
          </div>

          <div
            data-aos="fade-up"
            className={`w-4/6 mb-8 break-all  ${
              darkMode ? "text-white" : "text-[#405189]"
            } ${
              scrollPosition > 700 ? "hidden" : ""
            } font-google text-justify text-[0.75rem] font-semibold  `}
          >
            {/* Hello I'm Andika, Passionate on Android, website and Game
            development I have been involved in project with some language like
            Kotlin, Javascript, Python, Etc. Currently I serve as college
            student in Singaperbangsa Karawang University. */}
            <Typewriter
              words={[
                "Hello, I'm Andika. I have been involved in projects using various programming languages such as Kotlin, JavaScript, Python, and more. Let's take a look at my projects.",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              delaySpeed={10000}
              deleteSpeed={0}
              onLoopDone={() => console.log("a")}
            />
          </div>

          <div
            data-aos="fade-up"
            className={`w-3/6 mb-10 break-all mt-3 ${
              scrollPosition <= 700 ? "hidden" : ""
            }  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-justify text-[0.8rem] font-semibold  `}
          >
            <Typewriter
              words={[
                "Hello I'm Andika, Passionate on Android, website and game development I have been involved in project with some language like Kotlin, Javascript, Python, Etc. Currently I serve as college student in singaperbangsa karawang  ",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              delaySpeed={10000}
              deleteSpeed={0}
              onLoopDone={() => console.log("a")}
            />
          </div>

          <div>
            <Link
              to="/certification"
              data-aos="fade-up"
              className={` mb-2 mt-4 rounded sm p-2 ${
                darkMode
                  ? "text-white  bg-[#394c5d]"
                  : "text-white bg-[#405189]"
              } font-google text-center text-[0.6rem] font-semibold  `}
            >
              Certification
            </Link>
          </div>

          {/* Skills........................................ */}

          <div
            data-aos="fade-up"
            className={` mb-2 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[0.8rem] font-semibold  `}
          >
            Skills
          </div>

          {/* baris1 */}

          <div
            className={`w-4/6 mb-5 break-all  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.4rem] font-semibold flex flex-row justify-center space-x-1 mt-2 `}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col "
            >
              <Kotlin />
              Kotlin
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col "
            >
              <Javascript />
              Javascript
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col "
            >
              <ReactIcon />
              React Js
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex flex-col "
            >
              <Python />
              Python
            </div>
          </div>

          {/* baris2 */}

          <div
            className={`w-4/6 mb-5 break-all  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.4rem] font-semibold flex flex-row justify-center space-x-1 mt-2 `}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="flex flex-col "
            >
              <Html />
              Html
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="flex flex-col "
            >
              <Css />
              Css
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1400"
              className="flex flex-col "
            >
              <Mysql />
              Mysql
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1600"
              className="flex flex-col "
            >
              <Java />
              Java
            </div>
          </div>

          {/* baris3 */}

          <div
            className={`w-4/6 mb-20 break-all  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.4rem] font-semibold flex flex-row justify-center space-x-1 mt-2 `}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="1800"
              className="flex flex-col "
            >
              <Git />
              Git
            </div>
          </div>
          {/* Project........................................ */}
          <div
            data-aos="fade-up"
            className={` mb-5 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[0.8rem] font-semibold  `}
          >
            Project
          </div>
          {imageSlider()}

          {/* Contact.........*/}

          <div
            data-aos="fade-up"
            className={` mb-5 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[0.8rem] font-semibold  `}
          >
            Contact
          </div>

          <div className="flex flex-col mx-auto">
            <div
              data-aos="fade-up"
              className={` mb-5  ${
                darkMode
                  ? "text-white  border-white"
                  : "text-[#405189] border-[#405189]"
              } font-google text-center text-[0.6rem] font-semibold w-3/5 `}
            >
              <div className="flex flex-row" onClick={() =>
                    openInNewTab(
                      "https://mail.google.com/mail/u/0/#inbox?compose=new"
                    )
                  }>
                <a className="flex flex-col text-[3rem]  mr-1">
                  {" "}
                  {darkMode ? (
                    <i className="bx bx-envelope "></i>
                  ) : (
                    <i className="bx bx-envelope" style={{ color: "#405189" }}>
                      {" "}
                    </i>
                  )}
                </a>
                <div
                  className="flex flex-col text-left mx-auto "
                  
                >
                  <div className="flex flex-row mt-[3px]">
                    <h1 className="text-[1rem] ">Email</h1>
                    <div className="text-[1rem] ml-auto mt-[1px] relative">
                      {darkMode ? (
                        <i className="bx bx-link-external"></i>
                      ) : (
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#405189" }}
                        >
                          {" "}
                        </i>
                      )}
                    </div>
                  </div>

                  <h1 className="text-[0.7rem] whitespace-nowrap">
                    riandikasp@gmail.com
                  </h1>
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/riandikast/")
              }
              data-aos="fade-up"
              className={` mb-5  ${
                darkMode
                  ? "text-white  border-white"
                  : "text-[#405189] border-[#405189]"
              } font-google text-center text-[0.8rem] font-semibold w-3/5  `}
            >
              <div className="flex flex-row">
                <a className="flex flex-col text-[3rem] mr-1 ">
                  {" "}
                  {darkMode ? (
                    <i className="bx bxl-linkedin-square"></i>
                  ) : (
                    <i
                      className="bx bxl-linkedin-square"
                      style={{ color: "#405189" }}
                    >
                      {" "}
                    </i>
                  )}
                </a>
                <div className="flex flex-col text-left    mx-auto">
                  <div className="flex flex-row mt-[3px]">
                    <h1 className="text-[1rem] ">Linkedin</h1>
                    <div className="text-[1rem] ml-auto mt-[1px] left-1 relative ">
                      {darkMode ? (
                        <i className="bx bx-link-external"></i>
                      ) : (
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#405189" }}
                        >
                          {" "}
                        </i>
                      )}
                    </div>
                  </div>
                  <h1 className="text-[0.7rem] whitespace-nowrap">
                    Amanda Riandikaseta
                  </h1>
                </div>
              </div>
            </div>

            <div
              onClick={() => openInNewTab("https://github.com/riandikast")}
              data-aos="fade-up"
              className={` mb-40  ${
                darkMode
                  ? "text-white  border-white"
                  : "text-[#405189] border-[#405189]"
              } font-google text-center text-[0.8rem] font-semibold w-3/5  `}
            >
              <div className="flex flex-row">
                <a className="flex flex-col text-[3rem] mr-1">
                  {" "}
                  {darkMode ? (
                    <i className={"bx bxl-github"}></i>
                  ) : (
                    <i
                      className="bx bxl-github"
                      style={{ color: "#405189" }}
                    ></i>
                  )}
                </a>
                <div className="flex flex-col text-left    mx-auto mb-16 ">
                  <div className="flex flex-row mt-[3px]">
                    <h1 className="text-[1rem] ">Github</h1>
                    <div className="text-[1rem] ml-auto left-1 relative  mt-[1px]">
                      {darkMode ? (
                        <i className="bx bx-link-external "></i>
                      ) : (
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#405189" }}
                        >
                          {" "}
                        </i>
                      )}
                    </div>
                  </div>
                  <h1 className="text-[0.7rem] whitespace-nowrap ">
                    Amanda Riandikaseta
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const desktopMode = () => {
    return (
      <>
        <div className="flex flex-col -mt-4 items-center ">
          <Element name="home" className="flex flex-row h-72 space-x-8 mt-10">
            <div className="flex flex-col  my-auto">
              <div
                className={`w-6/6 mb-2 mt-4 line-clamp-1 ${
                  darkMode ? "text-white" : "text-[#405189]"
                } font-google text-center text-[1.8rem] font-semibold  `}
              >
                Amanda Riandikaseta
              </div>

              <div
                className={`w-6/6 mb-2 line-clamp-1 ${
                  darkMode ? "text-white" : "text-[#405189]"
                } font-google text-center text-[1.2rem] font-semibold  `}
              >
                Software Engineer
              </div>

              <div>
                <Social size={"text-2xl"} />
              </div>
            </div>
            <div className="flex flex-col  mt-3 ">
              <AvatarDesktop width={"w-52"} height={"h-52"} />
            </div>
          </Element>

          {/* About--------------- */}

          <Element
            name="about"
            data-aos="fade-up"
            className={` mb-2 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[1rem] font-semibold  `}
          >
            About me
          </Element>

          <div
            data-aos="fade-up"
            className={`w-3/6 mb-10 break-all mt-3 ${
              scrollPosition > 205 && scrollPosition <= 680 ? "" : "hidden"
            }  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-justify text-[0.8rem] font-semibold  `}
          >
            <Typewriter
              words={[
                "Hello, I'm Andika. I have been involved in projects using various programming languages such as Kotlin, JavaScript, Python, and more. Let's take a look at my projects.",
              ]}
              loop={typeWriterLoop}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              delaySpeed={10000}
              deleteSpeed={0}
              onLoopDone={() => console.log("a")}
            />
          </div>

          <div
            data-aos="fade-up"
            className={`w-3/6 mb-10 break-all mt-3 ${
              (scrollPosition <= 205) | (scrollPosition > 680) ? "" : "hidden"
            }  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-justify text-[0.8rem] font-semibold  `}
          >
            <Typewriter
              words={[
                "Hello I'm Andika, Passionate on Android, website and game development I have been involved in project with some language like Kotlin, Javascript, Python, Etc. Currently I serve as college student in singaperbangsa karawang  ",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              delaySpeed={10000}
              deleteSpeed={0}
              onLoopDone={() => console.log("a")}
            />
          </div>

          <div>
            <Link
              to="/certification"
              data-aos="fade-up"
              className={` mb-2 mt-4 rounded sm p-2 ${
                darkMode
                  ? "text-white  bg-[#394c5d]"
                  : "text-white bg-[#405189]"
              } font-google text-center text-[0.8rem] font-semibold  `}
            >
              Certification
            </Link>
          </div>

          {/* skilss.... */}
          <Element
            name="skills"
            data-aos="fade-up"
            className={` mb-2 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[1rem] font-semibold  `}
          >
            Skills
          </Element>

          {/* baris1 */}

          <div
            className={`w-5/6 mb-5 break-all  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.6rem] font-semibold flex flex-row justify-center space-x-3 mt-2 `}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col "
            >
              <Kotlin />
              Kotlin
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col "
            >
              <Javascript />
              Javascript
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col "
            >
              <ReactIcon />
              React Js
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex flex-col "
            >
              <Python />
              Python
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="flex flex-col "
            >
              <Html />
              Html
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="flex flex-col "
            >
              <Css />
              Css
            </div>
          </div>

          {/* baris2 */}

          <div
            className={`w-4/6 mb-5 break-all  ${
              darkMode ? "text-white" : "text-[#405189]"
            } font-google text-center text-[0.6rem] font-semibold flex flex-row justify-center space-x-3 mt-2 `}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="1400"
              className="flex flex-col "
            >
              <Mysql />
              Mysql
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1600"
              className="flex flex-col "
            >
              <Java />
              Java
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1800"
              className="flex flex-col "
            >
              <Git />
              Git
            </div>
          </div>

          {/* Project........................................ */}
          <Element
            name="project"
            data-aos="fade-up"
            className={` mb-2 mt-28 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[0.8rem] font-semibold  `}
          >
            Project
          </Element>
          {imageSliderDesktop()}

          {/* Contact.........*/}

          <Element
            name="contact"
            data-aos="fade-up"
            className={` mb-5 mt-20 border-b-2 ${
              darkMode
                ? "text-white  border-white"
                : "text-[#405189] border-[#405189]"
            } font-google text-center text-[1rem] font-semibold  `}
          >
            Contact
          </Element>

          <div className="flex flex-row space-x-8 mb-2">
            <div
            onClick={() =>
              openInNewTab(
                "https://mail.google.com/mail/u/0/#inbox?compose=new"
              )
            }
              data-aos="fade-up"
              className={` mb-5   ${
                darkMode
                  ? "text-white  border-white"
                  : "text-[#405189] border-[#405189]"
              } font-google text-center text-[0.6rem] font-semibold  `}
            >
              <div
                className="flex flex-row"
                
              >
                <a className="flex flex-col text-[2.2rem] mr-2">
                  {" "}
                  {darkMode ? (
                    <i className="bx bx-envelope "></i>
                  ) : (
                    <i className="bx bx-envelope" style={{ color: "#405189" }}>
                      {" "}
                    </i>
                  )}
                </a>
                <div className="flex flex-col text-left w-[5rem] mx-auto ">
                  <div className="flex flex-row mt-[3px]">
                    <h1 className="text-[0.8rem] ">Email</h1>
                    <div className="text-[0.6rem] ml-auto mt-[1px]">
                      {darkMode ? (
                        <i className="bx bx-link-external"></i>
                      ) : (
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#405189" }}
                        >
                          {" "}
                        </i>
                      )}
                    </div>
                  </div>

                  <h1 className="text-[0.5rem] whitespace-nowrap">
                    riandikasp@gmail.com
                  </h1>
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/riandikast/")
              }
              data-aos="fade-up"
              className={` mb-5  ${
                darkMode
                  ? "text-white  border-white"
                  : "text-[#405189] border-[#405189]"
              } font-google text-center text-[0.8rem] font-semibold  `}
            >
              <div className="flex flex-row">
                <a className="flex flex-col text-[2.2rem] mr-2  ">
                  {" "}
                  {darkMode ? (
                    <i className="bx bxl-linkedin-square"></i>
                  ) : (
                    <i
                      className="bx bxl-linkedin-square"
                      style={{ color: "#405189" }}
                    >
                      {" "}
                    </i>
                  )}
                </a>
                <div className="flex flex-col text-left   w-[5rem] mx-auto">
                  <div className="flex flex-row mt-[3px]">
                    <h1 className="text-[0.8rem] ">Linkedin</h1>
                    <div className="text-[0.6rem] ml-auto mt-[1px]">
                      {darkMode ? (
                        <i className="bx bx-link-external"></i>
                      ) : (
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#405189" }}
                        >
                          {" "}
                        </i>
                      )}
                    </div>
                  </div>
                  <h1 className="text-[0.5rem] whitespace-nowrap">
                    Amanda Riandikaseta
                  </h1>
                </div>
              </div>
            </div>

            <div
              onClick={() => openInNewTab("https://github.com/riandikast")}
              data-aos="fade-up"
              className={` mb-40  ${
                darkMode
                  ? "text-white  border-white"
                  : "text-[#405189] border-[#405189]"
              } font-google text-center text-[0.8rem] font-semibold  `}
            >
              <div className="flex flex-row">
                <a className="flex flex-col text-[2.2rem] mr-2">
                  {" "}
                  {darkMode ? (
                    <i className={"bx bxl-github"}></i>
                  ) : (
                    <i
                      className="bx bxl-github"
                      style={{ color: "#405189" }}
                    ></i>
                  )}
                </a>
                <div className="flex flex-col text-left   w-[5rem] mx-auto  ">
                  <div className="flex flex-row mt-[3px]">
                    <h1 className="text-[0.8rem] ">Github</h1>
                    <div className="text-[0.6rem] ml-auto  mt-[1px]">
                      {darkMode ? (
                        <i className="bx bx-link-external "></i>
                      ) : (
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#405189" }}
                        >
                          {" "}
                        </i>
                      )}
                    </div>
                  </div>
                  <h1 className="text-[0.5rem] whitespace-nowrap ">
                    Amanda Riandikaseta
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <motion.div
        className={`${darkMode ? "bg-[#0d1117] " : "bg-[#f3f3f9]"} h-screens`}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5, ...transition }}
        variants={pageVariants}
      >
        <div className="hidden min501:block">{desktopMode()}</div>
        <div className="min501:hidden">{mobileMode()}</div>
      </motion.div>
    </>
  );
}

export default Home;
