import Blob from "./Blob";
import ProfileLight from "../assets/ProfileLightMode.png";
import ProfileDark from "../assets/ProfileDarkMode.png";
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
                  Hello I'm Andika, I'm a Junior Developer Passionate on Android
                  and Game development <br></br> I have been involved in project
                  with some language like Kotlin, Javascript, Python, Etc.{" "}
                  <br></br>Currently I serve as college student in
                  Singaperbangsa Karawang University.
                </div>
              </div>
       
      
    </>
  );
}

export default About;