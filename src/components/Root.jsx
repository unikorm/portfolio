
import Header from "./Header";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Root = () => {

    // okey, i read documentation: useEffect I only need for when state changed
    // and event handlers i need to check scroll and mouse, that change state and that fire useEffect

    const navigate = useNavigate();
    const location = useLocation();
    const [cursorPosition, setCursorPosition] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleMove = (event) => {
        const mouseY = event.clientY;
        const windowHeight = window.innerHeight;

        if (mouseY > windowHeight * .969) {
            if (!cursorPosition && !scrolled) {
                setCursorPosition(true);
                setScrolled(true);
            };
        } else {
            setCursorPosition(false);
            setScrolled(false);
        };
    };

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
          };
        } else {
          window.removeEventListener("mousemove", handleMove);
        };
    };

    if (location.pathname === "/") {
        window.addEventListener("scroll", handleScroll);
    };
        

    useEffect(() => {  // useEffect only run when state change + plus check navigate idk why and location

        if (cursorPosition && scrolled && location.pathname === "/") {
            navigate("/secret", {push: true}); // idk what this really do, just i put it there to know something is fucked up
        };
    
        return () => {
          setCursorPosition(false);
          setScrolled(false);
        };
      }, [cursorPosition, location.pathname, navigate, scrolled]);



    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Root;