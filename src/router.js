
import Main from "./components/main/Main";
import Root from "./components/Root";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import MainSecret from "./components/secret-stuff/Main_secret";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {
                        index: true,
                        element: <Main/>,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/connect",
                        element: <Connect />,
                    },
                    {
                        path: "/projects",
                        element: <Projects />,
                    },
                    {
                        path: "/secret",
                        element: <MainSecret />,
                        errorElement: <ErrorPage />,
                        children: [

                        ],
                    },
                ],
            },
        ],
    },
]);

export default router;