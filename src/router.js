
import Main from "./components/main/Main";
import Root from "./components/Root";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

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
                        // here will be Blog component (but for start not, I will be having only few blog posts on main site)
                    },
                    {
                        // here will be the most exciting stuff here like game and funny APIs things and more I hope...
                    }
                ],
            },
        ],
    },
]);

export default router;