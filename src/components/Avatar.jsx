import Blob from "./Blob";
import ProfileLight from "../assets/ProfileLightMode.png";
import ProfileDark from "../assets/ProfileDarkMode.png";
import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function Avatar({width, height}) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <>
      <Blob
        image={darkMode ? ProfileDark : ProfileLight}
        width={width}
        height={height}
      />
      
    </>
  );
}

export default Avatar;
