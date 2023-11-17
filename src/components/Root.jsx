
import Header from "./Header";
import MainSecret from "./secret-stuff/Main_secret";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect  } from "react";

const Root = () => {

    // active listener when location is "/" to look for cursor at the bottom and scrolled at the bottom
    // if mouse is in bottom cca 5% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then if yes open secret page

    const [mouseAtBottom, setMouseAtBottom] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    const location = useLocation();
    const navigateTo = useNavigate();  // useHistory is not available anymore, so navigate works but not on 100% LOL

    useEffect(() => {

        // trigger mouse (cursor) position   (works pretty well as i want)
        const handleMousePosition = (event) => {
            const mouseY = event.clientY;  // is related to mouse events and provides information about the vertical position of the mouse pointer within the viewport
            const windowHeight = window.innerHeight; // this is height of user actual viewport

            if (mouseY > windowHeight * .969) {
                // console.log(mouseAtBottom, "mouse is in bottom");
                setMouseAtBottom(true);
            } else {
                // console.log(mouseAtBottom ,"mouse above")
                setMouseAtBottom(false);
            };

        };

        // trigger if we are at the bottom of website    (works well with tolerance but it's okey)
        const handleScrollToBottom = () => {
            const scrolledFromTop = document.documentElement.scrollTop; // how much is scrolled from top of the site
            const windowHeight = window.innerHeight;
            const totalHight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            ); // total height of the entire HTML document
            const scrolledNow = scrolledFromTop + windowHeight;
            const tolerance = 5;

            if (totalHight <= scrolledNow + tolerance) {
                setIsBottom(true);
                // console.log(isBottom, totalHight, scrolledFromTop, windowHeight, scrolledNow);
                window.addEventListener("mousemove", handleMousePosition);

                if (isBottom && mouseAtBottom && location.pathname !== "/secret") {  // idk this logic will be fine, but for now yes, later i think will be better
                    navigateTo("/secret");
                };

            } else {
                setIsBottom(false);
                // console.log(isBottom, totalHight,";", scrolledFromTop, "+", windowHeight,"=", scrolledNow);
                window.removeEventListener("mousemove", handleMousePosition);
            };


        };

        if (location.pathname === "/" ) {
            window.addEventListener("scroll", handleScrollToBottom);
            // window.addEventListener("mousemove", handleMousePosition);
        };
        

        return () => {
            window.removeEventListener("mousemove", handleMousePosition);
            window.removeEventListener("scroll", handleScrollToBottom);
        };

    }, [location.pathname ,mouseAtBottom]);  // i think this will be a place of many bugs yet

    return (
        <React.Fragment>
            <Header />
            <Outlet />       
        </React.Fragment>
    );  // now i realise it would be good put there at the bottom like button to open secret, like Link to="/secret", but i try this solve, what happening
};

export default Root;