import Blob from "./Blob";
import Profile from "../assets/pp.png";

import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function Avatar({width, height}) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <>
      <Blob
        image={Profile}
        width={width}
        height={height}
      />
      
    </>
  );
}

export default Avatar;
