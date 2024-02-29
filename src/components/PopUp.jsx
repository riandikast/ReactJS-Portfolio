import { useAtom } from "jotai";
import { themeState } from "./Navbar";
import Cancel from "../assets/cancel.png";
import YouTube, { YouTubeProps } from "react-youtube";

function Popup({ image, name, desc, platform, link1, link2, cancel, video, demo, mobileProject, mobileProjectBg }) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <div
        className={`flex flex-col w-5/6 min501:w-3/6 mx-auto    ${
          darkMode ? "text-white bg-[#3a4c5d] " : "text-white bg-[#5b6a9a] "
        }  ${mobileProjectBg}`}
      >
        <div>
          <div className="flex flex-col">
            <img
              width="10%"
              src={Cancel}
              className="w-[2rem] m-6 ml-auto mt-16"
              onClick={cancel}
            ></img>
          
              <YouTube
                videoId={`${image}`}
                iframeClassName={` ${video? "w-4/6 min501:w-4/6 mx-auto h-[50%] min501:h-[15rem]": "hidden" }`}
              />
         
              <img
              width="100%"
              src={image}
              className={` ${video? "hidden": "flex flex-row w-4/6 mx-auto " } ${mobileProject} `}
              
            ></img>
           

            <div className=" text-[1rem] min501:text-[1.2rem] mt-2 line-clamp-1">
              {name}
            </div>
          </div>

          <div>
            <div className="mt-4 w-4/6 min501:w-4/6 mx-auto px-2 flex flex-col text-left mb-8  ">
          
              <div className="text-[0.9rem] mt-4">Description:</div>
              <div className="text-[0.9rem] min501:text-[1.1rem] line-clamp-4 text-justify">
                {desc}
              </div>
              <div
                className={`flex flex-row space-x-4 mt-4 ${darkMode ? "" : ""}`}
              >
             
                <button
                  onClick={() => openInNewTab(link1)}
                  className={`text-[0.7rem] min501:text-[0.9rem] p-2 rounded-lg ${
                    darkMode
                      ? "bg-[#394c5d] border-2 border-white text-white"
                      : "bg-[#405189] text-white border-2 border-white"
                  }`}
                >
                  Download
                </button>

                <button
                  onClick={() => openInNewTab(link2)}
                  className={ `${demo? "": "hidden" } text-[0.7rem] min501:text-[0.9rem] p-2 rounded-lg ${
                    darkMode
                      ? "bg-[#394c5d] border-2 border-white text-white"
                      : "bg-[#405189] text-white border-2 border-white"
                  }`}
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
