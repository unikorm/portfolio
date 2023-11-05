
import Root from "./components/Root";
import ErrorPage from "./pages/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,


    },
]);

export default router;