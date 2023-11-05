
import { Outlet } from "react-router-dom";
import React from "react";

// tu pouzijem Outlet kde sa budu renderovat children Root komponentu co dam do router paths
const Root = () => {
    return (
        <React.Fragment>
            <p>header</p>
            <Outlet />
        </React.Fragment>
    );
};

export default Root;