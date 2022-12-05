import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { getRole } from "../Api/User";
import { AuthContext } from "../Context/UserContext";

import { FaUsers } from "react-icons/fa";
import Navbar from "../Pages/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  //   const [loading, setLoading] = useState(true);
  //   const [role, setRole] = useState(null);

  //   useEffect(() => {
  //     setLoading(true);
  // getRole(user?.email)
  //       .then((data) => {
  //         // console.log(data);
  //         setRole(data);
  //         setLoading(false);
  //       })
  //       .finally(setLoading(false));
  //   }, [user?.email]);

  //   if (loading) {
  //     return <div>{/* <Spinner /> */}</div>;
  //   }
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile mt-20">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="divide-y divide-gray-700"></div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div className="h-full p-3 space-y-2 w-60 bg-gray-300">
            <div className="text-center p-2 space-x-4">
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1"></span>
            </div>
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="bg-gray-300 text-gray-800 ">
                <Link
                  to="/dashboard"
                  href="#"
                  className="flex items-center text-center font-bold p-2 rounded-md"
                >
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  <FaUsers className="w-6 h-4" />
                  <span>My Documents</span>
                </Link>
              </li>
              {"role" === "admin" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/allUsers"
                      href="#"
                      className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                    >
                      <FaUsers className="w-6 h-4" />
                      <span>ALL Documents</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
