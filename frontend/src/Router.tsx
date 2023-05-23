import App from "./App";
import { createBrowserRouter } from "react-router-dom"
import Home from "./assets/components/Home";
import SignUp from "./assets/components/SignUp";
import Mainscreen from "../src/Mainscreen"
import Profile from "./assets/components/Profile";
import FreeCodeCampTest from "./assets/components/FreeCodeCampTest";
import MainMenu from "./assets/components/MainMenu";

const router = createBrowserRouter ([
    {
        path: "/",
        element: < App />,
        children: [ 
              
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'signup',
            element:<SignUp/>
        },
        {
            path: 'gamescreen',
            element:<Mainscreen/>
        },
        {
            path: 'profile',
            element:<Profile/>
        },
        {   path:'test',
            element:<FreeCodeCampTest/>
        },
        {
            path:'mainmenu',
            element:<MainMenu/>
        }
              

]

}
]);

export default router;