import React from "react";
import { Svg } from "@soy-libs/uikit";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="37.448" height="37.448" viewBox="0 0 37.448 37.448" {...props}>
     <path d="M18.724,0A18.724,18.724,0,1,1,0,18.724,18.733,18.733,0,0,1,18.724,0Zm10.93,28.592v-.369l-1.711-1.68a.512.512,0,0,1-.195-.492V13.712a.512.512,0,0,1,.195-.492L29.7,11.541v-.369H23.631L19.308,21.956,14.391,11.172H8.03v.369l2.049,2.468a.85.85,0,0,1,.277.717v9.7a1.117,1.117,0,0,1-.3.963l-2.3,2.8v.369h6.536v-.369l-2.3-2.8a1.157,1.157,0,0,1-.318-.963V16.037L17.4,28.551h.666L23,16.037v9.975c0,.266,0,.317-.174.491L21.05,28.224v.369h8.6Z" fill="#fff" fillRule="evenodd"/>
    </Svg>
  );
};

export default Icon;
