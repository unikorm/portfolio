
import Main from "./components/main/Main";
import Root from "./components/Root";
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
                        // here will be About component (page)
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