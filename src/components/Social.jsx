import Blob from "./Blob";
import ProfileLight from "../assets/ProfileLightMode.png";
import ProfileDark from "../assets/ProfileDarkMode.png";
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
      <div className={` text-white font-google ${size}  font-semibold   space-x-1`}>
       
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


      </div>
    </>
  );
}

export default Social;
