
import Main from "./components/main/Main";
import Root from "./components/Root";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";
import ProjectPost from "./pages/ProjectPost";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
                path: "",
                element: <Main />,
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
                children: [
                    { path: ":id", element: <ProjectPost /> },
                ],
            },
            {
                path: "/blog",
                element: <Blog />,
                children: [
                    { path: ":id", element: <BlogPost /> },
                ],
            },
            {
                path: "/secret",
                element: <MainSecret />,
                children: [

                ],
            },
        ],
   
    },
]);

export default router;