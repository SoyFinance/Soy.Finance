import React from "react";
import { Svg } from "@soy-libs/uikit";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="15" viewBox="0 0 18 15" {...props}>
      <g id="Group_53" data-name="Group 53" transform="translate(-1019 -4579)">
        <circle id="Ellipse_45" data-name="Ellipse 45" cx="3" cy="3" r="3" transform="translate(1031 4579)" fill="#fff"/>
        <circle id="Ellipse_47" data-name="Ellipse 47" cx="3" cy="3" r="3" transform="translate(1019 4579)" fill="#fff"/>
        <circle id="Ellipse_47-2" data-name="Ellipse 47" cx="3" cy="3" r="3" transform="translate(1025 4588)" fill="#fff"/>
      </g>
  </Svg>
  );
};

export default Icon;