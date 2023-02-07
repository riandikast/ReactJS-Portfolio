import React from "react";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as LightMenu } from "../assets/LightMenu.svg";
import { ReactComponent as DarkMenu } from "../assets/DarkMenu.svg";
import { ReactComponent as Cancel } from "../assets/Cancel.svg";
import { ReactComponent as CloseButton } from "../assets/CloseNavButton.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom, atom } from "jotai";
import { useScrollPosition } from "../customHooks/useScrollPosition";
import { ScrollElement, scroller } from "react-scroll";

export const themeState = atom(false);
export const showNavState = atom(false);

function Navbar() {
  const [showNav, setShowNav] = useAtom(showNavState);
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useAtom(themeState);

  const [navDelay, setNavDelay] = useState(0);
  const [navTransition, setNavTransition] = useState(0);

  const [path, setPath] = useState(null);
  const location = useLocation();
  let navigate = useNavigate();
  const transition = { duration: 0.6, x: -20, ease: [0.43, 0.13, 0.23, 0.96] };
  const pageVariants = {
    initial: { opacity: 100, x: -100 },
    in: { opacity: 1, x: -20, transition: { duration: 0.5, ...transition } },
    out: {
      x: -200,
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  };

  const scrollPosition = useScrollPosition();
  console.log("a", scrollPosition);
  const visibleMenu = () => {
    setShowNav(true);
    setShowMenu(true);
  };

  const themeIcon = () => {
    if (darkMode) {
      return (
        <div className=" w-10 h-10  mr-2 relative bottom-2 right-1">
          <Sun />
        </div>
      );
    } else {
      return (
        <div className=" w-9 h-9 mb-1 mr-2 relative bottom-1 ">
          <Moon />
        </div>
      );
    }
  };

  const themeIconMobile = () => {
    if (darkMode) {
      return (
        <div className=" w-10 h-10  mr-2 relative bottom-1 left-1 ">
          <Sun />
        </div>
      );
    } else {
      return (
        <div className=" w-9 h-9 mb-1 mr-2 relative  left-2 ">
          <Moon />
        </div>
      );
    }
  };

  const scrollToHome = () => {
    setShowNav(false);
    setNavTransition("home");

    scroller.scrollTo("home", {
      smooth: true,
      spy: true,
      duration: 700,
      offset: -100,
    });

    if (path === "/") {
      if (scrollPosition <= 205) {
        setNavTransition(0);
      }
    } else {
      setNavTransition(0);
    }
  };

  const scrollToAbout = () => {
    setShowNav(false);

    let positionOffset = 0;
    if (scrollPosition <= 205) {
      positionOffset = -260;
    } else {
      positionOffset = -170;
    }
    setNavTransition("about");
    if (scrollPosition > 205 && scrollPosition <= 680) {
      setNavTransition(0);
    }
    if (path === "/") {
      if (scrollPosition > 680 && scrollPosition <= 1075) {
        setNavTransition(0);
      }
      scroller.scrollTo("about", {
        smooth: true,
        spy: true,
        duration: 700,
        offset: positionOffset,
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 420,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 420,
            behavior: "smooth",
          });
        }, 100);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToSkills = () => {
    setShowNav(false);
    let positionOffset = 0;
    if (scrollPosition <= 680) {
      positionOffset = -260;
    } else {
      positionOffset = -170;
    }
    setNavTransition("skills");
    if (scrollPosition > 680 && scrollPosition <= 1075) {
      setNavTransition(0);
    }
    if (path === "/") {
      scroller.scrollTo("skills", {
        smooth: true,
        spy: true,
        duration: 700,
        offset: positionOffset,
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 800,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 800,
            behavior: "smooth",
          });
        }, 100);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToProject = () => {
    setShowNav(false);
    let positionOffset = 0;
    if (scrollPosition <= 1075) {
      positionOffset = -220;
    } else {
      positionOffset = -130;
    }
    setNavTransition("project");
    if (scrollPosition > 1075 && scrollPosition <= 1550) {
      setNavTransition(0);
    }
    if (path === "/") {
      scroller.scrollTo("project", {
        smooth: true,
        spy: true,
        duration: 700,
        offset: positionOffset,
      });
    } else {
      setNavDelay(1);

      setTimeout(() => {
        window.scrollTo({
          top: 1220,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 1220,
            behavior: "smooth",
          });
        }, 100);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToContact = () => {
    setShowNav(false);
    setNavTransition("contact");
    if (scrollPosition > 1550) {
      setNavTransition(0);
    }
    if (path === "/") {
      scroller.scrollTo("contact", {
        smooth: true,
        spy: true,
        duration: 700,
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 1600,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 1600,
            behavior: "smooth",
          });
        }, 150);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToHomeMobile = () => {
    setShowNav(false);
    setNavTransition("home");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (path === "/") {
      setNavTransition(0);
    } else {
      setNavTransition(0);
    }
  };

  const scrollToAboutMobile = () => {
    setShowNav(false);
    setNavTransition("about");

    if (path === "/") {
      window.scrollTo({
        top: 321,
        behavior: "smooth",
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 321,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 321,
            behavior: "smooth",
          });
        }, 100);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };
  const scrollToSkillsMobile = () => {
    setShowNav(false);
    setNavTransition("skills");
    if (path === "/") {
      window.scrollTo({
        top: 701,
        behavior: "smooth",
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 701,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 701,
            behavior: "smooth",
          });
        }, 100);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToProjectMobile = () => {
    setShowNav(false);
    setNavTransition("project");
    if (path === "/") {
      window.scrollTo({
        top: 1201,
        behavior: "smooth",
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 1201,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 1201,
            behavior: "smooth",
          });
        }, 100);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToContactMobile = () => {
    setShowNav(false);
    setNavTransition("contact");
    if (path === "/") {
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({
          top: 1500,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollTo({
            top: 1500,
            behavior: "smooth",
          });
        }, 150);
      }, 350);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const screenWidth = window.innerWidth;
  useEffect(() => {
    console.log("www", screenWidth);
    if (screenWidth >= 500) {
      if (navTransition === "home") {
        if (scrollPosition <= 205) {
          setNavTransition(0);
        }
      } else if (navTransition === "about") {
        if (scrollPosition > 205 && scrollPosition <= 680) {
          setNavTransition(0);
        }
      } else if (navTransition === "skills") {
        if (scrollPosition > 680 && scrollPosition <= 1075) {
          setNavTransition(0);
        }
      } else if (navTransition === "project") {
        if (scrollPosition > 1075 && scrollPosition <= 1550) {
          setNavTransition(0);
        }
      } else if (navTransition === "contact") {
        if (scrollPosition > 1550) {
          setNavTransition(0);
        }
      }
    } else {
      if (navTransition === "home") {
        if (scrollPosition <= 320) {
          setNavTransition(0);
        }
      } else if (navTransition === "about") {
        if (scrollPosition > 320 && scrollPosition <= 700) {
          setNavTransition(0);
        }
      } else if (navTransition === "skills") {
        if (scrollPosition > 700 && scrollPosition <= 1100) {
          setNavTransition(0);
        }
      } else if (navTransition === "project") {
        if (scrollPosition > 1100 && scrollPosition <= 1370) {
          setNavTransition(0);
        }
      } else if (navTransition === "contact") {
        if (scrollPosition > 1370) {
          setNavTransition(0);
        }
      }
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

  const mobileNavbar = () => {
    return (
      <div
        className={`block text-left flex flex-row z-auto  ${
          darkMode ? "bg-[#0d1117]" : "bg-[#f3f3f9]"
        } `}
        onClick={() => (showNav ? setShowNav(false) : "")}
      >
        <div className="flex ">
          <button onClick={() => visibleMenu()} className="ml-2 h-9">
            {darkMode ? <LightMenu /> : <DarkMenu />}
          </button>
        </div>
        <div className="ml-auto mt-[0.25rem] flex flex-row">
          <button
            onClick={() => setDarkMode(darkMode ? false : true)}
            className="w-10 h-10 mr-3"
          >
            {themeIconMobile()}
          </button>
        </div>
      </div>
    );
  };

  const dekstopNavbar = () => {
    return (
      <div
        className={` text-left flex flex-row z-auto  ${
          darkMode ? "bg-[#0d1117]" : "bg-[#f3f3f9] "
        } `}
      >
        <div
          className={`flex flex-row mx-auto relative left-28 bottom-3 ${
            darkMode ? " text-white" : " text-[#405189]"
          } `}
        >
          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition <= 205 &&
              path === "/" &&
              navDelay !== 1 &&
              navTransition === 0
                ? ` text-sm md:text-base mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-base mr-4 mt-6  "
            }
            onClick={scrollToHome}
          >
            Home
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 205 &&
              scrollPosition <= 680 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-base mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-base mr-4 mt-6"
            }
            onClick={scrollToAbout}
          >
            About
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 680 &&
              scrollPosition <= 1075 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-base mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-base mr-4 mt-6"
            }
            onClick={scrollToSkills}
          >
            Skills
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 1075 &&
              scrollPosition <= 1550 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-base mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : path === "/project/desktop" ||
                  path === "/project/website" ||
                  path === "/project/mobile"
                ? `text-sm md:text-base mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-base mr-4 mt-6"
            }
            onClick={scrollToProject}
          >
            Project
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 1550 && path === "/" && navTransition === 0
                ? `text-sm md:text-base mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-base mr-4 mt-6"
            }
            onClick={scrollToContact}
          >
            Contact
          </NavLink>

          <div className="mt-[0.25rem] flex flex-row relative  top-4 ">
            <button
              onClick={() => setDarkMode(darkMode ? false : true)}
              className="w-12 h-12 mr-3"
            >
              {themeIcon()}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const sideBar = (showNav) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={showNav ? "initial" : "initial"}
          animate={showNav ? "in" : "out"}
          variants={pageVariants}
          className={`${
            darkMode ? "bg-[#394c5d]" : "bg-[#405189]"
          }  text-[#c4c6c9]  flex flex-col text-center fixed h-screen top-8 text-left ml-3 w-4/6 max-w-[8rem] rounded-lg shadow-lg p-6`}
        >
          <button
            className=" w-5 h-5 ml-auto relative bottom-2 left-2"
            onClick={() => setShowNav(false)}
          >
            <CloseButton />
          </button>
          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition <= 320 &&
              path === "/" &&
              navDelay !== 1 &&
              navTransition === 0
                ? ` text-sm md:text-base mr-4  ${
                    darkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                  } `
                : " text-sm md:text-base mr-4  "
            }
            onClick={scrollToHomeMobile}
          >
            Home
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 320 &&
              scrollPosition <= 700 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-base mr-4 mt-4   ${
                    darkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                  } `
                : " text-sm md:text-base mr-4 mt-4"
            }
            onClick={scrollToAboutMobile}
          >
            About
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 700 &&
              scrollPosition <= 1100 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-base mr-4 mt-4   ${
                    darkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                  } `
                : " text-sm md:text-base mr-4 mt-4"
            }
            onClick={scrollToSkillsMobile}
          >
            Skills
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 1100 &&
              scrollPosition <= 1370 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-base mr-4 mt-4  ${
                    darkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                  } `
                : path === "/project/desktop" ||
                  path === "/project/website" ||
                  path === "/project/mobile"
                ? `text-sm md:text-base mr-4 mt-4  ${
                    darkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                  } `
                : " text-sm md:text-base mr-4 mt-4"
            }
            onClick={scrollToProjectMobile}
          >
            Project
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              scrollPosition > 1370 && path === "/" && navTransition === 0
                ? `text-sm md:text-base mr-4 mt-4  ${
                    darkMode ? "text-[#ffffff]" : "text-[#ffffff]"
                  } `
                : " text-sm md:text-base mr-4 mt-4"
            }
            onClick={scrollToContactMobile}
          >
            Contact
          </NavLink>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="hidden min501:block">{dekstopNavbar()}</div>
      <div className="min501:hidden">{mobileNavbar()}</div>

      {showMenu && (showNav ? sideBar(showNav) : sideBar(showNav))}
    </>
  );
}

export default Navbar;
