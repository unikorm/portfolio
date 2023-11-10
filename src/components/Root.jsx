
import Header from "./Header";

import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Root = () => {

    // if mouse is in bottom 10% of viewport (e.clientY) and in the same time is site scrolled to absolut bottom
    // then active listener to know if there user scroll more
    // then if yes open secret page

    

    return (
        <React.Fragment>
            <Header />
            <Outlet />
            {/* here base on the result if secret page must be open will be rendered Outlet or Secret element */}
        </React.Fragment>
    );
};

export default Root;