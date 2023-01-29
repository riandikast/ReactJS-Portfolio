import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import ScrollToTop from "./routes/ScrollToTop";
import { useEffect } from "react";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import AOS from "aos";
import "aos/dist/aos.css"
import {themeState, showNavState} from './components/Navbar'
import { useAtom } from "jotai";

function App() {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const [showNav, setShowNav] = useAtom(showNavState);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    AOS.init({duration:1000});
   
  }, [darkMode]);


  return (
    <div className={`App `}>
      <Router className=''>
          <ScrollToTop />

          <div className="w-screen top-0 fixed z-10 " >
            <Navbar />
          </div>
          <div className={`justify-center items-center mt-12 h-screen ${darkMode? 'bg-[#0d1117]' : 'bg-[#f3f3f9]'}`} onClick={()=> setShowNav(false)}>
            <AnimatedRoutes></AnimatedRoutes>
          </div>
        </Router>
    </div>
  );
}

export default App;
