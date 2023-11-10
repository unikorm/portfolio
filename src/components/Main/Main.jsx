
import BlogSection from "./BlogSection";
import Head from "./Head";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {

    const [showSecretPage, setShowSecretPage] = useState(false);


    // secret page logic
    useEffect(() => {

        // handle scroll position on map
        const handleScroll = () => {
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );

            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const bottomThreshold = documentHeight - windowHeight * .3; // i think documentHeight * .7

            if (scrollY > bottomThreshold) {
                setShowSecretPage(true);
                console.log(showSecretPage);
            };


        };

        // handle mouse position on map
        const handleMouseMove = (event) => {
            const mouseY = event.clientY;
            const windowHeight = window.innerHeight;

            if (mouseY > windowHeight * .7) {
                window.addEventListener("scroll", handleScroll);
                console.log("mouse event active");
                console.log(showSecretPage);
            } else {
                window.removeEventListener("scroll", handleScroll);
            };

        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <React.Fragment>
            <Head />
            <BlogSection />
            <div><Link to={ showSecretPage && "/secret" }></Link></div>
        </React.Fragment>
    );
};

export default Main;