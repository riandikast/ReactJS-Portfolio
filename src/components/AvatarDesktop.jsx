import BlobDesktop from "./BlobDesktop";
import ProfileLight from "../assets/ProfileLightMode.png";
import ProfileDark from "../assets/ProfileDarkMode.png";
import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function AvatarDesktop({width, height}) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <>
      <BlobDesktop
        image={darkMode ? ProfileDark : ProfileLight}
        width={width}
        height={height}
      />
      
    </>
  );
}

export default AvatarDesktop;
