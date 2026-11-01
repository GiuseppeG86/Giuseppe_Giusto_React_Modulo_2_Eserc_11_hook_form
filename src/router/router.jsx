import {createBrowserRouter} from "react-router"
import Layout from "../components/Layout"
import Homepage from "../views/Homepage"
import Posts from "../views/Posts"
import Details from "../views/Detail"
import Login from "../views/Login"
import Register from "../views/Register"
import User from "../views/User"
import { detailsLoader, postsLoader } from "./loader"

const router = createBrowserRouter([
    {
        path:'/',
        Component: Layout,
        children:[
            {
                path:'/',
                Component: Homepage,
            },
            {
                path:'/posts',
                Component: Posts,
                // loader: postsLoader
            },
            {
                path:'/posts/:id',
                Component: Details,
                loader: detailsLoader
            },
            {
                path:'/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/user/:user',
                Component: User
            }
        ]
    }
])

export default router