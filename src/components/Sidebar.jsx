 import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCheck, FaUsersCog, FaMapMarkerAlt, FaMoneyCheckAlt, FaHistory, FaCog } from "react-icons/fa";

const navItems = [
  { icon: <FaUserCheck />, label: "Leave Approvals", path: "/leave-approvals" },
  { icon: <FaUsersCog />, label: "Manage Employees", path: "/manageroles" },
  { icon: <FaMapMarkerAlt />, label: "Work Location", path: "#" },
  { icon: <FaMoneyCheckAlt />, label: "Payroll", path: "/payroll" },
  { icon: <FaHistory />, label: "Attendance History", path: "/attendance-history" },
  { icon: <FaCog />, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center h-full">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full mb-2 object-cover"
        />
        <span className="font-bold text-lg text-gray-900">John Doe</span>
        <span className="text-sm text-gray-500">HR Manager</span>
      </div>
      {/* Navigation */}
      <nav className="flex-1 w-full">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-white hover:bg-blue-100 hover:text-blue-700"
            }`}
            style={{ background: location.pathname === item.path ? "#2563EB" : undefined }}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      {/* Back to Dashboard Button */}
      <Link
        to="/"
        className="mt-8 mb-2 bg-gray-300 hover:bg-gray-400 text-gray-800 text-center py-2 px-4 rounded-lg font-semibold w-11/12"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Sidebar;