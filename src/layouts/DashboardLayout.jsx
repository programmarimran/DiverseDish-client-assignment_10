import { Outlet, NavLink } from "react-router";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import DashboardNavbar from "../Pages/dashboard/dashboard/dashNav/DashboardNavbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col bg-base-100 min-h-screen">
        {/* 🧭 Top Navbar */}
        <header className="border-b-2 border-gray-200 dark:border-[#00000080] bg-base-300 dark:bg-slate-900 sticky top-0 z-50 shadow-md hover:border-b-green-500">
          <div className="text-gray-900 dark:text-gray-100 w-11/12 mx-auto">
            <DashboardNavbar></DashboardNavbar>
          </div>
        </header>

        {/* Nested Page Content */}
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content space-y-2">
          {/* User Info */}
          <div className="mb-4 text-center">
            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-16 h-16 mx-auto rounded-full border-2 border-primary"
              />
            )}
            <h2 className="text-lg font-semibold mt-2">
              {user?.displayName || "User Name"}
            </h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <div className="divider"></div>

          {/* Dashboard Routes */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-recipes"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              All Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/wishlist"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              Wishlist Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-recipes"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              Add Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-recipes"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              My Recipes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
