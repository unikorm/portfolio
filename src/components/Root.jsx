
import Header from "./Header";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Root = () => {

    // active listener when location is "/" to look for cursor at the bottom and scrolled at the bottom
    // if mouse is in bottom cca 5% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then if yes open secret page

    // const navigate = useNavigate();
    // const location = useLocation();
    // const [cursorPosition, setCursorPosition] = useState(false);
    // const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();
    const [cursorPosition, setCursorPosition] = useState(0);

    function checkBottomConditions(e) {
        const cursorPosition = e.clientY;
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
      
        if (cursorPosition >= viewportHeight - 0.05 * viewportHeight && scrollPosition >= documentHeight - viewportHeight) {
          return true;
        };
      
        return false;
    };

    const mouseMove = (e) => {
        setCursorPosition(e.clientY);
    };

    useEffect(() => {
        document.addEventListener("mousemove", mouseMove);
      }, []);
    
      const handleScroll = () => {
        if (checkBottomConditions()) {
          navigate("/secret");
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

   
      

    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Root;