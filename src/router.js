
import Main from "./components/Main/Main";
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
                    }
                ]
            }
        ]


    },
]);

export default router;