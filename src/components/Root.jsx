
import Header from "./Header";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Root = () => {

    // active listener when location is "/" to look for cursor at the bottom and scrolled at the bottom
    // if mouse is in bottom cca 5% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then if yes open secret page

    const navigate = useNavigate();
    const location = useLocation();
    const [cursorPosition, setCursorPosition] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // const handleCursor = (event) => {
    //     const mouseY = event.clientY;
    //     const windowHeight = window.innerHeight;

    //     if (mouseY >= windowHeight * .9) {
    //         setCursorPosition(true);
    //         console.log(cursorPosition);
    //     } else {
    //         setCursorPosition(false);
    //         console.log(cursorPosition);
    //     };
    // };

    // const handleScroll = () => {
    //     const scrolledFromTop = document.documentElement.scrollTop;
    //     const windowHeight = window.innerHeight;
    //     const totalHight = Math.max(
    //         document.body.scrollHeight,
    //         document.body.offsetHeight,
    //         document.documentElement.clientHeight,
    //         document.documentElement.scrollHeight,
    //         document.documentElement.offsetHeight
    //     );
    //     const scrolledNow = scrolledFromTop + windowHeight;
    //     const tolerance = 10;
        
    // };
    useEffect(() => {

        const handleMove = (event) => {
            const mouseY = event.clientY;
            const windowHeight = window.innerHeight;

            if (mouseY > windowHeight * .969) {
                // console.log(mouseAtBottom, "mouse is in bottom");
                setMouseAtBottom(true);
            } else {
                // console.log(mouseAtBottom ,"mouse above")
                setMouseAtBottom(false);
            };
        }

        const handleScroll = () => {
          const scrolledFromTop = document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const totalHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          );
          const scrolledNow = scrolledFromTop + windowHeight;
          const tolerance = 10;
    
          if (scrolledNow + tolerance >= totalHeight) {
            if (!scrolled) {
              window.addEventListener("mousemove", handleMove);
              setScrolled(true);
            }
          } else {
            setScrolled(false);
          }
        };
    
        const yourFunctionToBeFired = () => {
          // Your code here
          console.log('Scrolled to the bottom!');
        };
    
        if (location.pathname === "/")
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [location, scrolled]);


    // if (location.pathname === "/") {
    //     window.addEventListener("scroll", handleScroll);
    // } else if (location.pathname !== "/") {
    //     window.removeEventListener("scroll", handleScroll);
    // };
    



    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Root;