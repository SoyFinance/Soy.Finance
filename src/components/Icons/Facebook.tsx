import React from "react";
import { Svg } from "@soy-libs/uikit";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="15" viewBox="0 0 16 15" {...props}>
      <path d="M14.0399 0H2.78992C1.75585 0 0.914917 0.840937 0.914917 1.875V13.125C0.914917 14.1591 1.75585 15 2.78992 15H8.41492V9.84375H6.53992V7.5H8.41492V5.625C8.41492 4.07156 9.67398 2.8125 11.2274 2.8125H13.1024V5.15625H12.1649C11.6474 5.15625 11.2274 5.1075 11.2274 5.625V7.5H13.5712L12.6337 9.84375H11.2274V15H14.0399C15.074 15 15.9149 14.1591 15.9149 13.125V1.875C15.9149 0.840937 15.074 0 14.0399 0Z" fill="#CAF0F8"/>
  </Svg>
  );
};

export default Icon;