import { Outlet, NavLink, Link, useNavigate } from "react-router";
import { useContext } from "react";
import ThemeToggle from "../shared/themeChange/ThemeToggle";
import AuthContext from "../contexts/AuthContext";


const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col bg-base-100 min-h-screen">

        {/* 🧭 Top Navbar */}
        <div className="w-full navbar bg-base-200 px-4 shadow-md z-10">
          <div className="flex-1">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
              ☰
            </label>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              🍽️ DiverseDish
            </Link>
          </div>
          <div className="flex-none space-x-2">
            <NavLink to="/" className="btn btn-sm btn-ghost">
              Home
            </NavLink>
            <NavLink to="/all-recipes" className="btn btn-sm btn-ghost">
              All Recipes
            </NavLink>
            <ThemeToggle/>
            <button onClick={handleLogout} className="btn btn-error btn-sm text-white">
              Logout
            </button>
          </div>
        </div>

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
            <h2 className="text-lg font-semibold mt-2">{user?.displayName || "User Name"}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <div className="divider"></div>

          {/* Dashboard Routes */}
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active font-bold" : ""}>
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-recipes" className={({ isActive }) => isActive ? "active font-bold" : ""}>
              Add Recipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-recipes" className={({ isActive }) => isActive ? "active font-bold" : ""}>
              My Recipes
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
