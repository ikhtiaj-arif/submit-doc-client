import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        // errorElement:
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
        ]
    }
])

export default router;