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

  var maxScroll = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ) - window.innerHeight;
  
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

    window.scrollTo({ 
      top: maxScroll * 0, 
      behavior: "smooth" ,  
    })

    if (path === "/") {
      if (scrollPosition <= maxScroll * 0.13) {
        setNavTransition(0);
      }
    } else {
      setNavTransition(0);
      setNavDelay(1);
      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }

  };

  const scrollToAbout = () => {
    setShowNav(false);
    setNavTransition("about");

    let positionOffset = 0;
    if (scrollPosition <= maxScroll * 0.13 ) {
      positionOffset = -maxScroll * 0.35;
    } else {
      positionOffset = -maxScroll * 0.15;
    }
    
      if (path === "/") {
        window.scrollTo({ 
          top: maxScroll * 0.20, 
          behavior: "smooth" ,  
        })
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({ 
          top: maxScroll * 0.20, 
          behavior: "smooth" ,  
        })

       
      }, 400);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToSkills = () => {
    setShowNav(false);
    setNavTransition("skills");

    let positionOffset = 0;
    if (scrollPosition <= maxScroll * 0.38) {
      positionOffset = -maxScroll * 0.28;
    } else {
      positionOffset = -maxScroll * 0.13;
    }
   
    if (path === "/") {
      window.scrollTo({ 
        top: maxScroll * 0.48, 
        behavior: "smooth" ,  
      })
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({ 
          top: maxScroll * 0.48, 
          behavior: "smooth" ,  
        })

       
      }, 400);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToProject = () => {
    setShowNav(false);
    setNavTransition("project");
    setTimeout(() => {
      setNavTransition(0);

     
    }, 1000);
    let positionOffset = 0;

    if (scrollPosition <= maxScroll * 0.65 ) {
      positionOffset = -maxScroll * 0.19;
    } else {
      positionOffset = -maxScroll * 0.13;
    }
   
    if (path === "/") {
      // scroller.scrollTo("project", {
      //   smooth: true,
      //   spy: true,
      //   duration: 700,
      //   offset: positionOffset,
      // });
      window.scrollTo({ 
        top: maxScroll * 0.76, 
        behavior: "smooth" ,  
      })
      
    } else {
      setNavDelay(1);
      setTimeout(() => {
        window.scrollTo({ 
          top: maxScroll * 0.76, 
          behavior: "smooth" ,  
        })

       
      }, 400);

      setTimeout(() => {
        window.scrollTo({ 
          top: maxScroll * 0.76, 
          behavior: "smooth" ,  
        })

       
      }, 500);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

  const scrollToContact = () => {
    setShowNav(false);
    setNavTransition("contact");
    if (scrollPosition > maxScroll * 0.87) {
      setNavTransition(0);
    }

    if (path === "/") {
      window.scrollTo({ 
        top: maxScroll * 1, 
        behavior: "smooth" ,  
      })
    } else {
      setNavDelay(1);
      setTimeout(() => {
         window.scrollTo({ 
        top: maxScroll * 1, 
        behavior: "smooth" ,  
      })

       
      }, 400);
      setTimeout(() => {
        window.scrollTo({ 
       top: maxScroll * 1, 
       behavior: "smooth" ,  
     })

      
     }, 500);

      setTimeout(() => {
        setNavDelay(0);
      }, 700);
    }
  };

 

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

 
  useEffect(() => {
    console.log("InctiveNavbarStatus", navTransition);
    
      if (navTransition === "home") {
        if (scrollPosition <= maxScroll * 0.13) {
          setNavTransition(0);
        }
      } else if (navTransition === "about") {
        if (scrollPosition > maxScroll * 0.13 && scrollPosition <= maxScroll * 0.38) {
          setNavTransition(0);
        }
      } else if (navTransition === "skills") {
        if (scrollPosition > maxScroll * 0.38 && scrollPosition <= maxScroll * 0.65) {
          setNavTransition(0);
        }
      } else if (navTransition === "project") {
        if (scrollPosition > maxScroll * 0.65 && scrollPosition <= maxScroll * 0.87) {
          setNavTransition(0);
     
        }
      } else if (navTransition === "contact") {
        if (scrollPosition > maxScroll * 0.87) {
          setNavTransition(0);
        }
      }

   
    
    console.log(scrollPosition);
  }, [scrollPosition, location, navTransition]);

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
              
              window.scrollY  <= maxScroll * 0.13 &&
              path === "/" &&
              navDelay !== 1 &&
              navTransition === 0
                ? ` text-sm md:text-lg mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6  "
            }
            onClick={scrollToHome}
          >
            Home
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.13 && 
              window.scrollY  <= maxScroll * 0.38 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6"
            }
            onClick={scrollToAbout}
          >
            About
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.38 && 
              window.scrollY  <= maxScroll * 0.65 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6"
            }
            onClick={scrollToSkills}
          >
            Skills
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.65 && 
              window.scrollY  <= maxScroll * 0.87 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : path === "/project/desktop" ||
                  path === "/project/website" ||
                  path === "/project/mobile"
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6"
            }
            onClick={scrollToProject}
          >
            Project
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.87 &&
              path === "/" && navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2  ${
                    darkMode ? "border-white" : "border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6"
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
          }  text-[#c4c6c9] space-y-5 flex flex-col text-center fixed h-screen top-8 text-left ml-3 w-4/6 max-w-[7rem] rounded-lg shadow-lg p-6`}
        >
          <button
            className=" w-5 h-5 ml-auto relative bottom-2 left-2"
            onClick={() => setShowNav(false)}
          >
            <CloseButton />
          </button>

          <div className="relative bottom-5 flex flex-col  ">
          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              
              window.scrollY  <= maxScroll * 0.13 &&
              path === "/" &&
              navDelay !== 1 &&
              navTransition === 0
                ? ` text-sm md:text-lg mr-4 mt-6 border-b-2 max-w-fit  ${
                    darkMode ? "border-white" : "border-white min501:border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6 max-w-fit "
            }
            onClick={scrollToHome}
          >
            Home
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.13 && 
              window.scrollY  <= maxScroll * 0.38 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2 max-w-fit ${
                    darkMode ? "border-white" : "border-white min501:border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6 max-w-fit"
            }
            onClick={scrollToAbout}
          >
            About
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.38 && 
              window.scrollY  <= maxScroll * 0.65 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2 max-w-fit  ${
                    darkMode ? "border-white" : "border-white min501:border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6 max-w-fit"
            }
            onClick={scrollToSkills}
          >
            Skills
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.65 && 
              window.scrollY  <= maxScroll * 0.87 &&
              path === "/" &&
              navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2 max-w-fit ${
                    darkMode ? "border-white" : "border-white min501:border-[#405189]"
                  } `
                : path === "/project/desktop" ||
                  path === "/project/website" ||
                  path === "/project/mobile"
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2 max-w-fit ${
                    darkMode ? "border-white" : "border-white min501:border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6 max-w-fit"
            }
            onClick={scrollToProject}
          >
            Project
          </NavLink>

          <NavLink
            to={path === "/" ? "" : "/"}
            className={
              window.scrollY  > maxScroll * 0.87 &&
              path === "/" && navTransition === 0
                ? `text-sm md:text-lg mr-4 mt-6 border-b-2 max-w-fit ${
                    darkMode ? "border-white" : "border-white min501:border-[#405189]"
                  } `
                : " text-sm md:text-lg mr-4 mt-6 max-w-fit"
            }
            onClick={scrollToContact}
          >
            Contact
          </NavLink>
          </div>
   
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
