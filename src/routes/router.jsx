import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MultiStepFormAllComponents2 from "../components/MultiStepForm2";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/second-step",
                element : <MultiStepFormAllComponents2/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]

    }
])

export default router;