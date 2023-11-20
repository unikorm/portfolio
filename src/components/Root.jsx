
import Header from "./Header";

import { Outlet } from "react-router-dom";
import React from "react";

const Root = () => {

    // active listener when location is "/" to look for cursor at the bottom and scrolled at the bottom
    // if mouse is in bottom cca 5% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then if yes open secret page

    return (
        <React.Fragment>
            <Header />
            <Outlet />    {/*  i think here must be only outlet cause it can now navigate from secret back and don't reset history like every time i am on main, now it behave normal   */}
        </React.Fragment>
    );  // now i realise it would be good put there at the bottom like button to open secret, like Link to="/secret", but i try this solve, what happening
};

export default Root;