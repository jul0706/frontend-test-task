import React from "react";
import MapPoint from "./MapPoint";
import model from "../utils/model";

function Map() {
    let id = 0;
    return (
        <div className="map-container">
            <svg className="map-container__map"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                clipPath="url(#MapClipRectangle)"
                overflow="hidden"
                textRendering="optimizeLegibility"
            >
                <defs>
                    <clipPath id="MapClipRectangle" clipPathUnits="userSpaceOnUse">
                        <path d="M0 0H1000.12V999.75H0z"></path>
                    </clipPath>
                    <symbol id="1" fill="none">
                        <path d="M390.55 497.74l211.03 269.14"></path>
                    </symbol>
                    <symbol id="2" fill="none">
                        <path d="M102.01 154.49l-19.53-4.71"></path>
                    </symbol>
                    <symbol id="3" fill="none">
                        <path d="M23.51 347.85L.05 335.1"></path>
                    </symbol>
                    <symbol id="4" fill="none">
                        <path d="M-675.39-248.22l144.74 46.17 144.26 36.93 77.37 29.48 41.18 26.28 14.52 12.07 2.62 24.5 80.36 41.23 47.23 36.63 19.17 58.07 71.72 9.78 49.73 10.75 10.74-1.18 19.92-7.75 10.22.42 10.3-.24 10.18-1.38 21.39 3.45 4.31-7.59 4.66-6.22 5.15-7.7"></path>
                    </symbol>
                    <symbol id="5" fill="none">
                        <path d="M583.1 745.14l3.91 6.99M526.56 711.18l2.29-1.43 12.04-7.55"></path>
                    </symbol>
                    <symbol id="6" fill="none">
                        <path d="M56.1 71.99l-5.35 5.87"></path>
                    </symbol>
                    <symbol id="7" fill="none">
                        <path d="M485.23 410.31l-5.37 12.6-6.81 12.89-19.25 48.32-5.15 11.04M436.99 542.56l-3.67 13.42-29.83 78.24-2.33 6.15"></path>
                    </symbol>
                    <symbol id="8" fill="none">
                        <path d="M275.1 552.4l-.72 25.68"></path>
                    </symbol>
                    <symbol id="9" fill="none">
                        <path d="M540.9 702.2l-12.04 7.55-2.29 1.43-13.72 7.69-1.65-1.4-1.39-.96-2.75-.61-2.82.07-15.31-34.39-1.01-2.43-1.69-4.31-3.05 1.21-3.21-8.34-5.01-12.9-3.35 1.31-4.06-10.21 14.48-6.49.37-1.6 2.13-1.63 5.74-3.07 15.82 27.85-16.49 9.11 3.42 6.19 1.33 2.38 3.45 6.31-1.85.99 3.69 6.24 9.22-5.2 5.84-1.9-.65-1.15 8.99-4.78-3.13-6.27 1.78-.97-.84-1.53 3.8-2.16.73 1.33 10.22-5.73 4.16-2.32 3.48 6.35-3.84 2.29-10.1 6.45-2.76 1.65 14.35 23.96"></path>
                    </symbol>
                    <symbol id="10" fill="none">
                        <path d="M812.45 395.78l-1.19-6.02-25.5-13.25L816.25 336l-8.03-42.3"></path>
                        <path d="M816.24 336l26.35-11.88 16 3.95 23.24-10.48 3.13-2.34M496.34 377.88l-11.1 32.43-44.85-18.17 11.5-32.22M736.95 363.62l-3.48 18.45M373.33 191.58l-.33 7.83-4.79 15.52-7.73 18.38-5.33 6.86-20.68 69.11M232.81 568.55l3.04 23.74.26 8.02 1.74 52.57 1.16 12.63 3.44 42.21"></path>
                        <path d="M239.01 665.51l-52.41-5.77-11.7 5.56-13.35-.28-8.01 3.32-3 6.74-1.99 15.75 3 23.75M147.33 572.5l-.41 16.5 8.38-.47 55.76 2.02 24.79 1.74M11.88 194.07l38.35 13.13M98.35 61.13l1.75.93 4.36 2.27 5.44 2.84 2.7 1.45M5.14 399.73l-33.13 103.9-19.67 48.67-25.66 63.67-1.55 3.73-13.36 32.09M3.52 518.59l-31.51-14.96M114.49 573.05l-17.75 48.36-.49 6.49-15.5 37.75-12.25 15.5-5.75 7.26-6 3.99-9.5-.5-9.51-3.74-5.5-5.76v-10.75l4.75-14.25 34.25-81.79M176.92 213.08l13.14-30.37M597.13 688.07l-3.48-7.83.79-14.14 2.4-8.98 7.91-12.57 2.79-4.52 4.52-7.31 8.02-12.99"></path>
                        <path d="M607.54 640.03l.69 9.3 3.91 14.14 5.23 9.58 14.69 15.36M364.59 516.11l-3.69 41.17M366.71 622.07l5.61-47.42M436.99 542.56l5.17-38.43 6.5-8.97-5.01-8.7-21.99-13.06-49.44-12.39.69-20.04-6.1-3.48-8.65-.03M200.14 381.89l4.77-30.61 11.07.79 9.15.74M146.92 589l-2 30.88-10.67 59.15M144.07 572.65l-.65-14.13 2.66-34.83 2.8-35.86M150.93 572.37l2.89-34.05 1.65-11.87 3.85-6.06M182.11 570.65l.16-6.88 3.5-51.5M240.31 569.05l5.29-14.64.25-36.53M253.14 560l.47-17.59-3.5-2.75 1.03-24.51M309.81 538.79l-4.46-19.13-1.5-15.75 1.54-14.16M236.11 600.31l33.61 2.67M307.4 593.6l-4.9 16.85-4.35 30.47.43 26.11 2.98 16.77M352.52 317.31l-8.88 35.49 1.89 9.29-.09 3.64M552.88 337.74l-38.45-6.59M310.76 857.94l13.24 13.7M310.87 885.26l13.12-13.63 12.13-12.58M403.9 730.63l18.31 11.78 26.42 11.19M422.21 742.41l26.99-50.83M612.06 632.72l15.85 16.24 24.22 28.73M588.8 155.48l-31.26-5.12M681.66 52.56l-25.51-19.61M143.42 558.52l-3.74-17.37M474.77 164.96l-47.12 37.81M581.97 205.3l-31.94-3.8-18.29 2.29M550.03 201.51l.19-2.95M328.41 85.35l8.07-9.21-35.32-43.47M648.46 263.92l8.09-36.77M142.13 229.18l-51.08-19.01-6.79 3.53-5.97 16.3M126.98 269.73l-19.29-4.95"></path>
                    </symbol>
                    <symbol id="11" fill="none">
                        <path d="M368.09 132.36l59.56 70.42 36.29 42.91 15.93 19.84 21.75 16.78 8.42 4.85 39.06 22.55 10.37 7.29M-239.05 1192.79l28.87-34.08 37.63-44.41 24.84-24.53 33.09-37.5 2.25-2.53 38.8-39.22 10.94-10.4 29.46-30.42 18.04-16.34 14.64-11.92 9.82-14.34 7.23-16.66 5.16-25.35.75-26.88 2-24.72 4.18-53.1 2.22-28.21.32-18.42-8.78-34.07-4-30.7 9.67-34.96 8.09-20.23 10.46-26.2 4.53-15.03M173.05 171.55l-71.04-17.06M82.48 149.78l-6.7-1.84M544.29 387.64l-47.95-9.76-36.13-14.6-8.32-3.37-32.34-13.25-18.95-8.3-48.08-21.05-18.04-8.04M530.77 499.57l-8.71.15-21.9.04-19.69-.9-19.62-2.39-12.18-1.31-17.05 3.55-37.49 6.7-29.54 10.71-34.21 12.4-20.57 10.28-34.71 13.61-21.96 7.59-12.83 9.05"></path>
                        <path d="M510.05 287.16l-9.95 28.81-10.05 1.91"></path>
                    </symbol>
                    <symbol id="12" fill="none">
                        <path d="M576.24 246.46l19.59 5.05 52.62 12.4 9.96 2.35 65.6 11.86 86.64-9.59M559.48 317.01l8.75 4.92 44.59 7.75 14.66 10.97 25.2 6.81-10.2 18.38-22.73 38.82-13.74 34.12-8.96 29.09-2.26 10.62-1.62 8.5-1.01 10 .88 13 .62 9.37-.16 30.16.47 4.38-3.64 17.95-6.97 20.73 1.78 10.33 6.24 4.82 28.68 11.99 48.24 23.43 9.67 5.01.92 5.16-7.2 9.04-5.19 3.84-7.61 6.91-6.79 4.57-20.06 10.73M652.69 347.46l58.9 10.99 25.36 5.17 48.8 12.89M593.52 549.53l-61.03-30.08M225.15-43.71l17.72 24.15 13.44 18.33 55.49 66.89 16.62 19.69 39.68 47 56.08-17.67 46.21-9.83 57.12-6.9 35.32-4.26 50.52-7.8-9.96-24.14-15.04-19.23L529.06-3.8l-18-8.25-19.71-6.44-40-28.01-43-23"></path>
                        <path d="M612.83 329.67l-15.4-61.52-1.59-16.64M260.31 218.71l-70.25-36-17.01-11.15-30.92 57.62-15.16 40.55-6.93 40.74-9.07 53.6"></path>
                        <path d="M80.9 356.48l12.59 2.16 17.49 5.44 65.05 14.96 14.09 1.63 10.02 1.22 12.42 1.38 8.44 1.68M11.23 561.25l-8.17-12.03-3.43-11.08-.19-11.47 4.08-8.08 22.74-43.74 8.25-19.06 5.48-23.9 2.22-21.16-1.76-17.19-1.63-13.78-6.3-22.16-9.01-9.73M.05 335.1l-5.84-3.88 28.7-60.68 27.34-63.34 19.56-46.26 5.97-12.99 23.07-52.08 6.09-10.58 7.68-16.67 20.25-32.82 44.1-64.23 31.88-40.47M132.87 35.79L97.23 11.52l-58.17-23.4-43.05-17.33-11.23-4.52-52.54-17.81-12.8-4.34-22.89-7.76-35.73-12.11-14.13 6.3-91.25-43.61"></path>
                        <path d="M75.78 147.94l-31.9-7.5-53.63-12.24-77.62-.81-39.8 4.55-27.51 6.97-20.44-2.31-51.14-20.65-34.48-12.95-58.53-2.96-40.05-14.5-34.47 1.06-45.33-3.2-33.6-10.4-4.1-2.66-10.43-8.11-33.47-26.84M808.21 293.7l2.44-25.17 3.27-24.24-8.3-30.43-7.18-28.73 1.51-21.41 5.28-24.79M243.58 272.17l90.9 37.1M-15.4 869.58l18.14 3.93M668.11 18.17l-42-29.45-64.49-25.82-16.01-10.97-17.31-20.02-9.09-10.33.87-12.27 6.06-19.37.43-9.04-4.76-15.51-6.93-9.04-13.85-9.68-9.95-7.76h-30.29l-19.91-.64-48.97 12.08-23.87-8.73-6.77-10.28M488.25 599.85l5.01 4.67 10.55 8.5 8.35 3.2 5.49 3.25 7.26 7.47 6.93 10.22 12.97 26.77 6.18 15.5 18.67 31.88 4.25 8.57M223 366.34l158.71 35.44 12.01.68 7.85-6.2 17.97-49.6M221.04 951.41l-23.61-4.69-36.57-1.72-45.09-4.63-25.35-3.55-10.27-1.59-29.26 4.03-25.78 3.35-25.59-1.17"></path>
                        <path d="M80.15 935.24l-6.07 30.45-16.54 50.21M24.49 833.51l-115.86-37.18M527.5 97.95l-3.18-37.43-26 2-7-81M-89.96 714.37l8.33-19.06 7.5-17.17.88-2 1.71-4 11.83-26.95 7.14-16.38 8.88-20.37 14.4-32.08 11.86-10.18 7.87-4.1 11.42-1.65 9.39.83 39.95 11.35 20.07 3.03 43.24-2.57 29.58-.4 3.26-.15 3.6-.13 31.18-1.72 28.08-1.2 22.62-.9 7.49.5 34.08 9.04 33.01 15.52 17 7.98 33.21 15.64 9.11 4.84 10.85 5.77 23.6 12.53 40.59 24.33M594.61 131.12l26.99 6.74 16.35 12.58 33.96 7.83M462.36 357.22l-2.15 6.06"></path>
                    </symbol>
                    <symbol id="13" fill="none">
                        <path d="M82.45 1143.04l27.7-22.29 32.17-37.55 10.73-18.46 9.81-16.87 12.83-26.82 19.33-31.41 26.01-38.24 19.38-20.08 45.28-43.09 3.93-4.76 21.13-25.54 52.28-63.21 15.2-23.11 17.67-26.89 7.99-14.1 37.85-65.94 17.91-25.32 15.05-21.02 13.53-18.51 26.9-35.11 12.42-22.03 3.41-12.14 1.5-11.12-1.72-19.88.08-4.25 4.71-47.36 7.01-49.56 1.72-10.75 4.74-29.87 3.85-20.04.31-1.61 6.29-19.12 11.16-33.64 5.6-36.9 3.5-24.92 2.23-16.24 3.95-28.88 2.87-20.94.33-2.39 5.49-21.97 9.54-33.03 9.18-12.2 42.81-52.94 11.96-14.78 62.82-94.84 77.23-91.63 40.76-46.03 22.17-26.2 21.79-34.17 62.86-112.66 18.97-36.67"></path>
                    </symbol>
                    <symbol id="14" fill="none">
                        <path d="M207.2-41.9l-12.24 15.35L174.92-.62l-20.06 28.73-19 31.11-20.84 39.17-24.3 48.93-24.36 55.37L16.7 315.95l-25.53 57.89-5.15 11.69"></path>
                        <path d="M-22.61 421.36l31.94-74.35 12.51-29.1 49.13-112.52 24.31-55.68 24.35-49.41 20.34-37.5 18.98-30.45 20.32-29.58 19.16-25.86 12.68-14.82M-8.83 373.85l18.16-26.84"></path>
                    </symbol>
                    <symbol id="15" fill="none">
                        <path d="M-1108.93-54.33l74.54-40.73 49.35-3.13 48.29 45.42 36.74 40.73 8.4 68.92 18.9 75.19 49.34 50.12 73.49-12.53 45.14-46.99 39.9-14.1 73.48 9.4 75.02 25.68 33.29 31.93 38.05 25.73 38.05 13.29 26.75 15.96 11.73 4.38 21.39 8.55 12.57 9.82 9.33 14.46 8.14 19.47 6.82 12.32 5.51 6.42 7.54 7.15 11.97 4.83 11.37 2.49 44.76 1.97 25.73 2.14 30.52-1.97 2.87-7.13 10.65-2.5 16.4 9.47 15.69 5.35 12.69-4.46 14.84-.36 11.13 6.97 1.44 15.63 5.6 12.47 28.32 11.14 15.33-2.24 24.24-.25 32.31 10.57 15.2 8.75 13.05-1.61 20.35-.71 17.23 2.14 10.29 9.47 5.02 14.1 6.58.71 5.75-5.17 23.94-6.6 11.13-.54 4.55-.71 13.77 3.21 24.41 20.36 19.99 10 30.27.54 16.88 10.53 12.93 13.39 28.21 17.28 24.69 7.62 26.42 3.73 25.27 8.51 15.92 5.53M601.58 766.88l33.83 24.19 13 7.51 5.93 4.46M143.74 68.96l33.68 17.12 20.1 2.99 35.32 2.71 70.43 10.26 26.63 13.56 17.19 10.21"></path>
                    </symbol>
                    <symbol id="16" fill="none">
                        <path d="M648.52 800.27l3.05 2.1-3.34 4.77-7.81 4.74-10.44-5.21M535.92 635.78l4.31 9.9M541.93 649.63l14.23 32.95 12.64 22.55 7.22 12.68 11.82-4.84 23.4-13.36 7.32-3.73M630.03 693.09l-7.68 3.21-10.58 5.17-11.06 6.55-11.68 6.8-11.41 5.38M457.01 718.66l15.02 5.76-9.04 22.36M689.25 623.05l8.65-10.37.76-8.75-28.98-14.42-72-33.72-3.78 15.3M685.74 626.45l-15.8 14.66-3.73-2.63M663.47 636.78l-31.59-15.87M626 618.24l-20.31-8.47-17.09-9.4-1.58-3.38.21-3.88 4.81-16.8M454.3 718.16l3.5-8.63"></path>
                    </symbol>
                    <symbol id="17" fill="none">
                        <path d="M6.27 2005.97l42.82 3.77 35.2 4.55-57.87-108.6-28.23-88.93 24.77-151.83 11.57-72.74 19.49-52.34L86.69 1454l21.37-37.33 15.67-20.67 48.54-48.31 40.91-31.12 21.99-17.85 13.04-20.77 16.11-18.17 13.83-11.01 10.91-24 11.97-45.16 16.14-49.9 2.4-7.45 29.95-77.89-25.68-17.37-19.77-3.68-15.02-11.36-6.85-11.39-7.23-12.03-53.93-37.11M1156.1-283.73l-11.8 34.43-6.4 35.06-11.9 28.62-14.28 26.48-16.75 21.05-16.57 3.48-36.98 7.33-6.31 1.07-47.17 10.33-50.64 24.53-32.89 21.32-5.93 6.94-12.26 14.36-11.68 19.37-14.29 26.48-22.5 20.66-13.42 20.01-4.75 25.18-4.33 31.65-3.03 20.66-4.3 14.56-2.68 9.08-201.08-40.84M707.93 658.11l-.2-11.47 2.47-7.51-1.45-9.43-1.33-5.92-5.57-.15-3.86 3.99-4.32 5.98-9.71 13.81M592.18 496.99l-51.02.01-10.31-1.7M619.76 404.66l-10.34-2.73-22.84-.86-10.35 1.21-33.68-3.89M394.12 505.41l-2.5-3.02-18.59-5.73-23.96-11.24-12.79-1.59-23.98-3.73-13.47-5.46-19.66-11.22-11.37-4.81L255.52 446l-15.06-10.08-31.34-.7-20.58-10.3-16.9-13.99-12.91-8.25.74-9.26 1.67-9.65M560.63 777.48l2.93-27.38.98-3.27 2.28-2.73 11.75-6.41.06-3.62-1.83-4.67-.9-3.55-.39-1.53-1.58-4.46 14.1-5.97 30.91-17.35 6.75-3 6.38-5.13M535.56 447.95l34.05 12 27.46 7.93"></path>
                        <path d="M552.46 794.97l-.16-11.85 8.32-5.65 9.27 1.97 2.74 9.54M552.31 783.12l-24.77-10.18M579.38 748.61l2.23 4.67 6.53.86 2.47-5.08-2.55-4.95-6.02-.89-2.66 5.38M666.52 666.2l10.51 10.18 4.36 1.78 8.16-6.17 5.88-.5 5.87-2.25 4.74-6.49 1.88-4.63-5.01-4.13-6.38-2.5-3-.99-3.38 1.59-1.49 2.56-2.04 5.74.54 5.76 2.38 5.85"></path>
                        <path d="M578.57 737.7l3.47 5.53 1.06 1.9M587.02 752.13l1.13 2.02 4.42 12.43-.14 3.02M176.03 379.04l-14.89 4.74-5.48 1.72-4.25 4.91-5.27 3.34-11.68-.22-26.12 7.33-5.69 3.21-10.29-2.52-9.83-8.72-16.74-2.74-17.21-.7-8.15 4.13M274.3 211.45l16.22 3.8 6.42-4.46 3.04-9.79-.91-14.55M159.48 393.43l-8.06-3.02M237.85 652.88l-28.52-.67-13.8-.72h-5.36L174.9 665.3"></path>
                        <path d="M209.33 652.21l6.33-14.77 4.39-8.25-4.39-11.62-9.09-8.97-21.11 2.18-6.99 4.12-3.4 11.87.64 4.12.65 4.12 2.27 2.67 16.89 13.81"></path>
                        <path d="M178.47 614.91l-7.31-5.58-4.05-1.93-3.58.49-3.57 7.51-4.87 9.93v9.69l7.31 6.55 8.77 2.91 5.53-.97 1.95-5.81"></path>
                        <path d="M175.71 630.9l-7.14-10.66-5.04-12.35-3.57-5.09-4.55.97-.64 3.63 5.19 8 8.61 4.84M104.47 64.33l-8.18 7.15-13.79-2.24-12.76 1.54-13.63 1.21-5.35 5.87-3.63 3.8"></path>
                        <path d="M69.73 70.78l4.73 7.47 5.74-.44 24.74 7.48M59.56 36.32l2.88-2.71L92.6 50.55l6.95 5.77.55 5.74M103.27 33.35l-2.66-1.18-1.29-.64-11.98-5.55-1.65-6.42-5.2-3.81L35.55-4.47-24.14-25.9l-25.17-11.38-19.43-6.15-38.35-7.82-5.38-2.17"></path>
                        <path d="M87.35 25.98l-47.54-7.95H29.07l-9.33-2.6L-.22 8.3l-33.62-9.8-29.92-9-27.81-9.09L-117.5-24l-9.66-2.54-6.61-6.77-7.46-4.58-5.26-5.77"></path>
                        <path d="M29.08 18.02l2.89-10.69 3.59-11.81 2.52-5.48.98-1.92M39.82 18.02l-10.9 8.62.16-8.62-9.13 10.49-8.99 27.12"></path>
                        <path d="M28.92 26.64l.51 7.63 4.23 1.52 1.18 2.71-5.08 10.51-4.23-2.71 1.18-10.33 2.71-1.7M31.97 7.33L-29.2-12.15l-84.72-22.37-16.94-12.03M677.99 648.17l5.97-.76 6.21 4.67M590.34 571.86l8.07 2.75 36.09 19.7-14.43 25.42"></path>
                        <path d="M589.18 591.6l1.28.53 7.96-17.52M634.51 594.31l20.33 10.44-2.94 7.4 29.35 16 6.4-4.38 4.84-13.57-31.99-15.75-5.67 10.3M681.25 628.16l-11.49 11.64-3.51-2.53M687.65 623.78l2.68 4.37 3.35 5.45M296.94 210.78l7.2 2.11 6.54 2.1 20.39 6.62M444.75 671.62l3-5.76 12.83-17.8 9.65-10.04 11.1-6.88 3.17-3.82 6.48-8.45 3.04-8.19-.75-6.16M532.99 718.9l2.01 1.78 4.25 2 4.5 2 4.5 5.51 2.25 4.74 3 5.76"></path>
                        <path d="M528.58 756.02l10.8-6.54 3.87-3.56 10.25-5.24 23.29-11.28"></path>
                        <path d="M527.37 740.65l2.64 2.99 3.04.96 4.92.38 5.28.96M569.9 779.45l8.65-1.85 13.87-8.01 4.45 3.3 4.03 4.17 5.45 4.02 25.42 13.5 8.85 5.03 5.58 3.98-1.89 3.03-2.94 1.14-3.79-.86-7.6-2.82-7.5-4.14-7.28-4.8-7.26-3.71-7.25-1.97-10.22-.83-17.81.38-6.35 2.18-13.83 3.8-9.42 2.56-13.12 1-5.19-1.57M593.19 487l4.03 1.13 9.65 1.9 10 1 7.15-2.36M357.75 134.07l-5.19-2.56-55.77-20.83-8.55-.47-10.02 2.21-16.18 10.6-4.09 2.41-35.17 23.44-26.94 20.75-5.79 13.1M457.78 712.03l-2.72 7.29M463.95 245.69l-7.41 31.18-2.75 29.51-9.5 22.25-9.5 3-28.5-8.01-5.69 14.75M291.21 184.14l7.86 2.31 6.4-7.41 9.42-5.15 20.79 5.99 27.21 7.4 10.44 4.35.01-.06"></path>
                        <path d="M413.52 194.96l-7.34-8.69-15.67-18.56-18-13.25-22.25-6.24-15.75-2.25-22.75 8.26-16.25 10.25-9.06 18.34-12.16 28.65-4.78 11.26M373.32 191.63l7.07-1.49M406.19 186.27l-8.48 1.93"></path>
                    </symbol>
                    <symbol id="18" fill="none">
                        <path d="M223 366.34l158.71 35.44 12.01.68 7.85-6.2 17.97-49.6"></path>
                    </symbol>
                    <symbol id="19" fill="none">
                        <path d="M207.2-41.9l-12.24 15.35L174.92-.62l-20.06 28.73-19 31.11-20.84 39.17-24.3 48.93-24.36 55.37L16.7 315.95l-25.53 57.89-5.15 11.69"></path>
                        <path d="M-22.61 421.36l31.94-74.35 12.51-29.1 49.13-112.52 24.31-55.68 24.35-49.41 20.34-37.5 18.98-30.45 20.32-29.58 19.16-25.86 12.68-14.82M-8.83 373.85l18.16-26.84"></path>
                    </symbol>
                    <symbol id="20" fill="none">
                        <path d="M368.09 132.36l-10.35 1.71-52.61 16.59-12.14 6.95-7.18 7.44-7.74 15.1-17.77 38.56-16.73 53.47-14.48 55.69-3.96 24.95-2.14 13.53-1.99 18.61-.78 38.99-.47 15.73-9.56 129.79"></path>
                    </symbol>
                    <symbol
                        id="symbol_shape_5"
                        fill="#000"
                        fillOpacity="1"
                        stroke="none"
                        strokeLinejoin="round"
                        strokeWidth="3"
                    >
                        <path d="M-.75-2.25v4.5h1.5v-4.5z"></path>
                    </symbol>
                    <image
                        id="symbol_icon_6"
                        width="12"
                        height="12"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGYktHRAAAAAAAAPlDu38AAAAJdnBBZwAAACgAAAAoAKNwlPgAAAAldEVYdGNyZWF0ZS1kYXRlADIwMTAtMDItMTRUMTg6MzU6MzcrMDA6MDDNjmMMAAAAJXRFWHRtb2RpZnktZGF0ZQAyMDEwLTAyLTE0VDE4OjM1OjM3KzAwOjAwkj8VOAAAByZJREFUWEe9mHtMl1UYx+UqUCCBoEVF98u636+21Wb3RAUJxIJhiBOluZA2/2DNmsXaam5trczKgfM2UZGrCIIssCVbjTT+cUoKKiKYCj9JwL4f9h728v5+iHLpbJ8Bv99znvN9n3PO8zwvk65mXL582YmX8Ba+wl8EiEALfp8s/ISPwA77IT7GbTgdCxZjYYRdJ0JFhJgmpotIESaCBYIROnEiHU5N5BCHAETdIR4Uj4snxKPifhEtEH69wJ6HGn+RDocswLYSOcQhZIaIEYligXhXvCVeEHx/kwgRHkWOedidCRM9tvVOMSM7O/vLhISEkpSUlKrU1NSa5OTkqvT09AJ9lyJeFQ8LRBJxj9t9zcM+2YbZXi4BW/eQiPHz8+vx8vLq188+8PX17cPF8ePHv9b3i8Vr4gHB2QwSY4uifaIDnOKcg89leFIsCA8P72Sak8bGxpLm5uY1vb29C2XHMbhdTBEmikP8jzicExwgDjh/RIEte1YsjIiI+IfpTrZs2XJo06ZNFceOHftEdrMEUZwq2AGPFwaGHR6MjSieFocm53GWbhFcgvThBG7duvXvnTt31re0tKyRHZeHiN8ouGD4cjuLBrfhwcgIsydiIoc4onCXeFksjYyMPIcLJ9u2bTtVVFT0+4kTJ36QXbp4SbDNNwiTH00k3YQODucXAmMmIsyeiHl6Ioc48h3blj1t2rTzuHFSUFBwpqSk5NDJkyc3yi5LvC3IkbcKHpKH5cGHjebAcHxoIme2klxHOuHGskXPCyKHuEUid/r06Rdw42T79u1ny8rKDre1tRXJ7gvxgXhDPC3uEzcLKg47M3y1cXyAAU/kKRFzjlgkQ2SLXJEfFRXl8iRwx44dFyoqKlra29t/kV2eWC0yRZJ4XTwl2A3Sj6k2biLt4sBEj22lhM3Iycn5nAVDQkLOiy7RPWXKFFdoaOhF5T83YYbg4OB+2fSFhYX1ih7sNa8rMDDQFR0dfVi+qTicS6JJMBDpFkm7OLO9nAvOCPV1VlpaWoG3t/dA8h1PNHJEsuDI3Cs451yeISnIiAM+5EuMeCKKf8KyZctKAwICLnlaZLT4+/v3VVdXF+7evfsbJfL3tA5nm+aCmj0kkY8kcH5mZma5BPZ6Wmi0SGC/zmhDfn5+UUdHx8da503BeefS0EsOK9BsMeGmyMcuWbKkCKeqs/2qs9Rcfh/Ex8fHTQBn02lnMPa7du36a/PmzXs7Ozs/0zpx1nqsy/qD59AuEPiCS0IyvVvMbGpqyk5MTDyQlJR0JCYm5szs2bPPzZ07tysuLs41b968Hqc4g77rV5fTFx8ffwk77GNjY7vnzJlzISMjo72wsLBRAisl8FOtg8BHxIgC+ZA0w42KEiTkWLGitbV1reprjfJbg5wfLC4uPqw816JmweMFUoQu7dmzp0vnrAM77IkawuTjgEphzfr16wu0xSvk32xxuDBbPKxAziFGRJHSRFMQ293d/aGqw/cqXxvLy8sLKysrq/bt29egRP2vJ4ES4pLNGXEEu6qqqr0SW1RaWlqAD53BdRs2bPiqp6cnQf6fE7cJt27HKRBMFLksPBEiiSTNZ7wgWX8kqA55IyVq1eI62eULEjsJnkRPCzZfUP64wfcItpeqwtoD0YOBYf6w4EuewIgkkmw3Th4TL4p3xIilTpE+rFpcjJ1lT4kk7xExHpoWjMghznOiNsN8YGEXyXYzmRRAo0pESUFXbBYksEPb2SSBm7Gz7BFFbacO44uCwLYOW48Hh/1DCwyBM2mEUqPZ9hHbLaubOagtpg4vFa9Y80wnw+5wY8ka+HcTB0OG80sLu1CeEue0TGz14isIbNfN/VMCf8bOsmce8xGFP0QZYVcWZ4bTyAYOeFKiyBZxuNMl0GNHbQlslMCfsLPsmWc6ao+iDCMOD5NwxlNzXrg0LLjoKgVyQbBnHvPxM3pxZjgmehQ43DvJaASOatgcOAWSKtLGQ+CYhnFiOTQCR3ztlMDTlsAfZfe/CiQ9kMNo2d+fOnXqWcyc6K2uTQL/kMB1sksTRHzCBZISTDtG9xGnXvEiZkFBQX1q5/snT57cz98S2KLmoEFNxneySxXPCCI/YQIBgaYdo/TNVIezOjc3t2zlypWHli9f3pqVlXV61apVpySuSdWk1vofDS9KVBEizw5MmECcksPc2jG18Bsktlpn71fxm9qp2ry8vMLm5mbePXgr5B3Hrd+DMQ3jxAKnPL1bO3b06NGs2traNfX19Wv379+/rq6u7tuamprPXS4X7xy8uvKWyNsiO4DAQb9jGnZHFiaKznZspqAzRhBva7RTNAiIoxnlPcdeRQZ9jnnYnQmcEwEj0t6O8V7BfyC44YhmW4kc4kwNHrK9MC7D7lDYRZp2DKGcMS4C/8fhJ3+zrUTONAhDxMG4DKdTwULAoghFABeAqBqurZ1yG5Mm/QeiPjIwbdTJDwAAAABJRU5ErkJggg=="
                    ></image>
                    <symbol id="symbol_text_7">
                        <text
                            y="-1.91"
                            transform="matrix(.73724 .51622 -.57358 .81915 230.43 957.87)"
                        >
                            Nemesweg
                        </text>
                        <text
                            y="-1.91"
                            transform="matrix(.73724 .51622 -.57358 .81915 230.43 957.87)"
                        >
                            Nemesweg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_8">
                        <text
                            y="-1.91"
                            transform="matrix(.88346 .17173 -.1908 .98163 681.98 113.9)"
                        >
                            Fischergassl
                        </text>
                        <text
                            y="-1.91"
                            transform="matrix(.88346 .17173 -.1908 .98163 681.98 113.9)"
                        >
                            Fischergassl
                        </text>
                    </symbol>
                    <symbol id="symbol_text_9">
                        <text y="-1.91" transform="rotate(-26 270.224 -2078.22) scale(.9 1)">
                            Brahmsweg
                        </text>
                        <text y="-1.91" transform="rotate(-26 270.224 -2078.22) scale(.9 1)">
                            Brahmsweg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_10">
                        <text
                            y="-1.91"
                            transform="rotate(-23 2052.511 -1068.242) scale(.9 1)"
                        >
                            Sc
                        </text>
                        <text y="-1.91" transform="rotate(-29 1674.14 -780.339) scale(.9 1)">
                            hlösserwe
                        </text>
                        <text y="-1.91" transform="rotate(-24 1946.297 -1115.62) scale(.9 1)">
                            g
                        </text>
                        <text
                            y="-1.91"
                            transform="rotate(-23 2052.511 -1068.242) scale(.9 1)"
                        >
                            Sc
                        </text>
                        <text y="-1.91" transform="rotate(-29 1674.14 -780.339) scale(.9 1)">
                            hlösserwe
                        </text>
                        <text y="-1.91" transform="rotate(-24 1946.297 -1115.62) scale(.9 1)">
                            g
                        </text>
                    </symbol>
                    <symbol id="symbol_text_11">
                        <text
                            y="-1.91"
                            transform="matrix(.86514 -.24807 .27564 .96126 116.9 398.46)"
                        >
                            Schlu
                        </text>
                        <text y="-1.91" transform="rotate(1 -22480.998 8026.627) scale(.9 1)">
                            cht
                        </text>
                        <text y="-1.91" transform="rotate(-32 758.46 -62.01) scale(.9 1)">
                            w
                        </text>
                        <text y="-1.91" transform="rotate(-49 502.808 26.39) scale(.9 1)">
                            e
                        </text>
                        <text y="-1.91" transform="rotate(-17 1367.275 -329.842) scale(.9 1)">
                            g
                        </text>
                        <text
                            y="-1.91"
                            transform="matrix(.86514 -.24807 .27564 .96126 116.9 398.46)"
                        >
                            Schlu
                        </text>
                        <text y="-1.91" transform="rotate(1 -22480.998 8026.627) scale(.9 1)">
                            cht
                        </text>
                        <text y="-1.91" transform="rotate(-32 758.46 -62.01) scale(.9 1)">
                            w
                        </text>
                        <text y="-1.91" transform="rotate(-49 502.808 26.39) scale(.9 1)">
                            e
                        </text>
                        <text y="-1.91" transform="rotate(-17 1367.275 -329.842) scale(.9 1)">
                            g
                        </text>
                    </symbol>
                    <symbol id="symbol_text_12">
                        <text y="-1.91" transform="rotate(46 -613.445 1092.989) scale(.9 1)">
                            B
                        </text>
                        <text y="-1.91" transform="rotate(36 -896.568 1316.925) scale(.9 1)">
                            le
                        </text>
                        <text y="-1.91" transform="rotate(28 -1264.346 1611.12) scale(.9 1)">
                            icherpa
                        </text>
                        <text y="-1.91" transform="rotate(30 -1167.768 1579.822) scale(.9 1)">
                            rk
                        </text>
                        <text y="-1.91" transform="rotate(46 -613.445 1092.989) scale(.9 1)">
                            B
                        </text>
                        <text y="-1.91" transform="rotate(36 -896.568 1316.925) scale(.9 1)">
                            le
                        </text>
                        <text y="-1.91" transform="rotate(28 -1264.346 1611.12) scale(.9 1)">
                            icherpa
                        </text>
                        <text y="-1.91" transform="rotate(30 -1167.768 1579.822) scale(.9 1)">
                            rk
                        </text>
                    </symbol>
                    <symbol id="symbol_text_13">
                        <text y="-1.91" transform="rotate(-68 582.324 -99.396) scale(.9 1)">
                            Schmiedgas
                        </text>
                        <text y="-1.91" transform="rotate(-62 598.77 -176.415) scale(.9 1)">
                            se
                        </text>
                        <text y="-1.91" transform="rotate(-68 582.324 -99.396) scale(.9 1)">
                            Schmiedgas
                        </text>
                        <text y="-1.91" transform="rotate(-62 598.77 -176.415) scale(.9 1)">
                            se
                        </text>
                    </symbol>
                    <symbol id="symbol_text_14">
                        <text
                            y="-1.91"
                            transform="matrix(.32253 -.84022 .93358 .35837 410.02 617.09)"
                        >
                            Schmiedgasse
                        </text>
                        <text
                            y="-1.91"
                            transform="matrix(.32253 -.84022 .93358 .35837 410.02 617.09)"
                        >
                            Schmiedgasse
                        </text>
                    </symbol>
                    <symbol id="symbol_text_15">
                        <text y="4.39" transform="rotate(-73 372.45 -76.403) scale(.9 1)">
                            Drummerweg
                        </text>
                        <text y="4.39" transform="rotate(-73 372.45 -76.403) scale(.9 1)">
                            Drummerweg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_16">
                        <text
                            y="4.39"
                            transform="matrix(.5785 .68944 -.76604 .64279 430.8 206.5)"
                        >
                            Traubinger S
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.56639 .69943 -.77715 .62932 464.76 246.7)"
                        >
                            traße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.5785 .68944 -.76604 .64279 430.8 206.5)"
                        >
                            Traubinger S
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.56639 .69943 -.77715 .62932 464.76 246.7)"
                        >
                            traße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_17">
                        <text y="4.39" transform="rotate(-85 470.131 406.704) scale(.9 1)">
                            Br
                        </text>
                        <text y="4.39" transform="rotate(-86 457.612 401.93) scale(.9 1)">
                            äuhausstraße
                        </text>
                        <text y="4.39" transform="rotate(-85 470.131 406.704) scale(.9 1)">
                            Br
                        </text>
                        <text y="4.39" transform="rotate(-86 457.612 401.93) scale(.9 1)">
                            äuhausstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_18">
                        <text y="4.39" transform="rotate(22 -684.756 1266.559) scale(.9 1)">
                            Greinwaldstraße
                        </text>
                        <text y="4.39" transform="rotate(22 -684.756 1266.559) scale(.9 1)">
                            Greinwaldstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_19">
                        <text
                            y="4.39"
                            transform="matrix(.8019 -.4086 .45399 .891 318.61 534.4)"
                        >
                            Hal
                        </text>
                        <text y="4.39" transform="rotate(-20 1663.653 -673.76) scale(.9 1)">
                            lbergerallee
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.8019 -.4086 .45399 .891 318.61 534.4)"
                        >
                            Hal
                        </text>
                        <text y="4.39" transform="rotate(-20 1663.653 -673.76) scale(.9 1)">
                            lbergerallee
                        </text>
                    </symbol>
                    <symbol id="symbol_text_20">
                        <text y="4.39" transform="rotate(10 -1196.23 3936.658) scale(.9 1)">
                            Marienstraße
                        </text>
                        <text y="4.39" transform="rotate(10 -1196.23 3936.658) scale(.9 1)">
                            Marienstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_21">
                        <text y="4.39" transform="rotate(11 -1479.399 3579.604) scale(.9 1)">
                            Schloßstraße
                        </text>
                        <text y="4.39" transform="rotate(11 -1479.399 3579.604) scale(.9 1)">
                            Schloßstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_22">
                        <text
                            y="4.39"
                            transform="matrix(-.06278 -.8978 .99756 -.06976 592.24 497.83)"
                        >
                            M
                        </text>
                        <text y="4.39" transform="rotate(-84 568.528 -84.25) scale(.9 1)">
                            o
                        </text>
                        <text y="4.39" transform="rotate(-79 590.835 -117.673) scale(.9 1)">
                            ns
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.18712 -.88033 .97815 .20791 595.47 475.4)"
                        >
                            ign
                        </text>
                        <text y="4.39" transform="rotate(-73 612.05 -173.08) scale(.9 1)">
                            ore-Sc
                        </text>
                        <text y="4.39" transform="rotate(-68 628.097 -230.097) scale(.9 1)">
                            hmid-Stra
                        </text>
                        <text y="4.39" transform="rotate(-60 658.417 -337.752) scale(.9 1)">
                            ße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(-.06278 -.8978 .99756 -.06976 592.24 497.83)"
                        >
                            M
                        </text>
                        <text y="4.39" transform="rotate(-84 568.528 -84.25) scale(.9 1)">
                            o
                        </text>
                        <text y="4.39" transform="rotate(-79 590.835 -117.673) scale(.9 1)">
                            ns
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.18712 -.88033 .97815 .20791 595.47 475.4)"
                        >
                            ign
                        </text>
                        <text y="4.39" transform="rotate(-73 612.05 -173.08) scale(.9 1)">
                            ore-Sc
                        </text>
                        <text y="4.39" transform="rotate(-68 628.097 -230.097) scale(.9 1)">
                            hmid-Stra
                        </text>
                        <text y="4.39" transform="rotate(-60 658.417 -337.752) scale(.9 1)">
                            ße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_23">
                        <text y="4.39" transform="rotate(-75 328.117 14.55) scale(.9 1)">
                            Kirchenstraße
                        </text>
                        <text y="4.39" transform="rotate(-75 328.117 14.55) scale(.9 1)">
                            Kirchenstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_24">
                        <text
                            y="4.39"
                            transform="matrix(.5785 .68944 -.76604 .64279 271.27 16.81)"
                        >
                            Traubinger Straße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.5785 .68944 -.76604 .64279 271.27 16.81)"
                        >
                            Traubinger Straße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_25">
                        <text
                            y="4.39"
                            transform="matrix(.8933 -.10968 .12187 .99255 502.02 101.03)"
                        >
                            Oskar-Schüler-S
                        </text>
                        <text y="4.39" transform="rotate(-9 874.948 -3552.081) scale(.9 1)">
                            traße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.8933 -.10968 .12187 .99255 502.02 101.03)"
                        >
                            Oskar-Schüler-S
                        </text>
                        <text y="4.39" transform="rotate(-9 874.948 -3552.081) scale(.9 1)">
                            traße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_26">
                        <text
                            y="4.39"
                            transform="matrix(.70921 .5541 -.61566 .78801 539.01 3.99)"
                        >
                            Barbaraweg
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.70921 .5541 -.61566 .78801 539.01 3.99)"
                        >
                            Barbaraweg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_27">
                        <text
                            y="4.39"
                            transform="matrix(.21773 .87327 -.9703 .24192 597.57 268.75)"
                        >
                            Leidlstraße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.21773 .87327 -.9703 .24192 597.57 268.75)"
                        >
                            Leidlstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_28">
                        <text y="4.39" transform="rotate(33 -208.824 397.051) scale(.9 1)">
                            Ku
                        </text>
                        <text y="4.39" transform="rotate(27 -286.399 490.926) scale(.9 1)">
                            stermannstraße
                        </text>
                        <text y="4.39" transform="rotate(33 -208.824 397.051) scale(.9 1)">
                            Ku
                        </text>
                        <text y="4.39" transform="rotate(27 -286.399 490.926) scale(.9 1)">
                            stermannstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_29">
                        <text y="4.39" transform="rotate(-80 237.376 74.69) scale(.9 1)">
                            Hörma
                        </text>
                        <text y="4.39" transform="rotate(-70 255.013 42.624) scale(.9 1)">
                            nnstraße
                        </text>
                        <text y="4.39" transform="rotate(-80 237.376 74.69) scale(.9 1)">
                            Hörma
                        </text>
                        <text y="4.39" transform="rotate(-70 255.013 42.624) scale(.9 1)">
                            nnstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_30">
                        <text
                            y="4.39"
                            transform="matrix(.87693 .20246 -.22495 .97437 111.71 364.24)"
                        >
                            Hörmannstraße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.87693 .20246 -.22495 .97437 111.71 364.24)"
                        >
                            Hörmannstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_31">
                        <text y="4.39" transform="rotate(-63 412.105 235.164) scale(.9 1)">
                            Heinri
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.35166 -.82845 .9205 .39073 26.83 473.53)"
                        >
                            ch-Vo
                        </text>
                        <text y="4.39" transform="rotate(-77 302.004 203.996) scale(.9 1)">
                            gl-Str
                        </text>
                        <text y="4.39" transform="rotate(-84 259.382 193.238) scale(.9 1)">
                            aße
                        </text>
                        <text y="4.39" transform="rotate(-63 412.105 235.164) scale(.9 1)">
                            Heinri
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.35166 -.82845 .9205 .39073 26.83 473.53)"
                        >
                            ch-Vo
                        </text>
                        <text y="4.39" transform="rotate(-77 302.004 203.996) scale(.9 1)">
                            gl-Str
                        </text>
                        <text y="4.39" transform="rotate(-84 259.382 193.238) scale(.9 1)">
                            aße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_32">
                        <text
                            y="4.39"
                            transform="matrix(.35166 -.82845 .9205 .39073 56.07 193.41)"
                        >
                            Heinrich-
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.38036 -.81568 .9063 .42262 70.6 159.21)"
                        >
                            Vog
                        </text>
                        <text y="4.39" transform="rotate(-66 150.071 12.984) scale(.9 1)">
                            l-Straße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.35166 -.82845 .9205 .39073 56.07 193.41)"
                        >
                            Heinrich-
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.38036 -.81568 .9063 .42262 70.6 159.21)"
                        >
                            Vog
                        </text>
                        <text y="4.39" transform="rotate(-66 150.071 12.984) scale(.9 1)">
                            l-Straße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_33">
                        <text y="4.39" transform="rotate(19 129.48 -286.067) scale(.9 1)">
                            Boeckelerstraße
                        </text>
                        <text y="4.39" transform="rotate(19 129.48 -286.067) scale(.9 1)">
                            Boeckelerstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_34">
                        <text y="4.39" transform="rotate(1 -7343.285 -4911.161) scale(.9 1)">
                            Kustermannstraße
                        </text>
                        <text y="4.39" transform="rotate(1 -7343.285 -4911.161) scale(.9 1)">
                            Kustermannstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_35">
                        <text y="4.39" transform="rotate(22 -586.025 801.486) scale(.9 1)">
                            Greinwaldstraße
                        </text>
                        <text y="4.39" transform="rotate(22 -586.025 801.486) scale(.9 1)">
                            Greinwaldstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_36">
                        <text y="4.39" transform="rotate(-14 -425.849 -1774.083) scale(.9 1)">
                            Neustä
                        </text>
                        <text y="4.39" transform="rotate(2 4851.474 12663.066) scale(.9 1)">
                            tters
                        </text>
                        <text y="4.39" transform="matrix(.9 0 0 1 463.83 -161.09)">
                            traße
                        </text>
                        <text y="4.39" transform="rotate(-14 -425.849 -1774.083) scale(.9 1)">
                            Neustä
                        </text>
                        <text y="4.39" transform="rotate(2 4851.474 12663.066) scale(.9 1)">
                            tters
                        </text>
                        <text y="4.39" transform="matrix(.9 0 0 1 463.83 -161.09)">
                            traße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_37">
                        <text y="4.39" transform="rotate(56 -327.923 808.674) scale(.9 1)">
                            Sch
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.39453 .80891 -.8988 .43837 533.46 640.46)"
                        >
                            lösserw
                        </text>
                        <text y="4.39" transform="rotate(68 -222.317 739.6) scale(.9 1)">
                            eg
                        </text>
                        <text y="4.39" transform="rotate(56 -327.923 808.674) scale(.9 1)">
                            Sch
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.39453 .80891 -.8988 .43837 533.46 640.46)"
                        >
                            lösserw
                        </text>
                        <text y="4.39" transform="rotate(68 -222.317 739.6) scale(.9 1)">
                            eg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_38">
                        <text
                            y="4.39"
                            transform="matrix(.87693 .20246 -.22495 .97437 309.48 385.65)"
                        >
                            Fiedererstraße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.87693 .20246 -.22495 .97437 309.48 385.65)"
                        >
                            Fiedererstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_39">
                        <text
                            y="4.39"
                            transform="matrix(.88892 .1408 -.15643 .98769 87.41 936.36)"
                        >
                            G
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.89124 .12526 -.13917 .99027 93.68 937.28)"
                        >
                            röber
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.89507 .09408 -.10453 .99452 116.17 940.41)"
                        >
                            weg
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.88892 .1408 -.15643 .98769 87.41 936.36)"
                        >
                            G
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.89124 .12526 -.13917 .99027 93.68 937.28)"
                        >
                            röber
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.89507 .09408 -.10453 .99452 116.17 940.41)"
                        >
                            weg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_40">
                        <text y="4.39" transform="rotate(-72 718.512 455.314) scale(.9 1)">
                            Gröberw
                        </text>
                        <text y="4.39" transform="rotate(-79 621.829 436.752) scale(.9 1)">
                            eg
                        </text>
                        <text y="4.39" transform="rotate(-72 718.512 455.314) scale(.9 1)">
                            Gröberw
                        </text>
                        <text y="4.39" transform="rotate(-79 621.829 436.752) scale(.9 1)">
                            eg
                        </text>
                    </symbol>
                    <symbol id="symbol_text_41">
                        <text y="4.39" transform="rotate(18 -2573.337 198.494) scale(.9 1)">
                            Bräuhausstraße
                        </text>
                        <text y="4.39" transform="rotate(18 -2573.337 198.494) scale(.9 1)">
                            Bräuhausstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_42">
                        <text
                            y="4.39"
                            transform="matrix(.81568 .38036 -.42262 .9063 288.24 584.6)"
                        >
                            Bahnhofstraße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.81568 .38036 -.42262 .9063 288.24 584.6)"
                        >
                            Bahnhofstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_43">
                        <text
                            y="4.39"
                            transform="matrix(.12526 -.89124 .99027 .13917 580.46 216.31)"
                        >
                            Hauptstraße
                        </text>
                        <text
                            y="4.39"
                            transform="matrix(.12526 -.89124 .99027 .13917 580.46 216.31)"
                        >
                            Hauptstraße
                        </text>
                    </symbol>
                    <symbol id="symbol_text_44">
                        <text transform="matrix(.9 0 0 1 476.29 512.76)">TUTZING</text>
                        <text transform="matrix(.9 0 0 1 476.29 512.76)">TUTZING</text>
                    </symbol>
                    <symbol id="symbol_text_45">
                        <text transform="matrix(.9 0 0 1 59.97 350.79)">Christuskirche</text>
                        <text transform="matrix(.9 0 0 1 59.97 350.79)">Christuskirche</text>
                    </symbol>
                    <symbol id="symbol_text_46">
                        <text transform="matrix(.9 0 0 1 642.68 622.66)">Peter und Paul</text>
                        <text transform="matrix(.9 0 0 1 642.68 622.66)">Peter und Paul</text>
                    </symbol>
                    <symbol id="symbol_text_47">
                        <text transform="matrix(.9 0 0 1 289.04 705.18)">Kloster der</text>
                        <text transform="matrix(.9 0 0 1 292.62 717.44)">Missions-</text>
                        <text transform="matrix(.9 0 0 1 273.45 729.7)">
                            Benediktinerinnen
                        </text>
                        <text transform="matrix(.9 0 0 1 289.04 705.18)">Kloster der</text>
                        <text transform="matrix(.9 0 0 1 292.62 717.44)">Missions-</text>
                        <text transform="matrix(.9 0 0 1 273.45 729.7)">
                            Benediktinerinnen
                        </text>
                    </symbol>
                    <symbol id="symbol_text_48">
                        <text transform="matrix(.9 0 0 1 317.88 208.07)">St. Joseph</text>
                        <text transform="matrix(.9 0 0 1 317.88 208.07)">St. Joseph</text>
                    </symbol>
                    <symbol id="symbol_text_49">
                        <text transform="matrix(.85 0 0 1 9.5 1127.33)">
                            47°54&apos;15&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 9.5 1127.33)">
                            47°54&apos;15&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_50">
                        <text transform="matrix(.85 0 0 1 9.5 934.22)">
                            47°54&apos;20&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 9.5 934.22)">
                            47°54&apos;20&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_51">
                        <text transform="matrix(.85 0 0 1 9.5 741.1)">
                            47°54&apos;25&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 9.5 741.1)">
                            47°54&apos;25&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_52">
                        <text transform="matrix(.85 0 0 1 9.5 547.98)">
                            47°54&apos;30&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 9.5 547.98)">
                            47°54&apos;30&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_53">
                        <text transform="matrix(.85 0 0 1 9.5 354.85)">
                            47°54&apos;35&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 9.5 354.85)">
                            47°54&apos;35&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_54">
                        <text transform="matrix(.85 0 0 1 9.5 161.72)">
                            47°54&apos;40&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 9.5 161.72)">
                            47°54&apos;40&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_55">
                        <text transform="matrix(.85 0 0 1 -105.15 21.5)">
                            11°16&apos;25&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 -105.15 21.5)">
                            11°16&apos;25&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_56">
                        <text transform="matrix(.85 0 0 1 24.31 21.5)">
                            11°16&apos;30&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 24.31 21.5)">
                            11°16&apos;30&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_57">
                        <text transform="matrix(.85 0 0 1 153.76 21.5)">
                            11°16&apos;35&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 153.76 21.5)">
                            11°16&apos;35&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_58">
                        <text transform="matrix(.85 0 0 1 283.22 21.5)">
                            11°16&apos;40&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 283.22 21.5)">
                            11°16&apos;40&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_59">
                        <text transform="matrix(.85 0 0 1 412.67 21.5)">
                            11°16&apos;45&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 412.67 21.5)">
                            11°16&apos;45&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_60">
                        <text transform="matrix(.85 0 0 1 542.12 21.5)">
                            11°16&apos;50&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 542.12 21.5)">
                            11°16&apos;50&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_61">
                        <text transform="matrix(.85 0 0 1 671.58 21.5)">
                            11°16&apos;55&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 671.58 21.5)">
                            11°16&apos;55&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_62">
                        <text transform="matrix(.85 0 0 1 810.02 21.5)">11°17&apos;</text>
                        <text transform="matrix(.85 0 0 1 810.02 21.5)">11°17&apos;</text>
                    </symbol>
                    <symbol id="symbol_text_63">
                        <text transform="matrix(.85 0 0 1 933.73 21.5)">
                            11°17&apos;5&quot;
                        </text>
                        <text transform="matrix(.85 0 0 1 933.73 21.5)">
                            11°17&apos;5&quot;
                        </text>
                    </symbol>
                    <symbol id="symbol_text_64">
                        <text transform="matrix(.85 0 0 1 44.88 991.27)">1 : 3 148</text>
                        <text transform="matrix(.85 0 0 1 44.88 991.27)">1 : 3 148</text>
                    </symbol>
                    <symbol id="symbol_text_65">
                        <text transform="matrix(.85 0 0 1 52.07 966.27)">100 m</text>
                        <text transform="matrix(.85 0 0 1 52.07 966.27)">100 m</text>
                    </symbol>
                    <symbol id="symbol_text_66">
                        <text transform="matrix(.8 0 0 1 762.46 991.85)">
                            © 4UMaps.eu Data by OpenStreetMap.org
                        </text>
                        <text transform="matrix(.8 0 0 1 762.46 991.85)">
                            © 4UMaps.eu Data by OpenStreetMap.org
                        </text>
                    </symbol>
                </defs>
                <g fill="#B5D0D0" stroke="#000">
                    <g>
                        <path stroke="none" d="M0 0H1000.12V999.75H0z"></path>
                    </g>
                </g>
                <g>
                    <g fill="#F1EEE8" stroke="#F1EEE8">
                        <path d="M-373901.41-563883.81H757.68v752322.5h-374659.09v-752322.5z"></path>
                        <path d="M739.04 282890.69v-550225.13h484295.72v550225.13H739.04z"></path>
                    </g>
                    <path
                        fill="#F0F0D8"
                        stroke="none"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M378.24 771.62l22.22 13.07 23.26 36.75 36.91 22.41-65.38 119.28-105.62-79.66 88.61-111.86z"
                    ></path>
                    <path
                        fill="#E0D7BD"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M-1255.77 2186.91l173.22 41.62 30.18-27.93 43.15 27.34 91.1 36.45 35.86-23.05 77.94-61.97 14-3.41 7.9 4.23 35.88 19.18-6.31 118.14-8.29 41.87 16.49 3.27 39.8 7.87 68.9-118.55 96.48-72.36 23.53 31.36 36.29 6.46 21.34-119.92-58.71-10.45 19.07-107.1 29.99-63-11.8-49.09-6.1-25.36-10.56 7.38-62.44 43.63-64.1-12.55-2.62-1.53-49.19-28.65 115.91-198.99 39 22.72 17.35 71.15 68.55-16.71 111.1 42.56 7 65.01 55 108.99 62 56 15 42 2 188.01-45 41h-101l-47 20-163.1-4.56-46.9 132.56 359 22.99 106.63-99.27 174.22-76.58 62.53-61.88 4.61-67.27-30.1-130.55-133.9-25.45-29.63-111.56-114.36 30.36-18.95-71.33 41.92-73.13 43.01 24.66 7.06-39.39-32-18 1-40-18.16-50.16 43.99-44L6.17 1209.13l76.25-66.08 66.69-57.52 73.38-132.03 11.9-11.39 132.54 72.65 28.29-51.61 65.38-119.28 9.54-17.39 7.37-4.42 19.71-11.8 19.35-32.23 8.68-14.21 33.82-18.56 19.54-11.15 4.24-2.16 14.37 28.3 3.28 6.59 7.18 5.06 21.13 14.74 19.69 13.65 3.05 2.1 2.77.68 1.62-6.54 2.26-9.2-9.33-30.62-8.21-27.16.4-22.07 30.79-19.61 13.39-8.58 4.77-3.05 9.72-1.7 4.21-2.03 7.44-11.69.52-11.36 7.05-6.15 5.29-4.6-20.59-23.75-1.05-2.53-3.97-8.5-28.98-14.42-72-33.72-4.11-1.02-1.53-3.8.48-24.1.54-16.89-.88-13 1.01-10 1.62-8.5 2.26-10.62 8.96-29.09 13.74-34.12 22.73-38.82 10.2-18.38 133.06 29.05 30.49-40.51 83.58-29.19 39.35-13.85 1.79-31.7-27-9.21-5.81-1.99-56.31-43.25-17.06-55.4 7.02-66.18 5.14-47.49 40.1-70.78 79.05-61.05 181.28-36.78 41.92-8.61 33.88-6.98 21.75-4.38 22.03-4.35 11.25-2.18 8.24-4.12 3.22-4.67-124.65-135.55 4.68-13.75 91.64-59.9 32.32-189.45-210.52-33.68-33.52 61.87-13.87 25.6 53.45 28.95-45.73 84.41-68.2-44.2-44.13-16.65-11.51-23.15-.49-22.85 21-11-4.38-118.47 41.38-1.53 8.13-46.2 97.87 17.2 71-11L1258.2-841l81.81-130.06 4-89-35.9-41.46 24.52-111.11-31.12-6.86-66.93-13.38-31.56-5.61-46.56-7.19-38.66-5.22-246.32-28.51-12.37 106.87 80.62 51.25 38.77 14.07-71.4 196.68-32.31 48.83-75.67-50.05-27.1 40.97 31.11 39.47-17.72 33.61-40.08-42.84-71-15.49-33.5 4.99-33-29-5.5-50-20.65-29.01-59.65-36.27-98.04-10.67-261.44 49.76-26.77-17.19-48.53 24.81L7.99-926l53.21-248.23-180.3-38.65-26.5 123.62-71.29-15.28-62 113 2.31 17.22-14.75 18.46 82.33 65.77-91.36 168.56-59.12 34.68-13.99-1.27-87.31-52.18.11-33.92-11.07 2.57-24.29-27.52L-637.92-847l-26.2 77.71 85.22 28.73 58.9-35.55 42.1 20.56-63 63-60.44 108.82-97.1 174.85-6.5 71.61 59.66 57.6 236.22 76.89 124.71 96.94 21.2 39.09 48.81 28.05 26.36 21.32 26.93-1.13 3.36 16.27-16.82 5.62-42.07-13.47-41.51-16.83-32.54-14.02-9.54-15.14-27.49-23.57L-340-97.6l-17.95-23-10.09-5.6-17.39 1.13-1.69 14.59 5.05 6.73 13.47 16.26 1.68 15.71-11.78 7.86-20.2-7.3-7.85-8.41-12.34-23.56-23-16.83-58.68-4.41-40.43 221.98 198.89 158.65 53.42 82.26-14 58-48 45-70.54-8.11 6.7-58.29-73.45-8.44 8.44-73.46-30.33-86.06-87.76 3.82-58.66 55.41 20.71 248.32-59.57 3.3-2.93 34.78-96.6 26.88 18.45 56.31 103.18-15.85 38.52-51.42 16.16-47.55 40.19-10.68 14.8 19.76-10.84 44.5-8.09 104.67 36.98 5.63 21.31 10.53 10.71 14 30.86 19.01 33.23 11.39 22.13 7.87 37.24 15.29 45.99 17.51 50.28-4.17 38.83 10.44 10.25 9.79-11.42 13.04-12.56 62.89-25.92 84.82-22.77 65.86-9 32.26-12.91 31.98-21.59 16.02-45.43-55.88-20.82-17.37-23.67 17.12-25.83 15.13-34.5 18.51-19.71 9.87-25.72-29.27-8.74-31.99 14.67-35.86-79-28.5-39.99 94.51-38.76 78.49-6.64 27.75-23.15 51.55-16.94 18.09-43.09 57.64-34.61 55.38-36.46 79.05-19.27 39.44-28.92 39.61-61.33 65.97-54.55 55.72-35.67 47.7-11.01 25.23-5.14 32.32-.62 20.21-2.67 20.87-3.29 25.69-11.57 33.74 6.85 5.52-14.52 40.96 10.29 15.72-1.24 29.04 18.6 37.24-28.2 44.86-22.02 24.68-27.51 60.74-30.87-.79-63.91 94.67z"
                    ></path>
                    <path
                        fill="#E0D7BD"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M-1255.77 2186.91l173.22 41.62 30.18-27.93 43.15 27.34 91.1 36.45 35.86-23.05 77.94-61.97 14-3.41 7.9 4.23 35.88 19.18-6.31 118.14-8.29 41.87 16.49 3.27 39.8 7.87 68.9-118.55 96.48-72.36 23.53 31.36 36.29 6.46 21.34-119.92-58.71-10.45 19.07-107.1 29.99-63-11.8-49.09-6.1-25.36-10.56 7.38-62.44 43.63-64.1-12.55-2.62-1.53-49.19-28.65 115.91-198.99 39 22.72 17.35 71.15 68.55-16.71 111.1 42.56 7 65.01 55 108.99 62 56 15 42 2 188.01-45 41h-101l-47 20-163.1-4.56-46.9 132.56 359 22.99 106.63-99.27 174.22-76.58 62.53-61.88 4.61-67.27-30.1-130.55-133.9-25.45-29.63-111.56-114.36 30.36-18.95-71.33 41.92-73.13 43.01 24.66 7.06-39.39-32-18 1-40-18.16-50.16 43.99-44L6.17 1209.13l76.25-66.08 66.69-57.52 73.38-132.03 11.9-11.39 132.54 72.65 28.29-51.61 65.38-119.28 9.54-17.39 7.37-4.42 19.71-11.8 19.35-32.23 8.68-14.21 33.82-18.56 19.54-11.15 4.24-2.16 14.37 28.3 3.28 6.59 7.18 5.06 21.13 14.74 19.69 13.65 3.05 2.1 2.77.68 1.62-6.54 2.26-9.2-9.33-30.62-8.21-27.16.4-22.07 30.79-19.61 13.39-8.58 4.77-3.05 9.72-1.7 4.21-2.03 7.44-11.69.52-11.36 7.05-6.15 5.29-4.6-20.59-23.75-1.05-2.53-3.97-8.5-28.98-14.42-72-33.72-4.11-1.02-1.53-3.8.48-24.1.54-16.89-.88-13 1.01-10 1.62-8.5 2.26-10.62 8.96-29.09 13.74-34.12 22.73-38.82 10.2-18.38 133.06 29.05 30.49-40.51 83.58-29.19 39.35-13.85 1.79-31.7-27-9.21-5.81-1.99-56.31-43.25-17.06-55.4 7.02-66.18 5.14-47.49 40.1-70.78 79.05-61.05 181.28-36.78 41.92-8.61 33.88-6.98 21.75-4.38 22.03-4.35 11.25-2.18 8.24-4.12 3.22-4.67-124.65-135.55 4.68-13.75 91.64-59.9 32.32-189.45-210.52-33.68-33.52 61.87-13.87 25.6 53.45 28.95-45.73 84.41-68.2-44.2-44.13-16.65-11.51-23.15-.49-22.85 21-11-4.38-118.47 41.38-1.53 8.13-46.2 97.87 17.2 71-11L1258.2-841l81.81-130.06 4-89-35.9-41.46 24.52-111.11-31.12-6.86-66.93-13.38-31.56-5.61-46.56-7.19-38.66-5.22-246.32-28.51-12.37 106.87 80.62 51.25 38.77 14.07-71.4 196.68-32.31 48.83-75.67-50.05-27.1 40.97 31.11 39.47-17.72 33.61-40.08-42.84-71-15.49-33.5 4.99-33-29-5.5-50-20.65-29.01-59.65-36.27-98.04-10.67-261.44 49.76-26.77-17.19-48.53 24.81L7.99-926l53.21-248.23-180.3-38.65-26.5 123.62-71.29-15.28-62 113 2.31 17.22-14.75 18.46 82.33 65.77-91.36 168.56-59.12 34.68-13.99-1.27-87.31-52.18.11-33.92-11.07 2.57-24.29-27.52L-637.92-847l-26.2 77.71 85.22 28.73 58.9-35.55 42.1 20.56-63 63-60.44 108.82-97.1 174.85-6.5 71.61 59.66 57.6 236.22 76.89 124.71 96.94 21.2 39.09 48.81 28.05 26.36 21.32 26.93-1.13 3.36 16.27-16.82 5.62-42.07-13.47-41.51-16.83-32.54-14.02-9.54-15.14-27.49-23.57L-340-97.6l-17.95-23-10.09-5.6-17.39 1.13-1.69 14.59 5.05 6.73 13.47 16.26 1.68 15.71-11.78 7.86-20.2-7.3-7.85-8.41-12.34-23.56-23-16.83-58.68-4.41-40.43 221.98 198.89 158.65 53.42 82.26-14 58-48 45-70.54-8.11 6.7-58.29-73.45-8.44 8.44-73.46-30.33-86.06-87.76 3.82-58.66 55.41 20.71 248.32-59.57 3.3-2.93 34.78-96.6 26.88 18.45 56.31 103.18-15.85 38.52-51.42 16.16-47.55 40.19-10.68 14.8 19.76-10.84 44.5-8.09 104.67 36.98 5.63 21.31 10.53 10.71 14 30.86 19.01 33.23 11.39 22.13 7.87 37.24 15.29 45.99 17.51 50.28-4.17 38.83 10.44 10.25 9.79-11.42 13.04-12.56 62.89-25.92 84.82-22.77 65.86-9 32.26-12.91 31.98-21.59 16.02-45.43-55.88-20.82-17.37-23.67 17.12-25.83 15.13-34.5 18.51-19.71 9.87-25.72-29.27-8.74-31.99 14.67-35.86-79-28.5-39.99 94.51-38.76 78.49-6.64 27.75-23.15 51.55-16.94 18.09-43.09 57.64-34.61 55.38-36.46 79.05-19.27 39.44-28.92 39.61-61.33 65.97-54.55 55.72-35.67 47.7-11.01 25.23-5.14 32.32-.62 20.21-2.67 20.87-3.29 25.69-11.57 33.74 6.85 5.52-14.52 40.96 10.29 15.72-1.24 29.04 18.6 37.24-28.2 44.86-22.02 24.68-27.51 60.74-30.87-.79-63.91 94.67z"
                    ></path>
                    <path
                        fill="#89D2AE"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M455.5 720.3l-8.04 19.55 14.52 5.98 8.05-19.54-14.53-5.99z"
                    ></path>
                    <g fill="#A9CAAE" stroke="none" strokeLinejoin="round">
                        <path d="M593.89 571.09l3.78-15.3 72 33.72 28.98 14.42-.76 8.75-8.65 10.37-1.25 1.29-2.26 2.1-15.8 14.66-3.73-2.63-2.74-1.7-31.59-15.87-5.89-2.67-20.31-8.47-17.09-9.4-1.58-3.38.21-3.88 4.81-16.8 1.85-5.23zM-131.42-70.98l27.76 9.01 87.06 29.9L38.08-9.96l67.3 29.94-4.76 12.18-5.16 8.36-19.66-7.8-24.69-5.13-23.47 51.02-127.13-27.59-14.03-49.52-42.88-36.14 24.98-36.34z"></path>
                    </g>
                    <g fill="#F6EEB7" stroke="none" strokeLinejoin="round">
                        <path d="M190.12 380.66l10.02 1.22 12.42 1.38 3.42-31.19.37-3.03-22.06-2.68-4.18 34.3zM117.04 48.18l9.82-10.53-17.55-12.82-6.04 8.51-4.5 6.35 18.27 8.48zM177.64 188.37l14.87 6.63-18.61 41.67-14.87-6.65 18.61-41.66zM228.8 617.05l.5 39.75 6.5 15.49 1.19 34.57 5.45.86 18.38 1.72 1.17-31.63-10.39-.5.17-42.05 10.89-.33v-18.8l-14.51-.67v-3.8l15.84.83.33-5.94 5.12.57.29-4.16.59-11.17-23.75-1.65-18.32-.65.56 27.55zM154.17 576.24l58-1 2 27-60.01-1v-25zM453.79 751.1l-19-8.5 17.76-32.58.49-.92 3.64-4.76-1.72-17.45-.44-4.19-12.72-6.37-36.98 62.46 12.63 11.15 21.53 10.91 9.92 3.17 4.9-12.95zM473.2 361.45l-10.84-4.23-8.78-3.42 14.74-42.72 21.74 6.8-16.85 43.57zM480.46 498.86l.77-10.39-27.43-4.35-5.15 11.04 12.18 1.31 19.62 2.39zM152.32 502.78l-.74 17.27 7.74.33.74-17.28-7.74-.32zM327.73 851.07l-27.78 29.23 16.04 15.25 15.74-16.56-7.74-7.36 12.13-12.58-8.39-7.98zM201.77 175.73l32.25 17.24-4.74 7.26-31.25-16.01 3.75-8.5zM274.47 158.33l-17 37 6.25 3 17.75-37.5-7-2.5zM556.39 174.41l-11.86-.99-.76 8.82-5.87-.76-2.07 15.24 14.39 1.85 4.21.54 1.96-24.7zM496.33 152.95l-4.83 16.83-16.73-4.81 4.83-16.81 16.73 4.8z"></path>
                    </g>
                    <g fill="#D8DFC8" stroke="none" strokeLinejoin="round">
                        <path d="M13.7 355.84l34.02 3.73 34.17 4.57 74.03 13.07 18.18 25.7 8.7 9.09 12.22 5.9-3.25 18.9-31.61.29-22 2.13-20.51-10.01-8.16-12.78-15.94-6.88-13.41-9.46-30.67-3.27-18.4 2.61-27.59-17.65 10.22-25.95zM595.23 520.99l13.12-6.2 18.31.58 19.19-.29 27.46 16.82 30.41 13.88 28.05 2.36 17.72 20.37-.3 20.37 3.54 22.44 5.52 4.23-33.98 23.15-20.59-23.75-5.02-11.03-28.98-14.42-72-33.72-1.93-2.14-.85-3.32.34-29.34zM894.13 238.97l-27.51 1.92-14.93 10.92-8.61 11.78-4.31 8.61 2.87 7.76 9.19 9.19-1.72 6.03 8.61 3.43 28.15 11.21 13.94-3 39.35-13.85 2.76-11.25.86-13.49-28.83-16.17-5.81-1.99-14.02-11.1zM149.14 1085.52l-4.84 4.66-33 31.84-26.77 21.81-5.64 20.86 20.82-4.7 17.49-5.49 32.22-.22 44.28-.78 17 3.99 14.49-3.49 6.51-4.5 4-16.5-9-22 7-22-2.5-14.5-17-6.51-5.5-16.49 7-6.51 2 9.5 7 2.5 11.49-.5 11.01-9.5v-.5l-12.01-35.5-13.5-9.51L200 992.8l-46.97 71.92-3.91 20.79z"></path>
                    </g>
                    <path
                        fill="#CFECA8"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M736.95 363.62l5.74-23.01 18.25-5.49 41.25-9 14.05 9.89-30.49 40.51-48.8-12.89z"
                    ></path>
                    <path
                        fill="#B5D0D0"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M1705.75 9459.02l-53.3 53.87-14.46 20.19-4.74 88.75 7.31 34.71 14.15 18.09-2.93 27.77-13.36 17.66 6.03 46.54-19.82 102.12-24.45 53.3-10.77 23.47-6.98 114.02-.01 54.31-.02 56.5 10.13 78.08 3.09 106.49 1.84 63.28 3.44 6.04 20.63 36.26-10.12 39.7-14.36 35.52-7.19 17.75-52.72 72.98-14.54 14.72-19.81 20.05-23.79 22.19-4.44 4.14-8.31 21.7-11.94 29.9-4.6 33.39-1.16 47.18.56 140.01 8.35 76.41 32.92 78.7 86.41 161.85 54.44 68.85 13.24 28.46 4.6 9.05-.83 8.98 34.32 33.02 35.47 33.17 50.21 31.63 16.33 7.09 8.19-6.94 29.85 15.63 42.44 22.24 37.31 19.55 37.61 12.25 4.9 10.76 12.77 11.45 19.22 4.37 40.63 42.03 20.83 20.59 22.39 13.05 24.63 14.37 15.71 9.15 17.48 8.93 15.57 7.97 9.96 5.08 14.35 7.34 6.46 5.65 56.59 49.51 57.88 47.01 4.87 2.42 31.89 15.91 104.47 52.13 21.81 10.88 14.06 9.23 15.05 9.9 16.18 10.63 22.35 14.7 9.97 6.55 9.07 5.42 26.55 15.85 30.28 18.06 44.97 26.85 48.63 29.01.63 7.26 33.1 12.92 33.41 18.91 2.83 13.55 30 18.2 52.03 32.33 45.32 26.71 37.88 17.76 33.46 15.92 49.41 22.32 28.16 12.83 21.88 9.97 12.97 5.9 11.75 5.36 10.18 4.64 34.13 15.85 14.86 7.11 24.63 9.07 23.01 25.21 22.41 18.07 6.91 5.57 17.55 9.59 21.94 11.99 31.44 17.19 19 12.48 28.54 18.73 10.96 7.19 10.89 7.15 12.26 8.05 13.28 11.97 21.56 19.43 51.53 46.46 18.45 19.73 8.67 9.27 47.05 30.93 13.15 9.11 35.31 16.7 40.35 30.26 49.16 43.52 11.72 10.37 27.78 10.16 18.52 6.57 90.57 13.06 46.8 6.75 35.15 3.35 65.52.53 74.24 2.78 203.82-11.72 102.09-20.1 27.39-6.88 40.75-10 39.17-24.46 45.74-37.29 13.1-43.35 7.58 2-1.93 25.58 33.52-4.23 36.37-20.32 53.21-22 139.4-2.72 23.41.01-.16-7.59 23.85-3.73 130.9 7.69 1.98 23.88-14.66 47.72 48.51 40.13 90.14 18.46 30.15-11.69 20.92-2.37 83.03-17.09 105.72-46.92 95.71-53.53 34.31-25.38 14.76-37.22 85.1-70.09-31.94-30.9-15.35-54.7 10-1.89 16.26 53.32 61.94 56.93 54.73-33-17.15-60.28 4.74-41.91 31.31-25.39 8.27-43.71 39.27-8.88 11.53-30.68 5.31-41.36-12.4-30.13-26-12.99 6.12-38.61 46.48-65.68 12.83-46.31 21.57 3.22 18.19-23.98-8.91-18.98 2.73-5.55 6.82 3.19 6.42-12.47 76.73-25.61 7.1-56.07-22.5-124.18-31.53-24.28-61.42-39.93-10.47-185.51-31.53-95.94-5.43-62.35-24.1-22.13h-4l-8.25-9.25-5.5-8-1.75-7.26 4.74-6 10.76 9.5 2.75-3-11-12.5-13.76-9.75.5-7.5 12.14-10.8 48.07 17.33 11.04 5.72 16-4.25 14-5 8.2-10.33 32.83-53.2 20.1-138.17-21.23-23.06-28.53-.28-47-32.98-1.44-116.3 12.15-12.22 28.19-2.82 4.51-28.76-26.5-14.08 2.81-41.85 62.74-31.05 56.5-132.56 32.68.46 47.99-21.5 22.34-189.16 1.75-9.51 4.16-83.48 9.12-183.01-13.85-305.63-65.63-54.48-5.69-316.81 25.16-70.9 1.75-6.72 7.38-51.83-17.69-266.07-1.16-107.04-11.59-83.87-35.66-217-32.13-193.98-9.34-109.33-19.89-89.45-71.29-455.79-50.17-229.94-34.96-240.02-46.33-348.55-12.25-171.39-.46-176.55-26.52-424.95-80.83-270.8-87.38-132.42-28.06-81.41-17.07-25.61-6.53-22.09 5.28-53.47 13.81-60.26 12.95-45.03 34.72-69.42 45.34-204.6 13.99-344.04.24-632.71 7.34-381.09 2.22-267.26-17.11-162.63-33.76-155.67-3.02-45.95 45.97-123 43.75-188.94 31.05-223.76 5.59-78.34 18.2-90.69 3.2-75.68-3.67-71.66-13.77-67.38-2.21-35.84 5.65-5.09 5.72 18.84 11.59 7.72 10.43-12.14-6.51-12.69-9.26 2.2-8.1-13.55 7.52-81.81-18.66-227.35-21.1-89.99-50.87-300-1.18-172.4 8.93-175 47.39-131.36 2.61-77.49-7.26-121.45-15.98-300.24-23.77-17.85 1.55-51.39 13.8-13.25-22.09-141.35-92.21-529.5-56.32-297.61-36.99-136.39-49.14-245.7-13.25-64.6.55-184.42 55.22-161.78 33.13-143.01 61.29-315.82 18.22-67.36-14.91-404.73 30.37-90-12.69-135.82-19.08-70.81 34.37-36.56 102-231.41 23.77-95.42-4.75-108.94 6.32-18.82 45.6-154.48 47.15-176.93 31.81-76.05 72.02-110.77-5.85-19.74 56.97-154.71 63.07-139.08 26.37-139.08 44.47-79.1 5.78-121.63 49.02-125.64 52.56-135.33 4.83-29.36 11.27-29.04 8.04-1.46 50.44-103.83.74-43.5-.08-57.2-19.66-37.85 14.76-20.9 29.75-5.65 58.75-175.5 69.3-160.43-20.34-93.76 48.95-255.71 36.91-190.18-16.57-15.06 3.77-22.6 24.86-15.45 25.23-124.26-19.96-51.6 34.26-27.49 23.73-47.44-7.16-47.08 2.27-73.43 6.89-35.29 34.63.99 67.61-185.02 80.14-210.74 30.34-105.2-9.9-41.55 13.2-32.32 19.45-2.64 6.6-114.11 44.85-155.66 16.49-121.04 42.54-118.39 25.73-65.97 38.91-58.7 24.08-89.05 50.46-178.08 22.57-107.86-14.51-21.1 32.65-68.59 66.62-137.53 24.73-121.03-19.45-78.17 42.21-127.95 14.51-27.37 42.54-103.23 4.95-28.36 133.68-209.75 41.01-85.75 83.26-100.04 42.56-35.11 13.98 11.5 44.42-55.91 74.26-90.72 16.46-63.07 91.96-142.59 96.5-122.96-1.59-6.91 2.34-6.36 31.35-38.36 33.25-28.57 54.29-69.47 5.38-29.13 5.48-37.09-4.08-52.22-25.75-192.35 1.59-20.71-6.24-4.72.36-2.23 1.43-.86 5.96 2.87-3.52-81.45 5.9-36.69 2.1-135.66 20.92-111.17 1.67-79.03-12.52.17-6.31-2.56 2.87-3.93 4.86 3.25 10.54-.4-.09-10.04-14.4.61-6.68-2.44.81-1.82 9.22 2.13 12.57-.9-.31-5.18-10.85-.1-5.47-2.33-9.53-72.07-4.46-2.44-2.84-2.73-4.73-16.93 14.73-121.85-17.25-33.49-7-136.51-8-77-23.45-61.76-.48-2.2-22.56-101.79 5.15-69.77 5.59-75.72 4.01-24 33-63.75 15.35-59.8 3.35-34.29 2.51-11.55.46-16.78-.69-13.52-2.9-14.68-3.33-15.47-9.34-18-13.75-49.29-18.69-22.63-9.54-1.46 1.04-3.25 13.37.91 6.23-5.77 3.5-7.15-1.06-6.84-5.02-4.14 5.08-16.3 1.61-11-14.68-5.11 5.8-13.64 22.99 8.01 1.33-4.29 6.08 1.92-1.18 4.15 16.98 4.94 9.07-4.96 1.91-4.89 1.22-2.99 6.78-6.02-11.23-3.65-24.14-7.66 2.48-7.42-10.12-3.37-4.33-1.88.15-10.78 3.49-3.04 6.23-2.42 3.64-15.33-1.21-7.59.3-9.25-.37-5.68.63-7.98-15.5-1.23-.35 4.44-3.12-3.52.19-6.27 8.48-8.65 10.57-6.11 12.65-2.2-.75-.81-13.06-21.71-36.12-39.15-32.94-27.77-18.18 1.92-16.72-7.51-11.6 4.61-14.17 2.4-10.75-.68-15.36-2.4-13.65-5.46-16.21-8.19-12.8-8.36-6.14-5.13-1.54-4.61 1.02-4.78 3.73-.28 17.94 13.08 16.21 9.9 18.09 6.14 18.77.68-6.63-6.18 1.75-1.66 7.65 7.29 10.41-10.04-4.52-4.89 2.3-2.21 9.77 10.6 12.35-10.04-5.34-5.43 4.32-3.59-14.19-14.93-3.41 3.31-1.19-1.1 6.86-8.38-4.27-4.78-9.98 5.01-14.1-15.17.48-1.81-1.58-4.47-5.37-4.9-5.04-1.17-35.53-63.25-21.28-63.64-21.17-27.8-19.63-25.8-54.22-17.43-1.19 4.26 15.22 7.97-2.87 9.24-15.02 3.51-24.71-17.27 3.95-8.68 22.17 4.74 1.11-3.94-22.41-5.03-37.05-21.66-18.14-5-59.29 1.74-28.07 11.23-17.17 4.08-3.02.71-7.85 2.98-4.08.7-4.13-4.3-9.69-10.73-11.8 2.41-10.73 9.47-8.84-1.89-2.74 1.32-3.07 1.48-1.74 6.49.92 4.53h1.64l1.72 7.44-7.86 2.06-.34-1.2-3.21.25-2.44-.4-2.74-1.94-27.6 8.23-.07 2.6-1.08 2.19-3.07 1.31-3.09.24-2.76-1.38-1.79-3.73-20.98-4.93-5.72.21-10.11-6.03 6.18-25.38-4.72-9.11-7.64-8.29-28.47-16.1-15.94-.65-13.66 4.72-7.97 14.3 26.01 13.87 40.41 26.7 2.19 5.63 8.6 4.94 3.72 19.32-1.85.81-6.85-10.08-11.09-2.91-32.66-21.62-10.36-13.51-10.98-.92-21.08-11.8-13.77 27.7 31.11 14.22 12.36-2.92 8.49 12.24-2.4 2.13 2.3 5.46-17.49-7.94-8.22 17.72 1.9 1.73 2.47 5.17.23 4.83-3.26 4.29-4.1-.38-3.92-2.48-20.81-7.35-15.89-5.43-6.57-.42-15.16-2.09-2.41-1.57-1.01-1.92-2.75 1-3.82.84.5 5.92-84.8 8.18 2.13 29.96-57.78 3.34-1.98 2.69 4.49 56.4.83 8.76-7.45-.33-30.85-15.24-27.59-9.28-9.5-1.8-9.81-5.78-10.81-20.74-10.44-2.4-11.94-15.71-14.46 5.66-5.54 40.87-17.48 28.04-9.47 9.46-18.94 10.66-14.47 14.96.25 1.5-15.44 11.42-59.41 82.26-17.95 3.65-21.21-1.27-41.64-7.19-128.8 20.79-86.66 10.28-24.01 3.44-25.76 3.11-16.11 2.15 7.34 11.83-10.5 6.5-9.75 6.04-10.78 6.7-9 5.57-9.83 6.1-9.26 5.74-.72-1.16-6.61-10.67-20.65 19.83 8.27 8.86-12.38 14.29-8.66 9.5-1.89 2.52 15.93 18.05-23.36 89.72-31.2 58.4-50.41 24-5.28 9.39-11.84 20.81-18.9 81.98-22.76 105.11-10.35 44.71-26.24-7.19-31.55 33.26-24.05-7-9.85 18.55 26.1 25.7-21.4 37.6-2.4 8.11-5.1 17.24-16.7 44.75-19.95 73.7-1.77 9.42 1.91 7.28-7.57 18.98-8.67 21.98-.71 2.49-.89 2.48-3.71 10.29-8.28 25.65-1.72 4.62-20.46 60.97-14.46 8.5-9.08 6.38.56 15.47-.38 16.87 35.8 42.48 2.34 34.58-6.73 12.23-5.29 4.09-9.91 14.96-10.78 15.85-12.99 7.84 6.71 17.56-7.86 14.3-19.89-6.98-4.68 8.15-1.66 5-23.07 6.38-16.33 4.65-9.38 23.41-8.23 18.06-9.27 15.97-17.08 36.5-3.09 6.6-15.77 47.21-11.82 35.4-17.47 52.29-3.05 21.35 19 31.08 9.81 3.16 18.13 6.53-5.65 15.69-18.41-6.64-24.07 9.19-21.46 36.79-45.57 114.03-6.68 16.72-25.15 62.94-26.2 65.54-1.65 6.74-19.25 78.47 9.18 50.41 5.04 25.68 1.87 12.27-14.1 62.2-36.5 76.39-50.55 44.21-43.67 62.71 36.01 12.5-2.51 3.87-11.56 21.97-32.06-8.47-20.18 44.63-20.98 58.33-1.78 1.99-34.46 38.72-60.86 68.38-14.25 52.6 6.5 2.37 2.38 7-2.13 6.88-9.13 3.24-5.5-.75-4.25-1.13-2.5 7.63 15.62 7.88-2 6.38-16.75 2.37-.45 2.12-6.61 30.63-9.44 39.88-37 89.5-13.18 30.95-29.57 68.61.5 50.3 7.75 55.75-22.05 37.9-42.85 34.71-91.16 230.16-15-1.94-51.76 113.67 26.12 15.48-14.03 60.46-12.69 63.64-6.26 6.27-10.07-13.8-10.88-5.81-6.78-4.83-2.41-5.81 11.6-12.33 7.75-11.85 6.77-15.72 1.94-17.67 12.57-28.54-14.27-3.62-9.67 28.29-6.29 22.73-11.12 20.8-5.81 11.37-4.84 7.5 11.86 22.01-18.46 20.79-18.06 62.41-18.62 17.89-10.63 43.78-30.71-1.55-22.32 30.7 47.47 4.71-.76 12.38-6.54 14.1-33.97 52.51-64.19 60.81-15.42 69.17-81.09 213.95-131.1 62.63-82.91 42.12-59.44 64.99-18.41 36.22-35.75 34.17-14.29 20.1-13.19 27.02-19.77 31.96-1.48 2.65 3.96 15.37 8.04 31.15 10.93 42.37 8.68 14.6 18.08 11.16-9.26 22.09-14.44 15.55-19.27 14.89-30.77-3.91-34.2 35.17-18.77 34.14-27.11 15.09-39.86 57.7-8.37 78.29-20.15 14.04-4.09 42.91-28.91 148.22-94.08 181.5-5.53 10.66-233.2 171.72-42.81 29.23-5.5 19.69-12.83 13.29-6.87 19.69-4.11 6.5-11.53 14.53 10.41 8.27.75-.04-3.5 5.5-1.74 2.25-10.88-5.5-6.88 9.24-4.62-1.38-7.54 13.86-5.22 9.66-10.56 19.55-8.65 22.82-2.81 7.4-7.57 21.53-.68 1.92-.57 15.23-4.61 13.07-1.74 4.97-4.95 3.35-38.52 52.68-.53.96-7.62 13.43-4.34 9.7-8.46 12.48-1.01 2.25-8.63 22.74-1.61 6.4-24.58 32.64-8.05 35.81-8.77 55.32-25.45 118.47-45.07 117.89-20.6 24.34-24.18 48.07-16.91 21.26-13.17 16.59-12.47 15.7-10.42 13.11-6.93 8.73-12.3 15.49-5.21 6.69-6.48 8.34-4.2-1.7-9.16-3.7-17.76 22.53-27.59 43.49-1.05 3.16-5.93 19.2 17.85 7.83-3.26 20.89-3.64 17.31-.29 11.4-.18 3.23-9.58 33.91-2.61 7.07-6.87 11.76-34.93 46.41-23.51 36.17-13.92 21.42-6.45 12.09-.86 2.24-3.5 6.22-1.05-.26-1.99 4.36-2.78 2.24-3.43 1.59-11.76-.13.58 9.6.62 10.14 3.43 13.57 1.02 6.55.34 2.23 1.76 11.35.95 5.22 1.39 7.57 7.18 12.64 1.69 1.89 26.18 29.33 24.29 27.2.47 8.82 3.22 1.74-1.17 37.27-18.39 101.01-9.74 133.32 33.15 77.35 3.58 67.68-50.28 70.31-23.24 15.39-148.89-17.27-109.75 62.04-38.13 38.99-73.46 34.83-57.83 41.87-51.12 131.72 18.63 15.6 10.61 80.46 16.15 83.75 14.27 28.17 11.39 64.65-17.4 64.89-17.65 34.94-33.48 134.9-88.39 57.11-60.48 74.61-15.91 162.06-8.94 15.01-37.26 18.73-19.4 49.26 2.12 50.03 46.91 92.28-12 69.04-56.39 79.45-21.47 65.52-6.9 132.7-30.88 138.09-37.58 111.12-47.8 81.71-15.94 59.63-96.4 141.36-15.76 74.4-3.78 12.24-1.7 10.57-4.09 99.68-23.28 129.09-27.78 22.87-8.17 47.39-28.26 64.41-30.38 69.21.26 2.85 3.76 40.81 4.78 51.89 20.83 74.36-39.62 78.01-95.83 115.02-71.96 94.21-40.35 69.65-21.6 37.52-26.47 62.71-40.86 5.91-22.71 6.24-47.47 13.03-47.58 23.07-55.1 37.04-17.5 17.33-3.23 3.59-22.02 24.42-19.59 33.54-11.23 22.06-16.31 32.06-9.88 31.26-8.2 25.94 5.92 44.35 20.59 66.53 19.3 62.4-3.44 13.16-13.28 50.86-26.66 74.26-14.43 51.77 3.26 21.03 25.79 82.55-1.79 41.23-3.94 12.91-3.62 4.98-26.14 23.52-3.22 4.67-8.24 4.12-11.25 2.18-22.03 4.35-21.75 4.38-33.88 6.98-45.35 14.37-10.19 13.35-16.7 10.23-45.55 14.91-14.7 7.18-10.57 1.96-11.3-1.43-12.01 1.61-13.26 5.74-14.34 5.91-8.96-1.25-3.77-3.95-10.41.42-7.69.31-3.09.68-8.2 1.82-1.61.36-6.14 3.5-11.78 6.72-1.51 1.32-13.97 12.25-4.95 4.35-8.97 7.7-14.52 15.42-49.39 49.42-10.17 50.98.53 60.85 1.66 2.92 15.38 27.13 2.44 4.35 24.81 43.82 5.62 4.55 13.51 10.93 4.88 3.95 31.92 6.62 11.85 18.69-.86 13.49-.41 6.44-41.7 18.66-16.97 12.15-19.14 17.8-24.85 31.48-14.64 15.05-3.43 14.29-3.79 7.98-4.74 14.74 5.99 89.26 41.05 35.36-51.54 22.39-49.5 48.25-33.98 23.15-5.29 4.6-7.05 6.15-.52 11.36-7.44 11.69-4.21 2.03-9.72 1.7-4.77 3.05-13.39 8.58-30.79 19.61-.4 22.07 1.85 6.62 6.37 20.54 9.33 30.62-2.26 9.2-1.62 6.54-1.31 4.09-3.97 2.92-4.73 2.41-3.9-.58-10.44-5.21-7.1-3.55-14.8-9.37-5.01-1.96-20.35-2.17-10.99 1.63-27.39 7.26-14.61 1.33-6.1-2.28-14.25 1.85-12.14 10.83-19.71 11.8-7.37 4.42-31.1 54.66-43.81 82.02-28.29 51.61 3.15 26.21 27.91 86.77 6.36 33.63-23.83 21.97-43.48 24.5-36.82 19.59-34.6 60.16-94.27 102.08-34.23 28.07-51.46 67.85-23.87 68.86-31.41 85.59-23.19 150.3 24.47 77.05 20.88 32.52 5.72 48.56 47.45 70.8 28.27 144.68-16.49 41.86-9.82 18.91-30.58 21.64-14.48 13.58-7.65 7.74-8.32 8.44-73.99 24.98-69.22 23.37-35.09 11.84-52.96 56.69-13.54 14.51-25.78 47.68-97.42 180.21 46.58 131.21.26 15.11-24.35 72.32-38.11-7.91-1.98 12.14-14.11-2.72-1.17-12.77-77.04 20.7 9.15 29.94 68.35-21.39.21-11.52 24.76 4.21 26.03 9.37-.68 12-5.06 19.47-11.38 5.94-1.73 18.57-43.15 33.37-3.39 31.22-15.09 10.9-13.12 39.85 22.02 7.41-6.7 32.8-28.46-7.2-2.83 20.29 4.89 44.56 17.35 55.1 1.05 59.05 8.04 43.39 37.89 46.58-6.19 20.11 40.99 70 5.22 36.53 82.66 113.46 48.65 51.12 123.31 88.1 25.58 46.45 15.3 31.79 24.55 21.81 119.5 71.4 83.76 18.32 29.53 3.46 71.65-18.72 29.25-34.5 93.61-24.78 39.13-76.79 21.02-65.52 34.86-62.48 29.54-9.35 14.33-48.24 33.34-22.53 127.2-8.19 45.94-26.92 36.23-63.44-3.5-16.96 6.11-7.56 40.68 5.52 8.18 16.67 19.14 3.22 23.35-23.86 42.02 82.63 88.02-16.96 26.99 12.81 14.29 55.42 7.55 96.11-33.33 77.79-45.62 42.7-37.72 121.64 26.71 51.15-29.12 33.01 8.94 83 27.87 56.83 42.76 88.11 65.4 61.44 40.81 68.1 30.65 26.64 25.6 37.69 40.4 86.12 46.7 44.75 19.85 31.27 7.09 11.23 21.2 48.5 6.7 45.1-2.9 56.16-13.87 37.08-9.39 260.32-11.62 134.85 16.81 105.8 64.97 88.65 25.29 151.2 31.54 41 57.13 43.94 7.26 5.27 37.54 35.14 59.32 137.89 70.87 79.16 5.4.86 32.62 29.12-5.5 6.13 1.77 1.61 19.68 17.94-2.84 3.79 24.23 20.06 21.21 18.74 17.98 18.76 2.13-2.06 22.28 16.41 25.59 1.92 28.4 23.11 14.61 10.81-10.43 12.39 9.29 7.82 6.61-7.92 184.49 87.88 57.99 133.99 85.02 132.32 34.25 102.63 52.34 138.14 97.2 159.92 33.23 212.92 40.02 178.67 61.15 76.06 5.66 48.83 21.54 41.8-.93 98.44-56.73 138.62-17.81 80.29-29.14 171.39-2.24 60.62-45.25 37.5-66.34 11.61-25.75 20.79-40.13 17.72-62.08 19.66-17.72 28.06-19.02 21.02-94.87 28.21-114.13 75.6-77.84 101.76-23.4 40.81-77.11 134.13-47.68 131.19-13.15 135.7 25.13 121.47 7.75 30.5 17.12 50.71-10.88 8.78-31.74 25.64-57.57 8.83-31.46 35.43-3.82 203.08 29.56 85.76 26.29 94.63-15.73 91.41zM3138.14-4149.91l2.13-6.87 11.84-20.24 6.08-9.7 18.09 5.43 39.63 6.08 32.72-3.78 24.34 3.95 26.47 11.84 22.03 2.95 18.59 2.31 12.33 1.98 2.96 8.38-4.94 21.39-7.89 24.82 3.62 36.68-14.63 3.94-7.74 12.01-21.87.99-18.28 35.69-2.54 18.06-17.09 1.64-10.91 6.75-6.39 15.69-8.1 3.24-10.86 2.8-15.95-.67-13.16-6.41-7.55-6.87-12.28-1.25-8.62 12.9-9.04.82-11.51-1.47-10.36 15.46-16.78 24.5-12.17 5.43-5.98-4.42 4.83-24.32 4.29-24.53 8.87-19.41 8.3-14.62 2.77-32.5 3.74-40.2-8.29-10.96-2.11-19.56 7.74-7.94 3.66-29.94z"
                    ></path>
                    <path
                        fill="#B5D0D0"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M1705.75 9459.02l-53.3 53.87-14.46 20.19-4.74 88.75 7.31 34.71 14.15 18.09-2.93 27.77-13.36 17.66 6.03 46.54-19.82 102.12-24.45 53.3-10.77 23.47-6.98 114.02-.01 54.31-.02 56.5 10.13 78.08 3.09 106.49 1.84 63.28 3.44 6.04 20.63 36.26-10.12 39.7-14.36 35.52-7.19 17.75-52.72 72.98-14.54 14.72-19.81 20.05-23.79 22.19-4.44 4.14-8.31 21.7-11.94 29.9-4.6 33.39-1.16 47.18.56 140.01 8.35 76.41 32.92 78.7 86.41 161.85 54.44 68.85 13.24 28.46 4.6 9.05-.83 8.98 34.32 33.02 35.47 33.17 50.21 31.63 16.33 7.09 8.19-6.94 29.85 15.63 42.44 22.24 37.31 19.55 37.61 12.25 4.9 10.76 12.77 11.45 19.22 4.37 40.63 42.03 20.83 20.59 22.39 13.05 24.63 14.37 15.71 9.15 17.48 8.93 15.57 7.97 9.96 5.08 14.35 7.34 6.46 5.65 56.59 49.51 57.88 47.01 4.87 2.42 31.89 15.91 104.47 52.13 21.81 10.88 14.06 9.23 15.05 9.9 16.18 10.63 22.35 14.7 9.97 6.55 9.07 5.42 26.55 15.85 30.28 18.06 44.97 26.85 48.63 29.01.63 7.26 33.1 12.92 33.41 18.91 2.83 13.55 30 18.2 52.03 32.33 45.32 26.71 37.88 17.76 33.46 15.92 49.41 22.32 28.16 12.83 21.88 9.97 12.97 5.9 11.75 5.36 10.18 4.64 34.13 15.85 14.86 7.11 24.63 9.07 23.01 25.21 22.41 18.07 6.91 5.57 17.55 9.59 21.94 11.99 31.44 17.19 19 12.48 28.54 18.73 10.96 7.19 10.89 7.15 12.26 8.05 13.28 11.97 21.56 19.43 51.53 46.46 18.45 19.73 8.67 9.27 47.05 30.93 13.15 9.11 35.31 16.7 40.35 30.26 49.16 43.52 11.72 10.37 27.78 10.16 18.52 6.57 90.57 13.06 46.8 6.75 35.15 3.35 65.52.53 74.24 2.78 203.82-11.72 102.09-20.1 27.39-6.88 40.75-10 39.17-24.46 45.74-37.29 13.1-43.35 7.58 2-1.93 25.58 33.52-4.23 36.37-20.32 53.21-22 139.4-2.72 23.41.01-.16-7.59 23.85-3.73 130.9 7.69 1.98 23.88-14.66 47.72 48.51 40.13 90.14 18.46 30.15-11.69 20.92-2.37 83.03-17.09 105.72-46.92 95.71-53.53 34.31-25.38 14.76-37.22 85.1-70.09-31.94-30.9-15.35-54.7 10-1.89 16.26 53.32 61.94 56.93 54.73-33-17.15-60.28 4.74-41.91 31.31-25.39 8.27-43.71 39.27-8.88 11.53-30.68 5.31-41.36-12.4-30.13-26-12.99 6.12-38.61 46.48-65.68 12.83-46.31 21.57 3.22 18.19-23.98-8.91-18.98 2.73-5.55 6.82 3.19 6.42-12.47 76.73-25.61 7.1-56.07-22.5-124.18-31.53-24.28-61.42-39.93-10.47-185.51-31.53-95.94-5.43-62.35-24.1-22.13h-4l-8.25-9.25-5.5-8-1.75-7.26 4.74-6 10.76 9.5 2.75-3-11-12.5-13.76-9.75.5-7.5 12.14-10.8 48.07 17.33 11.04 5.72 16-4.25 14-5 8.2-10.33 32.83-53.2 20.1-138.17-21.23-23.06-28.53-.28-47-32.98-1.44-116.3 12.15-12.22 28.19-2.82 4.51-28.76-26.5-14.08 2.81-41.85 62.74-31.05 56.5-132.56 32.68.46 47.99-21.5 22.34-189.16 1.75-9.51 4.16-83.48 9.12-183.01-13.85-305.63-65.63-54.48-5.69-316.81 25.16-70.9 1.75-6.72 7.38-51.83-17.69-266.07-1.16-107.04-11.59-83.87-35.66-217-32.13-193.98-9.34-109.33-19.89-89.45-71.29-455.79-50.17-229.94-34.96-240.02-46.33-348.55-12.25-171.39-.46-176.55-26.52-424.95-80.83-270.8-87.38-132.42-28.06-81.41-17.07-25.61-6.53-22.09 5.28-53.47 13.81-60.26 12.95-45.03 34.72-69.42 45.34-204.6 13.99-344.04.24-632.71 7.34-381.09 2.22-267.26-17.11-162.63-33.76-155.67-3.02-45.95 45.97-123 43.75-188.94 31.05-223.76 5.59-78.34 18.2-90.69 3.2-75.68-3.67-71.66-13.77-67.38-2.21-35.84 5.65-5.09 5.72 18.84 11.59 7.72 10.43-12.14-6.51-12.69-9.26 2.2-8.1-13.55 7.52-81.81-18.66-227.35-21.1-89.99-50.87-300-1.18-172.4 8.93-175 47.39-131.36 2.61-77.49-7.26-121.45-15.98-300.24-23.77-17.85 1.55-51.39 13.8-13.25-22.09-141.35-92.21-529.5-56.32-297.61-36.99-136.39-49.14-245.7-13.25-64.6.55-184.42 55.22-161.78 33.13-143.01 61.29-315.82 18.22-67.36-14.91-404.73 30.37-90-12.69-135.82-19.08-70.81 34.37-36.56 102-231.41 23.77-95.42-4.75-108.94 6.32-18.82 45.6-154.48 47.15-176.93 31.81-76.05 72.02-110.77-5.85-19.74 56.97-154.71 63.07-139.08 26.37-139.08 44.47-79.1 5.78-121.63 49.02-125.64 52.56-135.33 4.83-29.36 11.27-29.04 8.04-1.46 50.44-103.83.74-43.5-.08-57.2-19.66-37.85 14.76-20.9 29.75-5.65 58.75-175.5 69.3-160.43-20.34-93.76 48.95-255.71 36.91-190.18-16.57-15.06 3.77-22.6 24.86-15.45 25.23-124.26-19.96-51.6 34.26-27.49 23.73-47.44-7.16-47.08 2.27-73.43 6.89-35.29 34.63.99 67.61-185.02 80.14-210.74 30.34-105.2-9.9-41.55 13.2-32.32 19.45-2.64 6.6-114.11 44.85-155.66 16.49-121.04 42.54-118.39 25.73-65.97 38.91-58.7 24.08-89.05 50.46-178.08 22.57-107.86-14.51-21.1 32.65-68.59 66.62-137.53 24.73-121.03-19.45-78.17 42.21-127.95 14.51-27.37 42.54-103.23 4.95-28.36 133.68-209.75 41.01-85.75 83.26-100.04 42.56-35.11 13.98 11.5 44.42-55.91 74.26-90.72 16.46-63.07 91.96-142.59 96.5-122.96-1.59-6.91 2.34-6.36 31.35-38.36 33.25-28.57 54.29-69.47 5.38-29.13 5.48-37.09-4.08-52.22-25.75-192.35 1.59-20.71-6.24-4.72.36-2.23 1.43-.86 5.96 2.87-3.52-81.45 5.9-36.69 2.1-135.66 20.92-111.17 1.67-79.03-12.52.17-6.31-2.56 2.87-3.93 4.86 3.25 10.54-.4-.09-10.04-14.4.61-6.68-2.44.81-1.82 9.22 2.13 12.57-.9-.31-5.18-10.85-.1-5.47-2.33-9.53-72.07-4.46-2.44-2.84-2.73-4.73-16.93 14.73-121.85-17.25-33.49-7-136.51-8-77-23.45-61.76-.48-2.2-22.56-101.79 5.15-69.77 5.59-75.72 4.01-24 33-63.75 15.35-59.8 3.35-34.29 2.51-11.55.46-16.78-.69-13.52-2.9-14.68-3.33-15.47-9.34-18-13.75-49.29-18.69-22.63-9.54-1.46 1.04-3.25 13.37.91 6.23-5.77 3.5-7.15-1.06-6.84-5.02-4.14 5.08-16.3 1.61-11-14.68-5.11 5.8-13.64 22.99 8.01 1.33-4.29 6.08 1.92-1.18 4.15 16.98 4.94 9.07-4.96 1.91-4.89 1.22-2.99 6.78-6.02-11.23-3.65-24.14-7.66 2.48-7.42-10.12-3.37-4.33-1.88.15-10.78 3.49-3.04 6.23-2.42 3.64-15.33-1.21-7.59.3-9.25-.37-5.68.63-7.98-15.5-1.23-.35 4.44-3.12-3.52.19-6.27 8.48-8.65 10.57-6.11 12.65-2.2-.75-.81-13.06-21.71-36.12-39.15-32.94-27.77-18.18 1.92-16.72-7.51-11.6 4.61-14.17 2.4-10.75-.68-15.36-2.4-13.65-5.46-16.21-8.19-12.8-8.36-6.14-5.13-1.54-4.61 1.02-4.78 3.73-.28 17.94 13.08 16.21 9.9 18.09 6.14 18.77.68-6.63-6.18 1.75-1.66 7.65 7.29 10.41-10.04-4.52-4.89 2.3-2.21 9.77 10.6 12.35-10.04-5.34-5.43 4.32-3.59-14.19-14.93-3.41 3.31-1.19-1.1 6.86-8.38-4.27-4.78-9.98 5.01-14.1-15.17.48-1.81-1.58-4.47-5.37-4.9-5.04-1.17-35.53-63.25-21.28-63.64-21.17-27.8-19.63-25.8-54.22-17.43-1.19 4.26 15.22 7.97-2.87 9.24-15.02 3.51-24.71-17.27 3.95-8.68 22.17 4.74 1.11-3.94-22.41-5.03-37.05-21.66-18.14-5-59.29 1.74-28.07 11.23-17.17 4.08-3.02.71-7.85 2.98-4.08.7-4.13-4.3-9.69-10.73-11.8 2.41-10.73 9.47-8.84-1.89-2.74 1.32-3.07 1.48-1.74 6.49.92 4.53h1.64l1.72 7.44-7.86 2.06-.34-1.2-3.21.25-2.44-.4-2.74-1.94-27.6 8.23-.07 2.6-1.08 2.19-3.07 1.31-3.09.24-2.76-1.38-1.79-3.73-20.98-4.93-5.72.21-10.11-6.03 6.18-25.38-4.72-9.11-7.64-8.29-28.47-16.1-15.94-.65-13.66 4.72-7.97 14.3 26.01 13.87 40.41 26.7 2.19 5.63 8.6 4.94 3.72 19.32-1.85.81-6.85-10.08-11.09-2.91-32.66-21.62-10.36-13.51-10.98-.92-21.08-11.8-13.77 27.7 31.11 14.22 12.36-2.92 8.49 12.24-2.4 2.13 2.3 5.46-17.49-7.94-8.22 17.72 1.9 1.73 2.47 5.17.23 4.83-3.26 4.29-4.1-.38-3.92-2.48-20.81-7.35-15.89-5.43-6.57-.42-15.16-2.09-2.41-1.57-1.01-1.92-2.75 1-3.82.84.5 5.92-84.8 8.18 2.13 29.96-57.78 3.34-1.98 2.69 4.49 56.4.83 8.76-7.45-.33-30.85-15.24-27.59-9.28-9.5-1.8-9.81-5.78-10.81-20.74-10.44-2.4-11.94-15.71-14.46 5.66-5.54 40.87-17.48 28.04-9.47 9.46-18.94 10.66-14.47 14.96.25 1.5-15.44 11.42-59.41 82.26-17.95 3.65-21.21-1.27-41.64-7.19-128.8 20.79-86.66 10.28-24.01 3.44-25.76 3.11-16.11 2.15 7.34 11.83-10.5 6.5-9.75 6.04-10.78 6.7-9 5.57-9.83 6.1-9.26 5.74-.72-1.16-6.61-10.67-20.65 19.83 8.27 8.86-12.38 14.29-8.66 9.5-1.89 2.52 15.93 18.05-23.36 89.72-31.2 58.4-50.41 24-5.28 9.39-11.84 20.81-18.9 81.98-22.76 105.11-10.35 44.71-26.24-7.19-31.55 33.26-24.05-7-9.85 18.55 26.1 25.7-21.4 37.6-2.4 8.11-5.1 17.24-16.7 44.75-19.95 73.7-1.77 9.42 1.91 7.28-7.57 18.98-8.67 21.98-.71 2.49-.89 2.48-3.71 10.29-8.28 25.65-1.72 4.62-20.46 60.97-14.46 8.5-9.08 6.38.56 15.47-.38 16.87 35.8 42.48 2.34 34.58-6.73 12.23-5.29 4.09-9.91 14.96-10.78 15.85-12.99 7.84 6.71 17.56-7.86 14.3-19.89-6.98-4.68 8.15-1.66 5-23.07 6.38-16.33 4.65-9.38 23.41-8.23 18.06-9.27 15.97-17.08 36.5-3.09 6.6-15.77 47.21-11.82 35.4-17.47 52.29-3.05 21.35 19 31.08 9.81 3.16 18.13 6.53-5.65 15.69-18.41-6.64-24.07 9.19-21.46 36.79-45.57 114.03-6.68 16.72-25.15 62.94-26.2 65.54-1.65 6.74-19.25 78.47 9.18 50.41 5.04 25.68 1.87 12.27-14.1 62.2-36.5 76.39-50.55 44.21-43.67 62.71 36.01 12.5-2.51 3.87-11.56 21.97-32.06-8.47-20.18 44.63-20.98 58.33-1.78 1.99-34.46 38.72-60.86 68.38-14.25 52.6 6.5 2.37 2.38 7-2.13 6.88-9.13 3.24-5.5-.75-4.25-1.13-2.5 7.63 15.62 7.88-2 6.38-16.75 2.37-.45 2.12-6.61 30.63-9.44 39.88-37 89.5-13.18 30.95-29.57 68.61.5 50.3 7.75 55.75-22.05 37.9-42.85 34.71-91.16 230.16-15-1.94-51.76 113.67 26.12 15.48-14.03 60.46-12.69 63.64-6.26 6.27-10.07-13.8-10.88-5.81-6.78-4.83-2.41-5.81 11.6-12.33 7.75-11.85 6.77-15.72 1.94-17.67 12.57-28.54-14.27-3.62-9.67 28.29-6.29 22.73-11.12 20.8-5.81 11.37-4.84 7.5 11.86 22.01-18.46 20.79-18.06 62.41-18.62 17.89-10.63 43.78-30.71-1.55-22.32 30.7 47.47 4.71-.76 12.38-6.54 14.1-33.97 52.51-64.19 60.81-15.42 69.17-81.09 213.95-131.1 62.63-82.91 42.12-59.44 64.99-18.41 36.22-35.75 34.17-14.29 20.1-13.19 27.02-19.77 31.96-1.48 2.65 3.96 15.37 8.04 31.15 10.93 42.37 8.68 14.6 18.08 11.16-9.26 22.09-14.44 15.55-19.27 14.89-30.77-3.91-34.2 35.17-18.77 34.14-27.11 15.09-39.86 57.7-8.37 78.29-20.15 14.04-4.09 42.91-28.91 148.22-94.08 181.5-5.53 10.66-233.2 171.72-42.81 29.23-5.5 19.69-12.83 13.29-6.87 19.69-4.11 6.5-11.53 14.53 10.41 8.27.75-.04-3.5 5.5-1.74 2.25-10.88-5.5-6.88 9.24-4.62-1.38-7.54 13.86-5.22 9.66-10.56 19.55-8.65 22.82-2.81 7.4-7.57 21.53-.68 1.92-.57 15.23-4.61 13.07-1.74 4.97-4.95 3.35-38.52 52.68-.53.96-7.62 13.43-4.34 9.7-8.46 12.48-1.01 2.25-8.63 22.74-1.61 6.4-24.58 32.64-8.05 35.81-8.77 55.32-25.45 118.47-45.07 117.89-20.6 24.34-24.18 48.07-16.91 21.26-13.17 16.59-12.47 15.7-10.42 13.11-6.93 8.73-12.3 15.49-5.21 6.69-6.48 8.34-4.2-1.7-9.16-3.7-17.76 22.53-27.59 43.49-1.05 3.16-5.93 19.2 17.85 7.83-3.26 20.89-3.64 17.31-.29 11.4-.18 3.23-9.58 33.91-2.61 7.07-6.87 11.76-34.93 46.41-23.51 36.17-13.92 21.42-6.45 12.09-.86 2.24-3.5 6.22-1.05-.26-1.99 4.36-2.78 2.24-3.43 1.59-11.76-.13.58 9.6.62 10.14 3.43 13.57 1.02 6.55.34 2.23 1.76 11.35.95 5.22 1.39 7.57 7.18 12.64 1.69 1.89 26.18 29.33 24.29 27.2.47 8.82 3.22 1.74-1.17 37.27-18.39 101.01-9.74 133.32 33.15 77.35 3.58 67.68-50.28 70.31-23.24 15.39-148.89-17.27-109.75 62.04-38.13 38.99-73.46 34.83-57.83 41.87-51.12 131.72 18.63 15.6 10.61 80.46 16.15 83.75 14.27 28.17 11.39 64.65-17.4 64.89-17.65 34.94-33.48 134.9-88.39 57.11-60.48 74.61-15.91 162.06-8.94 15.01-37.26 18.73-19.4 49.26 2.12 50.03 46.91 92.28-12 69.04-56.39 79.45-21.47 65.52-6.9 132.7-30.88 138.09-37.58 111.12-47.8 81.71-15.94 59.63-96.4 141.36-15.76 74.4-3.78 12.24-1.7 10.57-4.09 99.68-23.28 129.09-27.78 22.87-8.17 47.39-28.26 64.41-30.38 69.21.26 2.85 3.76 40.81 4.78 51.89 20.83 74.36-39.62 78.01-95.83 115.02-71.96 94.21-40.35 69.65-21.6 37.52-26.47 62.71-40.86 5.91-22.71 6.24-47.47 13.03-47.58 23.07-55.1 37.04-17.5 17.33-3.23 3.59-22.02 24.42-19.59 33.54-11.23 22.06-16.31 32.06-9.88 31.26-8.2 25.94 5.92 44.35 20.59 66.53 19.3 62.4-3.44 13.16-13.28 50.86-26.66 74.26-14.43 51.77 3.26 21.03 25.79 82.55-1.79 41.23-3.94 12.91-3.62 4.98-26.14 23.52-3.22 4.67-8.24 4.12-11.25 2.18-22.03 4.35-21.75 4.38-33.88 6.98-45.35 14.37-10.19 13.35-16.7 10.23-45.55 14.91-14.7 7.18-10.57 1.96-11.3-1.43-12.01 1.61-13.26 5.74-14.34 5.91-8.96-1.25-3.77-3.95-10.41.42-7.69.31-3.09.68-8.2 1.82-1.61.36-6.14 3.5-11.78 6.72-1.51 1.32-13.97 12.25-4.95 4.35-8.97 7.7-14.52 15.42-49.39 49.42-10.17 50.98.53 60.85 1.66 2.92 15.38 27.13 2.44 4.35 24.81 43.82 5.62 4.55 13.51 10.93 4.88 3.95 31.92 6.62 11.85 18.69-.86 13.49-.41 6.44-41.7 18.66-16.97 12.15-19.14 17.8-24.85 31.48-14.64 15.05-3.43 14.29-3.79 7.98-4.74 14.74 5.99 89.26 41.05 35.36-51.54 22.39-49.5 48.25-33.98 23.15-5.29 4.6-7.05 6.15-.52 11.36-7.44 11.69-4.21 2.03-9.72 1.7-4.77 3.05-13.39 8.58-30.79 19.61-.4 22.07 1.85 6.62 6.37 20.54 9.33 30.62-2.26 9.2-1.62 6.54-1.31 4.09-3.97 2.92-4.73 2.41-3.9-.58-10.44-5.21-7.1-3.55-14.8-9.37-5.01-1.96-20.35-2.17-10.99 1.63-27.39 7.26-14.61 1.33-6.1-2.28-14.25 1.85-12.14 10.83-19.71 11.8-7.37 4.42-31.1 54.66-43.81 82.02-28.29 51.61 3.15 26.21 27.91 86.77 6.36 33.63-23.83 21.97-43.48 24.5-36.82 19.59-34.6 60.16-94.27 102.08-34.23 28.07-51.46 67.85-23.87 68.86-31.41 85.59-23.19 150.3 24.47 77.05 20.88 32.52 5.72 48.56 47.45 70.8 28.27 144.68-16.49 41.86-9.82 18.91-30.58 21.64-14.48 13.58-7.65 7.74-8.32 8.44-73.99 24.98-69.22 23.37-35.09 11.84-52.96 56.69-13.54 14.51-25.78 47.68-97.42 180.21 46.58 131.21.26 15.11-24.35 72.32-38.11-7.91-1.98 12.14-14.11-2.72-1.17-12.77-77.04 20.7 9.15 29.94 68.35-21.39.21-11.52 24.76 4.21 26.03 9.37-.68 12-5.06 19.47-11.38 5.94-1.73 18.57-43.15 33.37-3.39 31.22-15.09 10.9-13.12 39.85 22.02 7.41-6.7 32.8-28.46-7.2-2.83 20.29 4.89 44.56 17.35 55.1 1.05 59.05 8.04 43.39 37.89 46.58-6.19 20.11 40.99 70 5.22 36.53 82.66 113.46 48.65 51.12 123.31 88.1 25.58 46.45 15.3 31.79 24.55 21.81 119.5 71.4 83.76 18.32 29.53 3.46 71.65-18.72 29.25-34.5 93.61-24.78 39.13-76.79 21.02-65.52 34.86-62.48 29.54-9.35 14.33-48.24 33.34-22.53 127.2-8.19 45.94-26.92 36.23-63.44-3.5-16.96 6.11-7.56 40.68 5.52 8.18 16.67 19.14 3.22 23.35-23.86 42.02 82.63 88.02-16.96 26.99 12.81 14.29 55.42 7.55 96.11-33.33 77.79-45.62 42.7-37.72 121.64 26.71 51.15-29.12 33.01 8.94 83 27.87 56.83 42.76 88.11 65.4 61.44 40.81 68.1 30.65 26.64 25.6 37.69 40.4 86.12 46.7 44.75 19.85 31.27 7.09 11.23 21.2 48.5 6.7 45.1-2.9 56.16-13.87 37.08-9.39 260.32-11.62 134.85 16.81 105.8 64.97 88.65 25.29 151.2 31.54 41 57.13 43.94 7.26 5.27 37.54 35.14 59.32 137.89 70.87 79.16 5.4.86 32.62 29.12-5.5 6.13 1.77 1.61 19.68 17.94-2.84 3.79 24.23 20.06 21.21 18.74 17.98 18.76 2.13-2.06 22.28 16.41 25.59 1.92 28.4 23.11 14.61 10.81-10.43 12.39 9.29 7.82 6.61-7.92 184.49 87.88 57.99 133.99 85.02 132.32 34.25 102.63 52.34 138.14 97.2 159.92 33.23 212.92 40.02 178.67 61.15 76.06 5.66 48.83 21.54 41.8-.93 98.44-56.73 138.62-17.81 80.29-29.14 171.39-2.24 60.62-45.25 37.5-66.34 11.61-25.75 20.79-40.13 17.72-62.08 19.66-17.72 28.06-19.02 21.02-94.87 28.21-114.13 75.6-77.84 101.76-23.4 40.81-77.11 134.13-47.68 131.19-13.15 135.7 25.13 121.47 7.75 30.5 17.12 50.71-10.88 8.78-31.74 25.64-57.57 8.83-31.46 35.43-3.82 203.08 29.56 85.76 26.29 94.63-15.73 91.41zM3138.14-4149.91l2.13-6.87 11.84-20.24 6.08-9.7 18.09 5.43 39.63 6.08 32.72-3.78 24.34 3.95 26.47 11.84 22.03 2.95 18.59 2.31 12.33 1.98 2.96 8.38-4.94 21.39-7.89 24.82 3.62 36.68-14.63 3.94-7.74 12.01-21.87.99-18.28 35.69-2.54 18.06-17.09 1.64-10.91 6.75-6.39 15.69-8.1 3.24-10.86 2.8-15.95-.67-13.16-6.41-7.55-6.87-12.28-1.25-8.62 12.9-9.04.82-11.51-1.47-10.36 15.46-16.78 24.5-12.17 5.43-5.98-4.42 4.83-24.32 4.29-24.53 8.87-19.41 8.3-14.62 2.77-32.5 3.74-40.2-8.29-10.96-2.11-19.56 7.74-7.94 3.66-29.94z"
                    ></path>
                    <g fill="#BCA9A9" stroke="none" strokeLinejoin="round">
                        <path d="M93.5 358.64l-13.46-3.85 3.43-19.84 2-12 17.58 2.93-1.74 10.46-3.99-.67-3.82 22.97zM343.59 301.18l24.34 6.94 7.5-24.82 1.56-5.99-24.51-7.26-8.88 31.13zM265.52 716.9l-1.22 20.51-30.5-1.4.14-2.27-14.57-.85-.21 3.85-8.44-.47-2.74 50-22.99-1.25 2.69-49.44-15.78-.85-1.13 20.84-26.82-1.46.46-8.38-5.01-.26 1.29-23.97 10.05.54 15.72-12.15 2.41 1.13 2.61 2.28 19.52 1.24 2.89-45.4 25.33 1.6-2.7 42.62 49.02 3.56zM683.38 624.58l5.31-12.58L662 600.74l-5.31 12.58 26.69 11.26zM271.96 601.47l-.51 9.48-1.8.65-.84.83-.59 1.25-.03 2.25.47 1.32 1.29 1.18 1.03.64-.54 9.82 26.81 1.47 1.5-27.45-26.78-1.46zM458.45 255.64l-20.39 72.09-25.04-7.31 10.59-36.35 1.91-6.99 1.93-4.67 3.18-11.6 3.3-13.07 24.53 7.91zM268.99 752.33l-9.78 50.01-15.4-3 9.78-50.01 15.4 3zM398.42 647.65l-22.8-11.4-5.29 10.58 22.8 11.4 5.29-10.58zM180.48 153.45l-10.59-.43.75-17.8-35.09-1.46.68-16.19 48 2-.68 16.19-2.33-.1-.74 17.79zM195.86 211.17l-5.66 16.87 34.71 11.64-5.34 15.92 13.01 4.37 11-32.79-47.72-16.01zM220.84 308.58l-36.77-8.51-3.54 15.27 19.2 4.45-3.77 16.3 17.57 4.07 3.77-16.3 3.54-15.28zM207.56 480.52l-13.79-.56 1.05-25.96 13.79.57-1.05 25.95zM187.03 534.37l1.02-25 17.64.71-1.02 25-17.64-.71zM699.9 176.2l-22.52-1.46 1.03-15.96 22.53 1.46-1.04 15.96zM540.16 224.09l32.5 2.89 1.61-18.17-32.5-2.88-1.61 18.16zM523.12 180.45l1.17-30.63-16.82-.63-1.17 30.62 16.82.64zM517 222.21l-23.39-2.53 1.52-13.93 23.38 2.54-1.51 13.92zM665.79 196.15l-5.5-1.08-4.08 20.77 16.99 3.35 3.92-19.94 15.43 3.03 2.65-13.43-26.94-5.3-2.48 12.6zM688.43 423.14l86.3 12.93 7-46.5-19.04-2.99-5.21 30.48-67.09-10.33-1.96 16.41zM544.34 677.81l30.04 50.14-13.27 7.95-20.21-33.7-1.43-2.38-12.93-21.58 2.76-1.65 5.79-3.7 4.32-2.75 3.84-2.29 4.69 7.83-3.6 2.14zM490.27 633.11l18.68-10.6 6.44 11.35 8.86-4.91 17.53 31.42-2.01 1.11-4.16 2.32-10.22 5.73-.73-1.33-2.34 1.17-1.46.99-7.49-13.46-7.28 4.06-3.39-6.33-12.42-21.52zM476.62 669l-11.98 4.35 2.9 7.97-4.02.32-9.02 1.08.44 4.19 1.72 17.45v2.82l.15 1.29.28.68.7.38.92.08.82-.46.5-.79.18-.61.07-2.28 11.5-.18-.45-8.73.71-.28.74-.32 2.68 7.33 1.12 2.93 1.19 3.03 1.14 2.84 1.05 2.64 1.1 2.73 1.16 2.89 1.06 2.67 1.17 2.92 1.12 2.84.78 2.02 1.11 2.85-2.27.67 9.47 25.35 4.79-1.4 4.94 10.33 21.21-7.51-6.1-13.06 6.99-3.32.87-4.05 3.16-14.67-2.34-12.03-1.63-2.77-13.72 7.69-1.65-1.4-1.39-.96-2.75-.61-2.82.07-15.31-34.39-.56-1.17-.45-1.27-1.69-4.31-1.75.64-1.3.57-3.21-8.34-3.35 1.29z"></path>
                        <path d="M264.3 737.41l26.64 1.59 2.26-37.95 36.27 2.16-1.46 24.46 19.26 1.14 2.51-42.12-48.22-2.88-8.46-.5.95-16.07-9.91-.6.85-14.28-16.37-.97-2.32 39 7.56.46-1.58 26.46-6.76-.4-1.22 20.51zM489.6 670.07l10.85-6.01 5.64-3.1 7.28-4.06 7.49 13.46.84 1.53-1.78.97-22.12 12.08-3.45-6.31-.54-.97-.79-1.4-3.42-6.19zM37.19 555.25l1.26-17.67 5.07.36 1.41-19.68 14.69 1.06L58 542.04l-3.43-.24-1.04 14.6-16.33-1.15zM575.76 378.7l-22.13-2.61-2.55 21.62 22.13 2.61 2.55-21.62zM253.46 317.24l-6.64 17.66 20.62 7.75 7.72-20.54 14.26 5.35 3.63-9.65 1.73.65 4.09-10.89-14.61-5.49.89-2.39-14.46-5.42-3.86 10.26-2.9-1.08-5.83 15.53-4.64-1.74zM303.66 193.79l2.33-7.3 5.38 1.72 3.27-10.16 47.92 13.85 6.7 11.14-3.03 10.62-10.91 4.44-10.21-3.27-30.93-10.12-6.81-2.27 2.47-6.47-6.18-2.18zM289.6 218.79l-4.47 12.81 19.78 6.92 4.73-13.53-2.05-.72-6.52-2.07-11.46-3.41z"></path>
                        <path d="M307.37 202.44l-3.23 10.46-3.07 9.3 6.52 2.07 3.09-9.27 3.5-10.29-6.81-2.27zM311.68 244.77l5.7-17.62 21.47 6.95 6.24-19.27 10.21 3.27-1.52 4.35.98 1.31-2.4 7.51-2.18.65-1.63 5.12 2.95.75-10.11 28.95-11.95-3.87-3.95 12.21-8.85-2.61 7.65-23.63-12.61-4.07zM572.73 687.5l14.92-8.04 12.28 22.83-14.93 8.02-12.27-22.82zM613.63 660.12l13.42-10.89 9.46 11.67-12.97 10.51-3.12 2.53-4.77-5.88 2.68-2.16-4.7-5.78z"></path>
                        <path d="M633.9 684.44l13.45-10.69-10.84-12.85-12.97 10.51 10.36 13.03zM634.81 690.76l8.43-6.13 15.43 21.15-8.42 6.15-15.44-21.16zM570.16 55.71l31.51 9.15-4.32 14.88-31.52-9.16 4.32-14.87zM15.87 519.14l-3.74 23.64 14.98 2.38 3.74-23.65-10.86-1.72-4.12-.64zM54.35 329.99l-4.1 12.83 21.53 6.88 4.1-12.85-21.53-6.87zM468.74 544.27l8.82-16.41 22.67 12.18 9.07-16.85 15.53 8.34-17.89 33.27-38.2-20.54zM59.44 555.82l-.28 6.63 3.82.15.27-6.62-3.81-.17zM66.67 524.97l1.03 22.44 3.64-.17.29 6.23 7.31-.35-.31-6.59 3.57-.17-1.02-22.07-14.52.67zM70.01 554.03l.33 9.01 5.71-.21-.24-6.66-3.6.14-.08-2.36-2.12.08zM90.27 550.19l12.55-.92-1.32-18.2-.75-10.32-11.02.76.73 10.36-1.51.11 1.32 18.2zM-11.84 890.98l4.88-16 9.66 2.95 7.32 2.24-4.88 16-16.97-5.19zM5.09 868.65l-2.39 9.27 7.32 2.24 2.45-9.51-7.38-2zM-5 911.53l-1 4.6 6.71 1.46-.46 2.13 3.12.68 1.46-6.73-9.84-2.14zM28.21 887.39l-4.08 18.98 13.53 2.91-2.69 12.53 14.9 3.21 3.11-14.43 11.4 2.46 1.7-7.84-2.58-.56 2.78-12.9 5.03 1.08 1.96-9.11-22.87-4.92-1.29 5.94-7.21-1.56-1.46 6.84-12.22-2.63z"></path>
                        <path d="M73.99 923.82l1.09-8.65-3.83-.89 1.03-7.52-6.19-1.56-1.7 7.84-1.17 8.79 10.77 1.99zM806.14 200.81l16.39-2.73 4.93 29.62-16.39 2.74-4.93-29.63zM590.32 300.93l-5.4-12.67 10.97-4.67 5.4 12.67-10.97 4.67zM512.14 374.92l3.88-18.48 25.8 5.42-3.89 18.48-25.79-5.42zM570.36 316.99l3.01-13.53 16.2 3.6-3.01 13.53-16.2-3.6zM723.82 76.23l6.24 2.93-4.22 9-6.24-2.93 4.21-9zM704.2 24.99l-11.35 17.7-19.07-12.21 11.35-17.72 19.07 12.22zM531.04 105.28l3.62 23.17-12.74 1.99-3.62-23.17 12.74-1.99zM597.15 169.57l18.86 4.09-3.79 17.55-5.54-1.2-2.47 1.49-11.27-2.45 4.21-19.48zM718.71 86.99l-15.26-7.15 7.42-15.82 15.25 7.16-7.41 15.81zM599.58 150.57l15.07 3.18-3.27 15.48-15.07-3.18 3.27-15.48zM645.72 28.77l-28.03-17.2 8.15-13.28 28.04 17.19-8.16 13.29zM489.79 265.97l6.04-5.69 13.15 13.97-6.05 5.69-13.14-13.97zM590.61 198.06l12.92 1.81-3.3 23.54-12.93-1.81 3.31-23.54zM569.52 236.44l-5.09 37.89-19.95-2.18 2.29-13.18-13.17-1.96 3.05-13.25 2.49-10.82 30.38 3.5zM743.52 90.39l5.87-15.06 23.39 9.11-5.87 15.06-23.39-9.11zM575.4 199.81l-18.19-1.39 1.65-21.6 18.19 1.39-1.65 21.6zM738.7 120.13l-11.77-4.77 8.43-20.8 11.78 4.77-8.44 20.8zM542.21 357.5l-17.91-2.79 2.63-16.84 17.91 2.79-2.63 16.84zM610.41 302.75l-3.75-12.67 17.25-5.09 3.74 12.65-17.24 5.1zM494.2 602.25l11.33-13.89 12.14 9.91-11.34 13.88-12.13-9.9zM708.46 113.43l-23.23-5.59 3.96-16.46 23.23 5.59-3.96 16.46zM486.84 184.81l-16.11-5.26 4.17-12.75 16.1 5.26-4.16 12.75zM622.41 173.75l18 3.45-3.23 16.88-18-3.45 3.23-16.88zM577.42 604.92l-14.87-4.21-11.98-3.39 2.59-9.12 11.97 3.39 1-3.5L581 592.3l-3.58 12.63zM642.74 139.22l2.43-13.06 17.54 3.27-2.43 13.06-17.54-3.27zM675.96 654.16l-10.13 10.75-1.74-1.59-10.22-9.68L664 642.88l11.97 11.28zM625.43 60.41L592.07 38.4l8.73-13.24 33.36 22.01-8.73 13.24zM481.25 228.35l11.9-1.74 2.47 16.76-11.9 1.75-2.47-16.77z"></path>
                        <path d="M562.13 298.91l-19.81-2.71 2.18-10.78-16-2.93 3.62-11.78 12.37 1.43 1.1.11 18.85 2.07-2.3 24.58zM645.81 251.9l-18.9-3.75 2.69-13.59 18.9 3.75-2.69 13.59zM525.95 457.07l-41.91-10.18 5.15-21.21 41.91 10.18-5.15 21.21zM653.86 653.64l-1.86-1.77-3.42-3.16 9.26-9.94 5.28 4.91-9.26 9.96zM607.33 116.43l16.02 3.63-2.81 12.39-.47 2.09-16.03-3.63 3.28-14.48zM517.73 335.97l-4.27 15.95-13.94-3.74 4.28-15.94 13.93 3.73zM539.7 229.21l-.56 3.73-2.49 10.82-41.01-6.16 2.21-14.68 41.85 6.3zM608.01 286.69l-7.54-23.01 17.85-5.85 7.54 23.03-17.85 5.84zM622.43 197.71l19.5 1.35-.68 9.96-19.51-1.35.69-9.96zM475.49 363.09l7.73-19.88 11.46 4.46-7.72 19.87-11.47-4.45zM511.65 357.83l-5.59 16.27-15.42-5.3 5.59-16.27 15.42 5.3zM571.46 674.68l-20.9-41.64 23.48-11.78 2.81 5.62 5.14-2.2-1.75-.96 6-10.89 20.45 11.28-6 10.87-9.28-5.12-10.3 5.46 13.83 27.57-23.48 11.78zM586.5 468v16.03h-9.67l-.08 8.94-36.95-.35.28-29.76 36.95.35-.05 4.78h9.53zM645.4 88.64l-11 13.32-12.31-10.18 20.44-24.75 13 10.74-2.35 2.18 16.95 7.72-4.84 10.32-19.9-9.34zM531.72 403.79l-3 17.74-14.42-2.43 2.58-15.27-17.91-3.02 2.4-14.27 34.39 5.81-1.99 11.78-2.06-.35zM584.19 236.41l2.11-13.88 31.64 4.8-2.11 13.88-31.64-4.8z"></path>
                        <path d="M655.99 671.87l-12.08-11.44 8.09-8.55 1.86 1.77 10.22 9.68-8.1 8.55zM606.48 426.97l7.75-20.11-11.2-4.02-16.66-.29-.57 8.05 9.19 1.14-.87 5.46 4.6 1.14-1.72 5.74 9.48 2.88zM589.08 426.56l-3.22 8.58-2.12 5.63 16.8 6.3 5.34-14.21-16.81-6.3zM587.85 502.24l-22.58 1.9 1.36 16.09 11.07-.93.34 3.98 11.51-.97-1.7-20.06zM577.9 527.88l1.03 9.36 10.25-1.13-1.03-9.36-10.25 1.13zM630.99 472.24l-6.98 16.42 9.89 4.21 1.72-4.06 8.44 3.59 3.51-8.26-9.44-4.02 1.74-4.1-8.88-3.78zM577.96 571.62l10.6-19.3-26.44-14.52-10.6 19.31 26.44 14.5zM549.35 531.12l-6.53 13.13 9.52 4.73 6.53-13.11-9.52-4.74zM533.39 549.11l-8.07 14.67 10.01 5.51 8.08-14.66-10.02-5.52zM510.15 583.48l14.39-18.19 16.42 12.99-2.84 3.63-6.24 7.84-2.66-2.1-5.31 6.72-13.76-10.89zM538.97 595.41l6.24-7.84-7.09-5.66-6.24 7.84 7.09 5.66zM595.98 676.36l4.19-4.46 6.69 6.3-4.19 4.46-6.69-6.3zM609.4 680.51l7.17-5.74 11.58 14.43-7.17 5.74-11.58-14.43zM425.95 635.93l8.03-14.14 9.74 5.53 3.56-6.26 10.32 5.87-3.52 6.2 1.63.93-8.05 14.18-21.7-12.32zM445.9 608.16l7.56-13.29 15 8.52-7.56 13.29-15-8.52zM454.86 578.41l8.42-11.9 17.37 12.28-8.42 11.9-17.37-12.28zM544.38 503.64l1.49 16.55 13.6-1.22-1.49-16.55-13.6 1.22zM509.36 466.61l14.23 2.28-1.67 10.39-8.26-1.33-5.97-.96 1.67-10.37zM529.49 319.95l7.31-12.04-16.53-10.03-5.07 8.34-2.24 3.7 4.35 2.64 12.17 7.38zM582.2 273.77l1.43 11.42 12.27-1.6-1.45-11.36-12.24 1.54zM634.44 269.85l-2.38 15.06 9.8 1.54 1.08-6.9 1.3-8.16-9.8-1.54zM660.75 272.52l-1.88 12.75 7.16 1.06-.76 5.16-.85 6.22 10.1-4.32 2.76-18.42-16.53-2.43zM688.7 279.5l-3.27 13.06-.5 2.09 6.89 1.65 22.08 5.45 1.19-4.85 2.13-8.59.39-1.57-28.91-7.23zM723.72 286.87l.07 1.13.54 9.29 19.34-1.14-.62-10.42-19.33 1.14z"></path>
                        <path d="M717.23 288.31l6.56-.31.54 9.29-9.24-.39 2.13-8.59zM685.43 292.56l-3.63-.79-1.74 8 10.5 2.28 1.25-5.74-6.89-1.65.5-2.09zM651.27 290.4l-.48 6.26 13.63 1.04.85-6.22-14-1.08zM644.24 271.4l12.08 1.91-1.29 8.16-12.09-1.91 1.3-8.16zM758.13 281.16l.64 13.42 18.38-.86-.63-13.43-18.39.88zM786.61 279.21l-1.95 18.29 15.44 1.65 1.95-18.29-15.44-1.65zM832.74 308.06l1.45-12.45 9.36 1.1 1.12-9.57-19.71-2.29 1.7-4.6 7.06 2.6 3.46-9.4-18.96-6.98-4.05 10.99-2 17.1 5.71.67-1.28 10.96 16.14 1.88zM491.86 478.92l1.1 16.66 17.85-1.18-1.09-16.64-17.86 1.17zM446.87 521.27l3.47-21.75 23.47 3.75-.88 5.46-5.67-.9-2.6 16.27-17.79-2.84zM380.19 487.02l6-19.01 18.83 5.95-6 19.01-18.83-5.95z"></path>
                        <path d="M399.52 490.96l15.04 4.87 1.58-4.88 3.96 1.28 3.63-11.19-6.2-2 1.17-3.64-12.81-4.16-.89 2.74-5.5 16.99zM414.49 513.68l-5.08 19.04 4.57 1.21 5.05-19.08-4.54-1.17z"></path>
                        <path d="M419.03 514.85l15.52 4.1-5.54 20.94-15.57-3.94.53-2.03 5.05-19.08z"></path>
                        <path d="M413.45 535.95l-2.3-.56-1.39 5.74-3.2 13.2 23.22 5.63 4.56-18.79-5.32-1.29-15.57-3.94z"></path>
                        <path d="M407.04 540.5l-1.14 4.85-2.8 12.58 2.64.58.81-4.19 3.2-13.2-2.71-.64zM398.46 515.61l-3.44 12.1 8.85 2.52 1.63.46 3.44-12.1-10.48-2.98z"></path>
                        <path d="M395.02 527.71l-3.79 14.02 9.24 2.28 1.26-5.09 2.14-8.69-8.85-2.52z"></path>
                        <path d="M401.72 538.92l5.32 1.59-1.14 4.85-5.44-1.35 1.26-5.09zM377.25 524.72l-2.17 26.59 16.52 1.35.62-7.62-6.83-.57 1.55-18.95-9.68-.79zM353.35 561.09l12.11.82-1.37 20.3-12.36-.83.49-7.3-3.17-.22.38-5.69 3.42.22.49-7.3zM281.64 572.91l8.72-2.82 1.17 3.63 6.93-2.24-1-3.1 6.47-2.1-5.37-16.63-22.14 7.15 5.2 16.12zM319.98 545.19l5.64 17.95 10.65-3.35-1.9-6.08 1.42-.44 1.73 5.51 5.97-1.88-5.34-16.99-5.47 1.71 1.28 4.05-2.38.75-1.4-4.42-10.2 3.2zM304.42 580.48l.83-9.57 7.43.65-.83 9.55-7.43-.64zM306.05 555.84l-.66 12.53 7.99.42.65-12.53-7.98-.42zM355.69 532.99l-7.14 2.35 1.06 3.23-5.33 1.75 3.1 9.43 12.47-4.12-4.17-12.64zM338.34 497.9l4.72 16.95 10.7-2.98 1.15 4.13 22.04-6.13-3.29-11.79-8.1 2.25-1.9-6.83-15.73 4.37-.68-2.45-8.9 2.48zM340.18 513.04l-3.18-9.71-9.13 2.99 3.17 9.71 9.14-2.99zM307.91 510.63l2.57 12.38 18.49-3.84-2.48-12.32-14.2 2.67-4.39 1.11z"></path>
                        <path d="M310.66 490l1.64 19.52 14.2-2.67-2.38-18.58-13.46 1.72zM252.2 519.57l-.32 18.99 9.38.15.04-2.29 5.75.1.14-8.37 4.05.07.14-8.33-19.17-.32zM271.87 535.87l16.88-5.45 2.39 7.41-16.87 5.45-2.4-7.41zM286.77 500.61l-.53 22.61 9.57.22.53-22.61-9.57-.22zM322.54 569.76l-1.76 14.25 17.55 2.18 1.77-14.25-17.56-2.18zM345.24 604.37l2.83-6.03 12.36 5.81-2.84 6.03-12.35-5.81zM331.56 649.17l-22.81-.96 1.31-31.34 22.82.96-.49 15.68 22.11 1.18-2.52 47.61-22.11-1.17 1.69-31.97zM492.43 843.62l10.03-6.74 4.77 7.11-9.95 6.67-4.86-7.04zM479.42 848.6l11.69-6.9-7.95-11.51-10.78 6.28 7.05 12.12zM394.47 622.11l4.7-10.96-17.9-7.68-4.18 9.78-.51 1.2 17.9 7.66z"></path>
                        <path d="M381.27 603.48l-4.12-1.59-4.56 9.64 4.49 1.72 4.18-9.78zM383.88 583.75l-4.1 11.54 22.2 7.9 4.1-11.54-22.2-7.9zM413.73 588l1.27-3.98 1.87-.38 1.62-.88.62-1.75-.25-1.36-1.25-1 2.19-6.94-17.22-5.44.91-2.89-4.83-1.53.66-2.07-23.61-7.48-3.85 12.13 3.69 1.18-2.3 7.24 21.14 6.72-.66 2.07 19.98 6.35zM423.49 638.61l3.5-10.14-11.77-4.07-3.5 10.14 11.77 4.07zM355.92 441.8l-.1 1.99-1.1 26.48 15.71.65 1.18-28.45-14.05-.58-1.65-.08z"></path>
                        <path d="M347.39 431.96l-1.43 10.51 9.85 1.32.1-1.99 1.65.08.61-4.42.54-3.96-11.32-1.54zM211.62 410.03l.72-22.79-31.4-.97-.72 22.78 31.4.99zM36.92 677.41l27.66-64.04 13.94 6.05 4.33 1.85-16.44 38.14-11.19 25.92-18.31-7.91zM82.86 621.26l6.29 2.74 4.71 2-16.42 38.14-11.02-4.74 16.44-38.14z"></path>
                        <path d="M86.25 601.38l-7.73 18.03 4.33 1.85 6.29 2.74 3.05-7.04 2.94 1.28 5.69-13.1-3.92-1.7-.92 2.11-6.64-2.98-3.09-1.21z"></path>
                        <path d="M73.74 586.22l-3.49 8.82 16 6.34 3.09 1.21 3.5-8.8-19.1-7.56zM110.96 706.37l-2.58 3.91-4.81 3.64-5.71 1.92-6.46-.07-6.05-2.25-4.92-4.17-3.22-5.59-1.13-6.37 1.4-5.2 6.26 2.96 1.9-3.2 2.84-2.41 3.48-1.35 4.12-9.52 1.17.26 2.68-6.3-9.98-3.95 32.45-82 7.31 2.89 1.1-2.78 9.41 3.73-33.55 84.76-2.48-1.18-2.5 5.66 5.41 3.43 3.86 4.64 27.72.86-10.07 24.92-17.64-7.26zM76.84 740.85l1.81-22.3-37.28-3.03-.75 9.14 9.7.78-1.02 12.51 12.54 1.02.94-11.58 4.28.35-1 12.26 10.77.86zM116.39 526.47l.87 21.9 4.09-.17.07 1.89 7.69-.31-.1-2.38 3.24-.13-.2-4.76 3.25-.14-.31-7.86-2.82.11-.35-8.79-15.44.61zM171 503.93l-.16 23.94 4.99-.1 4.31-.01.23-23.72-9.37-.11zM123.31 493l-.64 21.59 20.59.63.65-21.59-10.26-.31-10.34-.32z"></path>
                        <path d="M133.65 493.32l.15-5.23 10.27.29-.16 5.24-10.26-.31zM163.48 472.66l15.97.78-1.38 28.39-15.97-.76 1.38-28.41zM244.09 549.66l.52-16-10.16-.33.14-4.41 4.14.14.64-19.91-14.23-.46-.62 19.01 4.45.14-.19 5.77-2.84-.1-.5 15.56 18.65.6zM243.47 496.21l-.95 21.51 3.34.15 3.2.13.11-2.96.82-18.54-6.52-.29z"></path>
                        <path d="M249.98 496.51l6.48.28-.88 18.56-4.46-.21-1.97-.1.82-18.54zM303.71 482l-.78 7.48 2.46.26 3.15.33.79-7.49-5.62-.58zM229.83 458.64l-.84 23.62 11.87.42.84-23.62-11.87-.42zM260.31 469.35l-1.58 13.85 20 2.29 1.58-13.86-20-2.28zM284.91 472.94l-.92 13.52 4.53.32-.36 5.31 7.08.49 1.02-14.74-.83-.06.14-2.09-4.32-.31.14-2-6.48-.44zM432.25 471.27l5.42-11.75 15.96 7.36-5.42 11.75-15.96-7.36zM398.24 413.06l-7.18 16.23 27.57 12.19 7.18-16.23-27.57-12.19zM433.59 408.25l-7.43 14.1 18.07 9.51 7.42-14.09-18.06-9.52zM441.24 443.9l4.06-9.4 8.4 3.63 4.11-9.51 11.65 5.03-7.11 16.45-6.93-2.99-1.06 2.45-13.11-5.66zM455.63 373.13l-5.66 15.43L485 401.39l5.66-15.43-35.03-12.83zM447.6 363.42l-13.1-4.7-4.59 12.31-1.89 5.77 13.09 4.7 6.49-18.08z"></path>
                        <path d="M429.92 371.03l-11.87-3.88-3.89 12.07 11.61 3.91 2.25-6.33 1.89-5.77z"></path>
                        <path d="M414.16 379.22l-2.4 7.11 1.54.58 10.08 3.32 2.39-7.11-11.61-3.91z"></path>
                        <path d="M413.31 386.91l-5.35 16.23 13.45 4.44 5.35-16.23-3.36-1.11-10.08-3.32zM436.82 394.81l-4.51 8.76 43.51 22.39 4.5-8.76-43.5-22.39zM468.54 464.26l-1.22 7.76 15.5 2.43 1.22-7.77-15.5-2.42zM467.32 472.02l-6.08-2.07-2.18 6.56 6.14 2.03 2.12-6.52zM513.66 477.94l-1 11 8.25 1.24 1.01-10.9-8.26-1.33zM27.5 496.74l-6.9 15.36 1.58.72-2.19 6.95 10.86 1.72 8.13-19.02-11.48-5.74zM46.72 480.88l-1.33 11.89 9.14 1.03 1.36-12.47-9.17-.44zM49.86 450.3l-6.78 11.3-.64 11.64-4.97-.28-.41 7.38 9.67.53 9.17.44 8.21.32.57-14.35 3.58-5.97-18.4-11.03zM53.22 496.94l.47 12.22 7.67-.29-.47-12.22-7.67.29zM53.8 415.73l-1.2 22.71 18.3.97 1.21-22.71-18.31-.97zM83.24 422.81l1.04 26.24 21.51-.86-1.04-26.22-21.51.85zM74.63 423.28l-.69 7.11 6.54.64.69-7.11-6.54-.64zM145.09 479.21l-.32 8.47 4.1.15 4.04.15.33-8.47-8.15-.31zM-17.59 498.47l14.7-62.34 13.21 3.11-8.6 36.5 2.54.6-6.09 25.84-15.75-3.71zM22.71 424.88l-4.82 11.74 6.78 2.78 4.83-11.72-6.79-2.79zM8.21 403.93l-3.29 8.59 20.24 7.76 3.3-8.59-20.25-7.76zM601.52 140.89l-1.07 6.65 7.13 1.15 1.07-6.65-7.13-1.15zM418.24 178.35l10.06-8.94 13.05 14.67-10.07 8.94-13.04-14.67zM392.6 150.1l4.9-4.38 1.51 1.68 3.24-2.89 13.93 15.62-.93.85-6.36 5.58-.9.81-15.4-17.26z"></path>
                        <path d="M408.9 166.55l3.07 3.52 6.37-5.58-3.08-3.52-6.36 5.58zM234.26 380.11l-1.92 27.52 12 .83 1.91-27.52-11.99-.83zM259.88 382.12l-2.81 15.64 20.95 3.78.48-2.68 1.89-10.22.48-2.74-21-3.78z"></path>
                        <path d="M280.39 388.65l7.02 1.31-1.91 10.22-7-1.31 1.89-10.22zM254.89 412.59l-.47 2.2-1.44 6.54-1.31 6.16 19.57 4.2 3.2-14.91-19.55-4.19z"></path>
                        <path d="M247.78 413.27l-1.48 6.52 6.69 1.53 1.44-6.54-6.65-1.52zM325.38 470.3l-1.99 6.47 8.3 2.54 1.99-6.47-8.3-2.54zM283.27 428.51l-3.74 16.26 18.61 4.27 4.6-20.04-9.82-2.27-.88 3.8-8.78-2.02zM333.76 424.3l-3.26 15.49 9.17 1.93 3.26-15.49-9.17-1.93zM353.66 401.86l-4.5 18.59 23.62 5.73 4.5-18.61-23.62-5.71zM328.51 394.93l-2.38 11.47 13.51 2.79 2.38-11.47-13.51-2.79zM291.13 387.71l-2.86 14.92 14.6 2.79.46-2.38 3.99.76.84-3.73-4.18-1.02 1.65-8.59-14.48-2.77z"></path>
                        <path d="M308.15 400.09l-.84 3.73-1.56 7.24 11.86 2.56 2.37-10.93-5.58-1.21-6.24-1.39z"></path>
                        <path d="M315.71 393.86l-1.31 7.62 5.58 1.21 1.46-7.84-5.73-.99zM259.37 350.04l-3.49 17.45 23.8 4.76 3.49-17.45-23.8-4.76zM304.05 365.94l-2.54 12.71 19.16 3.84 2.54-12.71-19.15-3.84zM358.69 376.91l-3.23 13.71 19.65 4.64 3.23-13.72-19.65-4.63zM337.39 364.03l-1.48 7.05 2.83.6 12.51 2.5 2.62.56 1.46-6.91-9.9-2.1-8.04-1.7z"></path>
                        <path d="M338.74 371.68l-1.95 10.5 12.54 2.32 1.92-10.32-12.51-2.5zM307.86 336.32l-3.19 23.29 11.53 1.59.64-4.76 3.88.53.67-4.87-3.49-.47.52-3.81 4.11.56.75-5.51-3.9-.53.6-4.37-12.13-1.65zM305.87 330.4l6.2-15.32 27.96 11.3-6.21 15.32-27.95-11.3zM347.26 347.56l5.46-13.65 29.23 11.68-5.46 13.67-29.23-11.69zM391.78 347.32l-8.27 21.55 18.42 7.06 8.28-21.54-18.43-7.08zM306.14 269.44l-4.52 15.69 21.57 6.23 4.51-15.64-2.2-.63-8.85-2.61-10.5-3.03zM274.93 223.9l-1.71 9.89 8.24 1.42 1.71-9.89-8.24-1.42zM394.36 207.72l-11.14 40.51 10.67 2.52 36.72 10.05 3.3-13.07.62-2.91-12.34-3.39 2.76-10.03-12.72-3.49 3.91-14.21-21.78-5.98z"></path>
                        <path d="M393.89 250.75l-7.65 28.96-1.56 5.99 4.43.88-6.96 25.45 22.89 6.27 3.33-12.18-9.55-2.63 6.67-24.38 18.11 4.95 1.91-6.99-16.83-4.6 1.32-4.84 17.44 4.77 3.18-11.6-36.72-10.05z"></path>
                        <path d="M376.98 277.31l9.26 2.41-1.56 5.99-9.26-2.41 1.56-5.99zM476.99 296.12l10.63-14.49 12.88 9.44-4.07 5.56 2.33 1.71-6.54 8.93L477 296.12zM508.27 304.46l-4.18 16.34 10.5 2.7 1.15-4.46 1.59-6.47-4.35-2.64 2.24-3.7-6.93-1.77z"></path>
                        <path d="M514.58 323.5l-1.39 4.56 6.44 1.95 2.71-8.98-6.62-1.99-1.15 4.46zM547.05 426.87l3.62-25.18 19.73 2.84-2.8 19.45-.74 5.13-3.26-.47-.41 2.79-11.72-1.68.32-2.2-4.74-.68zM551.28 450.15l5.34-16.42 5.73 1.86 16.95 5.51-5.33 16.42-22.7-7.37z"></path>
                        <path d="M563.19 431.43l-.84 4.16 16.95 5.51 1-7.38 5.56 1.43 3.22-8.58-2.17-1.61 1.58-5.74-12.93-1.45-.43 3.88-5.74-.72-.58 3.31-1.21-.25-.74 5.13-3.26-.47-.41 2.79zM343.08 865.26l4.65-5.63-4.68-3.87 8.45-10.23 8.7-10.54 3.49 2.88 5.01-6.08 2.88 2.38 4.66 3.85 6.01 4.96-26.82 32.48-12.35-10.21zM555.75 615.87l3.36 6.69 14.45-7.24.83 1.64 11.04-5.53-3.53-7.05-10.09 5.08-.65-1.29-15.39 7.72zM561.88 154.98l-.44 1.59-11.48-1.72-1.44 10.05 11.05 1.29-.12 1.52 17.34 3.67 2.76-13.02-17.67-3.38zM570.78 130.16l-2.95 18.73 9.12 1.43.25-1.54 4.9.78.99-6.26 1.3.21 1.27-7.98-5.91-.93.47-2.95-9.43-1.49zM567.4 126.93l6-28.69 16.92 3.55-3.79 18.16-5.59-1.17-2.2 10.53-11.33-2.38zM543.01 148.19l2.53-18.59 10.69 1.63-2.5 18.42-10.72-1.46z"></path>
                        <path d="M538.66 119.69l-1.35 8.62 8.23 1.29 10.69 1.63 7.67 1.2 1.34-8.57-26.58-4.17zM642.53 67.03l20.59-24.64 12.53 10.6-3.68 4.34-5.21-4.41-4.53 5.35 5.71 4.84-12.41 14.66-13-10.74zM678.8 56.54l2.86-3.98 1.56-2.16 6.36 4.58-4.42 6.13-6.36-4.58zM587.31 731.77l10.38-5.52 16.24 30.6-10.38 5.51-16.24-30.59zM616.97 755.79l-4.79 13.36 13.06 4.69 4.79-13.36-13.06-4.69zM626.54 710.79l1.58-6.34-9.32-2.34-1.59 6.34 9.33 2.34zM600.1 710.95l.65 4.81 14.48-1.96-1.39-10.28-4.5.61.75 5.48-9.99 1.33zM137.44 532.45l-.05 8.69 2.28.01 2.6.01.05-8.69-4.88-.03zM610.75 102.11l-3.42 14.32 16.02 3.63.07-1.14 3.05-13.24-15.71-3.57zM371.58 834.17l2.89-2.98-12.25-18.26 13.24-7.74 8 13 12.01-14.25-7.25-12.25 12.25-6.99 23.26 36.75-34.51 19.24-5.25-11.25-7.73 8.58-4.66-3.85zM156.92 528.31l.34 17.85 2.97-.06-.1.58.08.58.28.51.43.4.54.24.59.04.56-.14.48-.32.32-.39.23-.6.01-.57 6.22-.03v.14l.07.49.27.47.42.38.5.22.55.07.55-.13.51-.32.38-.47.21-.57-.01-.61 2.94-.06-.35-18.17-6.25.13-6.16.19-6.56.13zM603.08 656.63l-5.68 8.41 4.95 3.35 3.91-5.78 1.77-2.63-4.95-3.35z"></path>
                        <path d="M606.25 662.61l10.31 12.15-7.17 5.74-2.53-2.31-6.69-6.3 2.17-3.5 3.91-5.78zM487.91 679.15l5.11-2.89 1.33 2.38-5.43 2.95-1.01-2.43zM476.62 669l-5.01-12.89 3.35-1.31 5.01 12.9-3.35 1.29zM429.18 588.92l-8.54 20.37 13.54 5.67 8.54-20.38-13.54-5.66zM580.77 748.58l1.14-2.89 1.19-.56 1.97-.92 2.99 1.31 1.35 3.1-1.15 2.89-1.25.61-1.51.75-3.43-1.25-1.3-3.05zM500.69 54.11l-1.5-15.25 3.81-.35 39.69-3.66 1.25 15.25-43.25 4z"></path>
                        <path d="M498.94.1L503 38.51l20.69-1.91-3-38.51-21.75 2zM441.34 184.08l2.13-2.25 1.75 1.75 28.74-21.75-13.5-2-2.75 2.75-17.5-1.75-11.92 8.58 13.05 14.67z"></path>
                        <path d="M476.72 142.58l-2.75 19.26-16-2.75 1.75-18.49 17 1.99zM444.64 210.94l13.06 15.07 12.51-11.54-12.62-14.25-12.95 10.72zM486.27 62.13l1.09 15.73 4.25-.22.43 15.23-13.38.76-1.42-11.64H473l-1.09-18.61 14.36-1.25zM470.32-17.58l-.15 19.12 13.38.11.15-19.12-13.38-.11zM471.94 2.54l13.53-.06.07 20.86-13.53.06-.07-20.86zM472.87 24.22l13.33-.1.12 18.27-13.33.08-.12-18.26zM636.87 121.76l-2.84 13.53-13.49-2.84 2.87-13.53 13.46 2.84zM589.53 332.68l-14.75-3-12.75 7.24-4 18.51 17.25 2.5 1.75-10.01 8.74 1 3.76-16.24zM504.01 245.91l-7.71 6.9 9.91 11.07 7.71-6.91-9.91-11.05zM692.76 134.58l-2.14 15.44 21.28 2.95 2.13-15.44-21.27-2.95zM725.69 164.56l-3.52 17.63 18.73 3.74 3.52-17.63-18.73-3.74zM658.1 240.05l-3.06 14.6 28.03 5.87 3.06-14.6-28.03-5.87zM731.99 254.39l24.05.11-.07 14.66-24.05-.11.07-14.66zM758.31 255.11l-.39 14.64 22.84.63.4-14.64-22.85-.63zM581.34 366.49l16.56 2.07-2.63 20.91-16.55-2.07 2.62-20.91z"></path>
                        <path d="M578.6 350.11l-1.85 12.47 31.39 4.64 1.85-12.47-31.39-4.64zM601.21 382.3l7.21-12.28 15.02 8.83-7.21 12.26-15.02-8.82zM562.44 362.6l11.69 1.61-1.8 12.99-11.68-1.61 1.79-12.99zM146.26 282.73l13.48 3.64-5.46 20.22-13.48-3.64 5.46-20.22zM694.47 234.8l1.23 14.31 19.97-1.72-1.23-14.29-19.97 1.71zM822.21 231.49l17.45 3.43-3.91 20.79-17.49-3.3 3.95-20.93z"></path>
                        <path d="M833.35 225.2l6.31 9.72 5.75-3.74 4.24 6.54 4.56-2.98 3.04 4.69 11.32-7.36-5.65-8.69 5.99-3.89-2.38-3.66-5.56-8.57-27.63 17.94zM782.14 231.38l2.88 16.31 24.51-4.32-2.88-16.31-24.51 4.32zM760 246.2l6.75.54 12.95-1.64v-8.05l-4.68.11 1.2-13.17-9.47-.11v7.95l-6.53.54-.21 13.82zM708.72 450.11l10.9.06-.07 16.07 19.07.08.07-15.42 12.14.06-.16 33.37-42.12-.18.16-34.04zM692.57 379.13l-1.27 9.86 24.65 3.17 1.27-9.86-24.65-3.17zM271.6 796.75l-.33 11.87 45.2 4.12 5.44 2.64 10.55-21.27-19.63-9.08-6.6 15.02-34.64-3.3z"></path>
                        <path d="M291.44 744.96l-8.47 46.16 16.04 2.95 3.81-20.8-6.15-1.14 4.65-25.35-9.88-1.82zM363.08 749.36l13.02 9.77-13.83 18.42 4.48 3.36-10.18 13.57-9.31-6.98-.89 1.2-9.33-7.01 3.92-5.21-6.91-5.19-3.35 4.45-7.94-5.96 1.96-2.6 3.38 2.54 6.29-8.38 12.59 9.44 16.09-21.43zM267.37 825.04l-3.52 38.38 10.63.99 2.48-26.95 24.64 2.27 1.04-11.44-35.28-3.24zM241.3 857.32l20.77 1.04-1.4 27.63-20.76-1.06 1.39-27.61zM209.99 275.79l21.25 6.34-4.85 16.26-20.34-6.05 1.39-4.64-17.47-5.2 6.78-22.75 16.54 4.94-3.31 11.11zM442.54 134.65l12.06.44-.71 19.37-12.06-.43.71-19.38zM462.06 114.49l15.11-2.34 2.52 16.27-10.17 1.57 1.18 7.66-12.01 1.85-1.45-9.41 7.07-1.1-2.25-14.5zM434.65 119.78l8.24-1.22 1.43 9.62-8.23 1.22-1.44-9.62zM728.64 141.7l-2.88 15.89 22.43 4.06 2.87-15.89-22.42-4.06zM297.36 897.65l-8.52 10.62 22.75 18.26 8.52-10.62-22.75-18.26zM25.73 956.01l2.59 18.58 10.6-1.47-.96-6.81 8.96-1.25-1.64-11.78-19.55 2.74zM-4.37 955.58l-8.58 20.59 12.85 5.35 8.58-20.59-12.85-5.35zM6.06 947.83l18.86-1.85.79 8.02-18.86 1.86-.79-8.04zM20.92 998.6l21.76-2.71 1.88 15.14-21.76 2.71-1.88-15.14zM37.47 805.88l16.08 1.25-1.22 15.75-16.08-1.25 1.22-15.75zM433.67 762.85l8.74 13.9-20.09 12.63-8.75-13.9 20.1-12.63zM272.63 915.19l11.41 6.92-4.37 7.22 24.9 15.1-5.97 9.84-36.31-22.02 10.35-17.06zM49.01 759.49l19.15-1.31-.21 3.05 47 .43-.21-2.39 13.27-.22.22 1.75 4.57.21-1.09 17.2-52.01-2.39-22.64 5.44-.87-5.01-6.31.43-.88-17.19zM33.58 846.46l15.82.93-1.07 18.17-15.82-.93 1.07-18.17zM731.39 14.68l24.08 10.57-7.42 16.92-24.08-10.57 7.42-16.92zM6.13 785.26l12.38.03-.04 14.93-12.37-.03.03-14.93zM36.67 830.91l-.29 6.73 13.13.58.3-6.73-13.14-.58zM312.05 941.88l13.79 9.5-27.47 39.83-13.79-9.5 27.47-39.84zM423.02 37.16l16.1 9.07-8.68 15.39-16.1-9.07 8.68-15.39zM399.49 3.95l14.89-13.36 10.91 12.17-14.89 13.36-10.91-12.17zM67.07 253.1l-5.88 18.98 15.32 4.74 5.88-18.98-15.32-4.74zM276.44 3.88l12.23-13.86L301.98 2.8l-11.95 12.49-13.59-11.4zM176.38 954.31l-1.76 14.22-22.81-2.09 1.58-11.99.32-2.5 22.68 2.35z"></path>
                        <path d="M132.32 951.91l-.27 1.54-1.99 11.55 21.62 2.84 1.7-13.38-21.06-2.56z"></path>
                        <path d="M132.05 953.45l-28.17-4.24-1.01 9.2 3.8.31-.6 5.91 23.43 2.5 2.54-13.68zM183.23 995.54l-5.97 11.15-19.02-8.97-5.15 12.5-15.22-4.89 12.23-25 11.95 7.06 21.2 8.15zM115.07 15.19l10.32-18.2 18.74 11.14-12.22 17.92-16.84-10.86zM86-2.75l11.41-19.02 18.74 11.14-11.14 17.4L86-2.74zM296.22 61.13L286 68.89l12.21 14.68 9.24-7.76-11.22-14.68zM256.48 46.79l-9.4 8.4-10.56-11.37 9.73-8.08 10.23 11.06zM347.8 39.53l8.74-12.7L320.91.44l-14.84 19.8 6.43 4.78 9.73-11.72 11.04 8.25-3.46 5.45 17.98 12.53zM426.97 30.97l8.74-13.36 15.17 9.57-10.56 13.2-13.36-9.4zM385.9 2.92l7.42-8.41-12.86-9.89-7.26 9.57 12.7 8.73zM95.54 281.48l3.26-13.31 12.23 2.99-3.26 13.31-12.23-2.99zM73.37 310.65l3.65-14.61L92.84 300l-3.64 14.6-15.83-3.95zM121.88 212.56l4.28-13.91-28.47-8.76-4.27 13.92 28.47 8.75zM114.51 170.15l-3.8 12.89 13.3 3.92 3.81-12.89-13.31-3.92zM66.88 243.99l2.68-7.68 8.33 2.92-2.68 7.68-8.33-2.92zM235.57 111.34l.54 20.93-32.87-.82 1.63-19.29 30.7-.82zM181.41 103.78l.1-9 25.23.29-.1 9-25.23-.29zM138.04 144.22l-25.54-6.24-4.35 11.14 25 8.15 4.89-13.04zM801.41 171.72l16.45-1.11.89 13.43-16.45 1.1-.89-13.42zM831.12 189.38l20.7-4.98 1.54 6.45-20.7 4.96-1.54-6.44z"></path>
                        <path d="M831.12 189.38l20.7-4.98-1.62-4.73-20.08 4.26 1 5.45zM827.76 174.7l19.99.63.19-5.84-20-.63-.18 5.84zM829.18 158.85l14.2.75-.29 5.55-14.2-.75.29-5.55zM817.37 155.72l20.95 1.68.64-7.95-20.95-1.68-.64 7.95zM542.77 4.37l15.52 12.56 7.67-9.5-15.53-12.54-7.66 9.48zM529.13-6.23l12.17 9.32 4.16-5.44-12.16-9.32-4.17 5.44zM819.86 136.35l13.49 1.52-.73 6.52-13.5-1.5.74-6.54zM819.06 143.94l13.19 1.32.12 2.93-13.54-1.17.23-3.09zM821.53 122.64l18.04 2.35-1.13 8.7-18.04-2.34 1.13-8.72zM819.81 132.19l12.96 1.6-.41 3.32-12.96-1.6.41-3.32zM866.54 215.83l2.38 3.66 4.6 7.02 4.23-2.89 2.87 4.42 11.28-7.2-9.69-14.93-15.67 9.93zM817.16 101.25l14.05 3 4.06-18.97-14.05-3.02-4.06 18.98zM821.94 103.92l15.5 1.35-.44 5.02-15.5-1.35.44-5.02zM822.65 111.02l13.26.97-.35 4.89-13.27-.97.36-4.89zM821.71 116.66l13.02 1.43-.56 5.13-13.03-1.43.57-5.13zM665.66 134.2L664 145.25l8.67 2.39 2.76-10.14-9.77-3.31zM783.92 144.81l8.87 2.39-3.31 12.28-8.87-2.38 3.31-12.29zM-18.59 201.49l23.61 6.38-6.07 22.44-23.61-6.38 6.07-22.44zM-21.13 142.99l24.67 5.15-3.91 18.76-24.67-5.16 3.91-18.74zM12.32 166.35l19.83 4.21 2.97-14-19.83-4.21-2.97 14zM-2.82 828.8l-4.64 15.02 17.63 5.44.86-2.77 8.67 2.67.13-8.69-6.7-2.07 1.32-4.27-17.27-5.33zM32.88 114.96l25.51 2.43-1.68 17.65-25.51-2.42 1.68-17.66zM271.58 54.94l8.88 6.76-4.34 5.7-8.88-6.76 4.34-5.7zM67.65 80.15l14.95 3.98-5.15 19.33-14.95-3.98 5.15-19.33zM35.13 81.88l14.84 7.83-7.17 13.56-14.83-7.84 7.16-13.54z"></path>
                    </g>
                    <g fill="#FEFEC0" stroke="none" strokeLinejoin="round">
                        <path d="M651.57 802.37l2.77.68-1.31 4.09-3.97 2.92-4.73 2.41-3.9-.58 7.81-4.74 3.34-4.77zM816.99 405.57l3.79-7.98-3.38-.74-4.44 6.35 4.03 2.36z"></path>
                    </g>
                    <path
                        fill="#BCA9A9"
                        stroke="none"
                        strokeLinejoin="round"
                        d="M539.41 670.14l-3.79-6.33-10.22 5.73 3.91 7.05 10.1-6.45z"
                    ></path>
                </g>
                <g strokeLinejoin="round">
                    <use stroke="#B5D0D0" strokeWidth="2" xlinkHref="#1"></use>
                    <use
                        stroke="#000"
                        strokeDasharray="11.2,11.2"
                        strokeWidth="11.2"
                        xlinkHref="#2"
                    ></use>
                    <use
                        stroke="#000"
                        strokeDasharray="11.2,11.2"
                        strokeWidth="11.2"
                        xlinkHref="#3"
                    ></use>
                    <use stroke="#B5D0D0" strokeWidth="2" xlinkHref="#4"></use>
                    <use
                        stroke="#666"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        xlinkHref="#5"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="8"
                        xlinkHref="#2"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="8"
                        xlinkHref="#3"
                    ></use>
                    <use stroke="#CBCB8E" strokeWidth="7.15" xlinkHref="#6"></use>
                    <use stroke="#000" strokeWidth="4.9" xlinkHref="#7"></use>
                    <use stroke="#000" strokeWidth="2.1" xlinkHref="#8"></use>
                    <use stroke="#7F7F7F" strokeWidth="4.2" xlinkHref="#9"></use>
                    <use stroke="#7F7F7F" strokeWidth="5.6" xlinkHref="#10"></use>
                    <use stroke="#7F7F7F" strokeWidth="11.2" xlinkHref="#11"></use>
                    <use stroke="#7F7F7F" strokeWidth="11.2" xlinkHref="#12"></use>
                    <use stroke="#CAA36F" strokeWidth="9.9" xlinkHref="#13"></use>
                    <use stroke="gray" strokeWidth="3" xlinkHref="#14"></use>
                    <use stroke="#B5D0D0" strokeWidth="2" xlinkHref="#15"></use>
                    <use stroke="#FFF" strokeWidth="5.5" xlinkHref="#6"></use>
                    <use stroke="#000" xlinkHref="#16"></use>
                    <use
                        stroke="#666"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        xlinkHref="#17"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                        xlinkHref="#7"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeDasharray="4.5,1.5"
                        strokeLinecap="round"
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        xlinkHref="#8"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="3"
                        xlinkHref="#9"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="4"
                        xlinkHref="#10"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="8"
                        xlinkHref="#11"
                    ></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="8"
                        xlinkHref="#12"
                    ></use>
                    <use
                        stroke="#FDD6A4"
                        strokeLinecap="round"
                        strokeWidth="9"
                        xlinkHref="#13"
                    ></use>
                    <use
                        stroke="#F7D4D4"
                        strokeDasharray="12,4"
                        strokeWidth="4"
                        xlinkHref="#18"
                    ></use>
                    <use stroke="gray" strokeWidth="2" xlinkHref="#19"></use>
                    <use
                        stroke="#FFF"
                        strokeDasharray="12,12"
                        strokeWidth="2"
                        xlinkHref="#14"
                    ></use>
                    <use stroke="#7F7F7F" strokeWidth="11.2" xlinkHref="#20"></use>
                    <use
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth="8"
                        xlinkHref="#20"
                    ></use>
                </g>
                <g stroke="#000">
                    <g fill="#000" strokeLinejoin="round" strokeWidth="3">
                        <use
                            transform="rotate(151.07 -5.925 188.78)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -7.776 189.258)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -10.027 189.84)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -12.277 190.416)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -14.528 190.998)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -16.78 191.58)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -19.03 192.162)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -21.276 192.74)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -23.527 193.322)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -25.778 193.904)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(151.07 -28.028 194.48)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-122.42 415.948 184.348)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-122.42 414.81 183.724)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-114.34 497.403 186.856)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-114.34 496.164 186.055)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-114.34 493.91 184.605)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(177.66 219.8 364.314)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-74.55 697.393 60.412)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-74.55 695.142 57.454)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-164.28 157.459 71.853)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-164.28 156.061 71.659)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-6.42 1884.784 -3307.05)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-6.42 1883.12 -3336.387)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-6.42 1880.898 -3376.488)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                        <use
                            transform="rotate(-6.42 1878.675 -3416.59)"
                            xlinkHref="#symbol_shape_5"
                        ></use>
                    </g>
                    <g>
                        <use
                            width="12"
                            height="12"
                            transform="translate(83.46 334.79)"
                            xlinkHref="#symbol_icon_6"
                        ></use>
                        <use
                            width="12"
                            height="12"
                            transform="translate(666.69 606.66)"
                            xlinkHref="#symbol_icon_6"
                        ></use>
                        <use
                            width="12"
                            height="12"
                            transform="translate(305.43 689.18)"
                            xlinkHref="#symbol_icon_6"
                        ></use>
                        <use
                            width="12"
                            height="12"
                            transform="translate(331.65 192.07)"
                            xlinkHref="#symbol_icon_6"
                        ></use>
                    </g>
                </g>
                <g stroke="#000" fontFamily="Noto Sans">
                    <g fontSize="9">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_7"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_7"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_8"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_8"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_9"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_9"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_10"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_10"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_11"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_11"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_12"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_12"></use>
                    </g>
                    <g fontSize="9">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_13"
                        ></use>
                        <use fill="gray" stroke="none" xlinkHref="#symbol_text_13"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_14"
                        ></use>
                        <use fill="gray" stroke="none" xlinkHref="#symbol_text_14"></use>
                    </g>
                    <g fontSize="9.67">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_15"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_15"></use>
                    </g>
                    <g fontSize="9.67">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_16"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_16"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_17"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_17"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_18"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_18"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_19"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_19"></use>
                    </g>
                    <g fontSize="9.67">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_20"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_20"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_21"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_21"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_22"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_22"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_23"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_23"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_24"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_24"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_25"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_25"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_26"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_26"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_27"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_27"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_28"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_28"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_29"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_29"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_30"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_30"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_31"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_31"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_32"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_32"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_33"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_33"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_34"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_34"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_35"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_35"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_36"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_36"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_37"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_37"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_38"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_38"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_39"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_39"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_40"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_40"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_41"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_41"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_42"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_42"></use>
                    </g>
                    <g fontSize="9.67">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.42"
                            xlinkHref="#symbol_text_43"
                        ></use>
                        <use fill="#7F7F7F" stroke="none" xlinkHref="#symbol_text_43"></use>
                    </g>
                </g>
                <g stroke="#000" fontFamily="Noto Sans" fontWeight="bold">
                    <g fontSize="12">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="3"
                            xlinkHref="#symbol_text_44"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_44"></use>
                    </g>
                    <g fontSize="9">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_45"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_45"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_46"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_46"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_47"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_47"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="2.25"
                            xlinkHref="#symbol_text_48"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_48"></use>
                    </g>
                </g>
                <g>
                    <g
                        stroke="#B0B0B0"
                        strokeWidth="0.5"
                        fontFamily="Tahoma"
                        fontSize="12"
                        fontWeight="bold"
                    >
                        <path fill="none" d="M-.5 1122.57H999.62"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_49"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_49"></use>
                        <path fill="none" d="M-.5 929.46H999.62"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_50"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_50"></use>
                        <path fill="none" d="M-.5 736.34H999.62"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_51"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_51"></use>
                        <path fill="none" d="M-.5 543.22H999.62"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_52"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_52"></use>
                        <path fill="none" d="M-.5 350.1H999.62"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_53"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_53"></use>
                        <path fill="none" d="M-.5 156.97H999.62"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_54"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_54"></use>
                    </g>
                    <g
                        stroke="#B0B0B0"
                        strokeWidth="0.5"
                        fontFamily="Tahoma"
                        fontSize="12"
                        fontWeight="bold"
                    >
                        <path fill="none" d="M-79.11 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_55"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_55"></use>
                        <path fill="none" d="M50.34 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_56"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_56"></use>
                        <path fill="none" d="M179.79 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_57"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_57"></use>
                        <path fill="none" d="M309.25 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_58"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_58"></use>
                        <path fill="none" d="M438.7 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_59"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_59"></use>
                        <path fill="none" d="M568.16 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_60"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_60"></use>
                        <path fill="none" d="M697.61 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_61"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_61"></use>
                        <path fill="none" d="M827.06 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_62"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_62"></use>
                        <path fill="none" d="M956.52 999.25V-.5"></path>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#symbol_text_63"
                        ></use>
                        <use fill="#303030" stroke="none" xlinkHref="#symbol_text_63"></use>
                    </g>
                    <g stroke="#000" fontFamily="Tahoma" fontSize="12" fontWeight="bold">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="3"
                            xlinkHref="#symbol_text_64"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_64"></use>
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="3"
                            xlinkHref="#symbol_text_65"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_65"></use>
                    </g>
                    <path
                        fill="#000"
                        stroke="#000"
                        d="M6 971.75H32.010000000000005V978.75H6z"
                    ></path>
                    <path
                        fill="#FFF"
                        stroke="#000"
                        d="M31.01 971.75H57.02V978.75H31.01z"
                    ></path>
                    <path
                        fill="#000"
                        stroke="#000"
                        d="M56.02 971.75H82.03V978.75H56.02z"
                    ></path>
                    <path
                        fill="#FFF"
                        stroke="#000"
                        d="M81.03 971.75H107.04V978.75H81.03z"
                    ></path>
                    <path
                        fill="#000"
                        stroke="#000"
                        d="M106.04 971.75H132.05V978.75H106.04z"
                    ></path>
                    <g stroke="#000" fontFamily="Tahoma" fontSize="14" fontWeight="bold">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeOpacity="0.75"
                            strokeWidth="3"
                            xlinkHref="#symbol_text_66"
                        ></use>
                        <use stroke="none" xlinkHref="#symbol_text_66"></use>
                    </g>
                </g>
                <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M0 0H1000.12V999.75H0z"
                ></path>
            </svg>
            {
                model.map((item) => {
                    id++;
                    return (<MapPoint
                        key={id}
                        coordinate={
                            {
                                x: `${(item.x).toFixed(2)}%`,
                                y: `${(item.y).toFixed(2)}%`
                            }
                        }
                    />)
                })
            }
        </div>
    );
}

export default Map;