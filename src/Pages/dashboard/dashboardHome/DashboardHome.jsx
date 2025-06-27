// DashboardHome.jsx
import { FaUtensils, FaHeart, FaClipboardList } from "react-icons/fa";
import DashboardCard from "../dashboard/DashboardCard";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard title="Total Recipes" value={24} icon={<FaUtensils />} />
      <DashboardCard title="Wishlist Recipes" value={7} icon={<FaHeart />} />
      <DashboardCard title="My Recipes" value={4} icon={<FaClipboardList />} />
    </div>
  );
};
export default DashboardHome;
