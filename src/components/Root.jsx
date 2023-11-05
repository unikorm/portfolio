
import Header from "./Header";

import { Outlet } from "react-router-dom";
import React from "react";

const Root = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Root;