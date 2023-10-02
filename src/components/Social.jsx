import Blob from "./Blob";
import ProfileLight from "../assets/ProfileLightMode.png";
import ProfileDark from "../assets/ProfileDarkMode.png";
import { ReactComponent as LightPs } from "../assets/darkps.svg";
import { ReactComponent as DarkPs } from "../assets/lightps.svg";
import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function Social({size}) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <div className={` text-white font-google ${size}  font-semibold   space-x-2`}>
       

       
        <a onClick={()=> openInNewTab('https://www.linkedin.com/in/riandikast/')}>
          {" "}
          {darkMode ? (
              <i className="bx bxl-linkedin-square"></i>
          ) : (
            <i className="bx bxl-linkedin-square" style={{color:'#405189'}}></i>
          )}
     
        </a>
      
    

        <a onClick={()=> openInNewTab('https://github.com/riandikast')}>
          {" "}
          {darkMode ? (
            <i className={"bx bxl-github"}></i>
          ) : (
            <i className="bx bxl-github" style={{color:'#405189'}}></i>
          )}
        </a>

        <a onClick={()=> openInNewTab('https://play.google.com/store/apps/dev?id=6066239380994745800')}>
          {" "}
          {darkMode ? (
            <i className={"bx bxl-play-store"}></i>
          ) : (
            <i className="bx bxl-play-store" style={{color:'#405189'}}></i>
          )}
        </a>

      
        
      

      </div>
    </>
  );
}

export default Social;
