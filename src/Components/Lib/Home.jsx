import React from "react";

function Home({color}) {
    return(
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1373_68" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                <rect width="28" height="28" fill="#C4C4C4"/>
            </mask>
            <g mask="url(#mask0_1373_68)">
                <path d="M26.4601 8.83515L14.671 2.47331C14.3245 2.28665 13.908 2.28665 13.5626 2.47331L1.77931 8.83515C1.21231 9.14315 1.00114 9.85013 1.30681 10.4171C1.51681 10.808 1.91931 11.0296 2.33348 11.0296C2.52015 11.0296 2.71148 10.9853 2.88765 10.8896L3.74398 10.4276L5.59898 23.5526C5.85098 24.969 7.12731 25.9583 8.70231 25.9583H19.5313C21.1063 25.9583 22.3826 24.969 22.637 23.5223L24.4896 10.4265L25.3495 10.8908C25.9153 11.1976 26.6235 10.9865 26.9291 10.4195C27.236 9.85247 27.0225 9.14431 26.4578 8.83864L26.4601 8.83515ZM14.1168 18.2676C12.0226 18.2676 10.3251 16.5701 10.3251 14.476C10.3251 12.3818 12.0226 10.6843 14.1168 10.6843C16.211 10.6843 17.9085 12.3818 17.9085 14.476C17.9085 16.5701 16.211 18.2676 14.1168 18.2676Z" fill={color}/>
            </g>
        </svg>  
    )
}
    
export {Home}