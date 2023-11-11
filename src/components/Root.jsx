
import Header from "./Header";
import MainSecret from "./secret-stuff/Main_secret";

import { Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Root = () => {

    // if mouse is in bottom 10% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then active listener to know if there user scroll more
    // then if yes open secret page

    const [showSecretPage, setShowSecretPage] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    const location = useLocation();

    useEffect(() => {

        // trigger mouse (cursor) position
        const handleMousePosition = (event) => {
            const mouseY = event.clientY;  // is related to mouse events and provides information about the vertical position of the mouse pointer within the viewport
            const windowHeight = window.innerHeight; // this is height of user actual viewport

            if (mouseY > windowHeight * .9) {
                // console.log(showSecretPage, "mouse is in bottom");
                setShowSecretPage(true);
                // console.log(showSecretPage);
            } else {
                setShowSecretPage(false);
            };
        };

        // trigger if we are at the bottom of website
        const handleScrollToBottom = () => {
            const scrolledFromTop = document.documentElement.scrollTop - .5; // how much is scrolled from top of the site
            const windowHeight = window.innerHeight;
            const totalHight = document.documentElement.scrollHeight; // total height of the entire HTML document
            const scrolledNow = scrolledFromTop + windowHeight;

            if (totalHight === scrolledNow) {
                setIsBottom(true);
                // console.log("on the bottom", totalHight, scrolledFromTop, windowHeight, scrolledNow);
            } else {
                setIsBottom(false);
                // console.log("not at bottom", totalHight,";", scrolledFromTop, "+", windowHeight,"=", scrolledNow);
            };

        };

        if (location.pathname === "/") {
            window.addEventListener("scroll", handleScrollToBottom);
            window.addEventListener("mousemove", handleMousePosition);
        };
        

        return () => {
            window.removeEventListener("mousemove", handleMousePosition);
            window.removeEventListener("scroll", handleScrollToBottom);
        };

    }, [location, showSecretPage, isBottom]);

    return (
        <React.Fragment>
            <Header />
            {/* here base on the result if secret page must be open will be rendered Outlet or Secret element */}
            {
                isBottom && showSecretPage ? <MainSecret /> : <Outlet />
            }
        </React.Fragment>
    );
};

export default Root;  // bug in connect, when i hover it push element outside of parent in right (make smaller childs)