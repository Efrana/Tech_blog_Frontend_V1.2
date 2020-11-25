import Home from "../Pages/Home";
import Details from "../Pages/Details";
// import Details from "../Pages/Tag";
export const routes = [
    // {
    //     path:"/" , 
    //     component:Home
    // },

    {
        path:"/details/:ID", 
        component:Details
    },
    {
        path:"/new", 
        component:Tag
    }
]