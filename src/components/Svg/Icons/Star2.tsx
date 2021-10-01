import React from "react";

const Icon: React.FC<{color: string}> = ({color}) => {
  return (
    
    <svg width="40" height="37" xmlns="http://www.w3.org/2000/svg" viewBox="0.5 0 38.999 37" fill={color} strokeMiterlimit="100" stroke="#58b4fd" strokeWidth="2">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0.121 0 39 37">
            <path paintOrder="stroke fill markers" fillRule="evenodd" d="M19.62 0l5.461 12.956 14.04 1.176-10.666 9.184L31.673 37 19.62 29.719 7.569 37l3.217-13.684L.121 14.132l14.04-1.176L19.62 0z"/>
        </svg>
    </svg>
  );
};

export default Icon;
