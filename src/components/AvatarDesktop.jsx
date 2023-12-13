import BlobDesktop from "./BlobDesktop";
import Profile from "../assets/pp.png";
import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function AvatarDesktop({width, height}) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <>
      <BlobDesktop
        image={Profile}
        width={width}
        height={height}
      />
      
    </>
  );
}

export default AvatarDesktop;
