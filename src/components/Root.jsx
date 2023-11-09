
import Header from "./Header";
import PageTransition from "./PageTransition";

import { Outlet } from "react-router-dom";
import React from "react";

const Root = () => {
    return (
        <PageTransition>
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
        </PageTransition>
    );
};

export default Root;