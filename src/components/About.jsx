import Blob from "./Blob";

import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function About({width, height}) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <>
    
              <div>
                <div className="space-x-80  mr-28 font-google text-3xl font-semibold  mt-32 ">
                  <div>About</div>
                </div>
                <div className="mr-24    font-google text-sm font-semibold ml-2 mt-8">
                  Hello I'm Andika,  <br></br> I have been involved in project
                  with some language like Kotlin, Javascript, Python, Etc.{" "}
                  <br></br>lets take a look at my project.
                </div>
              </div>
       
      
    </>
  );
}

export default About;