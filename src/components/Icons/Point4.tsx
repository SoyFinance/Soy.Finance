import React from "react";
import { Svg } from "@soy-libs/uikit";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="15" viewBox="0 0 16 15" {...props}>
      <g id="Group_56" data-name="Group 56" transform="translate(-642.801 -4576.296)">
        <g id="Group_54" data-name="Group 54" transform="translate(642.801 4576)">
          <circle id="Ellipse_45" data-name="Ellipse 45" cx="3" cy="3" r="3" transform="translate(10 0.296)" fill="#fff"/>
          <circle id="Ellipse_47" data-name="Ellipse 47" cx="3" cy="3" r="3" transform="translate(0 0.296)" fill="#fff"/>
        </g>
        <g id="Group_55" data-name="Group 55" transform="translate(642.801 4585.592)">
          <circle id="Ellipse_45-2" data-name="Ellipse 45" cx="3" cy="3" r="3" transform="translate(10 -0.296)" fill="#fff"/>
          <circle id="Ellipse_47-2" data-name="Ellipse 47" cx="3" cy="3" r="3" transform="translate(0 -0.296)" fill="#fff"/>
        </g>
      </g>
  </Svg>
  );
};

export default Icon;
