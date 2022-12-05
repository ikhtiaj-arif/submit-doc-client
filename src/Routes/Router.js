import Dashboard from "../Layout/Dashboard";
import AdminDash from "../Pages/AdminControl/AdminDash";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Submit from "../Pages/Submit/Submit";
import MyDocuments from "../Pages/UserDashbord/MyDocuments";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement:
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/submit",
        element: (
          <PrivateRoute>
            <Submit />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <MyDocuments />,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AdminDash />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
