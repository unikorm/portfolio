
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

    const [selectedPlace, setSelectedPlace] = useState({isScrolled: false, isBottom: false});
    const navigate = useNavigate();
    const location = useLocation();

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrolledFromTop = document.documentElement.scrollTop;
            const totalHight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            const scrolledNow = scrolledFromTop + windowHeight;
            const tolerance = 10;

            const isBottom = totalHight <= scrolledNow + tolerance;

            setSelectedPlace((data) => ({
                ...data,
                isScrolled: isBottom,
            }));
        };

        const handleMove = (e) => {
            const mouseY = e.clientY;
            const windowHeight = window.innerHeight;
            
            const isBottom = mouseY > windowHeight * .9;

            setSelectedPlace((data) => ({
                ...data,
                isBottom: isBottom,
            }));
        };

       useEffect(() => {

        if (location.pathname === "/") {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('mousemove', handleMove);
        };

        if (selectedPlace) {
            navigate("/secret");
        };

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMove);
        };

       }, [location.pathname, selectedPlace, navigate]);

   
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Root;