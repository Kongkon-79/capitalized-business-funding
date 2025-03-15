import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import MultiStepFormAllComponents2 from "../components/MultiStepForm2";
import MultiStepFormAllComponents from "../components/MultiStepForm";
import Message from "../components/Message/Message";
import DataFetch from "../components/DataFetch/DataFetch";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <MultiStepFormAllComponents/>
            },
            {
                path : "/second-step",
                element : <MultiStepFormAllComponents2/>
            },
            {
                path : "/message",
                element : <Message/>
            },
            {
                path : "/demo-data-fetch",
                element : <DataFetch/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]

    }
])

export default router;