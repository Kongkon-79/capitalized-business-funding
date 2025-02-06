import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MultiStepFormAllComponents2 from "../components/MultiStepForm2";
import MultiStepFormAllComponents from "../components/MultiStepForm";
import HomeAllComponents from "../components/Homes";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : "/message",
                element : <HomeAllComponents/>
            },
            {
                path : "/",
                element : <MultiStepFormAllComponents/>
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