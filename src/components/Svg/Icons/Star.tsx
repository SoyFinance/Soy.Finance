import React from "react";

const Icon: React.FC<{color: string}> = ({color}) => {
  return (
    
    <svg width="54" height="51" xmlns="http://www.w3.org/2000/svg" viewBox="0.5 0 53 51" fill={color} strokeMiterlimit="100" stroke="#58b4fd" strokeWidth="2">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="51" viewBox="0.121 0 53 51">
            <path paintOrder="stroke fill markers" fillRule="evenodd" d="M26.62 0l7.42 17.859 19.08 1.621L38.628 32.14l4.372 18.86L26.62 40.965 10.243 51l4.372-18.861L.121 19.48l19.08-1.621 7.42-17.86z"/>
        </svg>
    </svg>
  );
};

export default Icon;
