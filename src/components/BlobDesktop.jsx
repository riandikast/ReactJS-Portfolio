import { useAtom } from "jotai";
import { themeState } from "./Navbar";

function BlobDesktop({ image, width, height }) {

  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <svg
      className={`${width} ${height} mt-2 `}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
      }}
    >
      <mask id="mask1" mask-type="alpha">
        <path
          d="M36.4,-62.3C48.8,-55.9,61.6,-49.4,66.7,-39C71.8,-28.6,69.2,-14.3,67.5,-1C65.8,12.3,65,24.7,60.9,36.9C56.8,49.1,49.5,61.1,38.9,69.6C28.2,78.1,14.1,83.1,1.2,81C-11.6,78.9,-23.3,69.7,-37.1,63C-51,56.3,-67,52.1,-74.8,42C-82.6,32,-82.3,16,-81.6,0.4C-80.8,-15.2,-79.8,-30.3,-72.5,-41.3C-65.1,-52.2,-51.5,-58.9,-38.4,-64.8C-25.3,-70.7,-12.6,-75.8,-0.3,-75.2C12,-74.7,24,-68.6,36.4,-62.3Z"
          transform="translate(100 100)"
        />
      </mask>

      <g mask="url(#mask1)">
        <path
          mask-type="alpha"
          fill={darkMode ? "#3a4c5d" : "#405189"}
          d="M36.4,-62.3C48.8,-55.9,61.6,-49.4,66.7,-39C71.8,-28.6,69.2,-14.3,67.5,-1C65.8,12.3,65,24.7,60.9,36.9C56.8,49.1,49.5,61.1,38.9,69.6C28.2,78.1,14.1,83.1,1.2,81C-11.6,78.9,-23.3,69.7,-37.1,63C-51,56.3,-67,52.1,-74.8,42C-82.6,32,-82.3,16,-81.6,0.4C-80.8,-15.2,-79.8,-30.3,-72.5,-41.3C-65.1,-52.2,-51.5,-58.9,-38.4,-64.8C-25.3,-70.7,-12.6,-75.8,-0.3,-75.2C12,-74.7,24,-68.6,36.4,-62.3Z"
          transform="translate(100 100)"
        />

        <image xlinkHref={image} x="-8" y="42" height="150" width="210" />
      </g>
    </svg>
  );
}

export default BlobDesktop;
