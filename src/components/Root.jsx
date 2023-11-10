
import Header from "./Header";

import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Root = () => {

    // if mouse is in bottom 10% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then active listener to know if there user scroll more
    // then if yes open secret page

    const [showSecretPage, setShowSecretPage] = useState(false);

    useEffect(() => {

        // trigger mouse (cursor) position
        const handleMousePosition = (event) => {
            const mouseY = event.clientY;  // is related to mouse events and provides information about the vertical position of the mouse pointer within the viewport
            const windowHeight = window.innerHeight; // this is height of user actual viewport

            if (mouseY > windowHeight * .9) {
                console.log("mouse is in bottom");
            };
        };

        window.addEventListener("mousemove", handleMousePosition);

        return () => {
            window.removeEventListener("mousemove", handleMousePosition);
        };

    }, []);

    return (
        <React.Fragment>
            <Header />
            <Outlet />
            {/* here base on the result if secret page must be open will be rendered Outlet or Secret element */}
        </React.Fragment>
    );
};

export default Root;