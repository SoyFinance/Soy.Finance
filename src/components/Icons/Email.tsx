import React from "react";
import { Svg } from "@soy-libs/uikit";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="38" height="38" viewBox="0 0 38 38" {...props}>
      <path id="Subtraction_2" data-name="Subtraction 2" d="M19,38A19.005,19.005,0,0,1,11.6,1.493,19.005,19.005,0,0,1,26.4,36.507,18.882,18.882,0,0,1,19,38ZM16.566,20l-6.577,5.67H28.011L21.4,20,19,22l-2.434-2h0Zm12.046-6.345L22,19.365l6.608,5.707Zm-19.224,0V25.073L16,19.365Zm.6-.6L19,20.867l9.011-7.81H9.989Z" fill="#fff"/>
  </Svg>
  );
};

export default Icon
