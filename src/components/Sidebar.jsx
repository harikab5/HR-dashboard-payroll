import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCheck, FaUsersCog, FaMapMarkerAlt, FaMoneyCheckAlt, FaHistory, FaCog } from "react-icons/fa";

const navItems = [
  { icon: <FaUserCheck />, label: "Leave Approvals", path: "/" },
  { icon: <FaUsersCog />, label: "Manage Employees", path: "/manage-employees" },
  { icon: <FaMapMarkerAlt />, label: "Work Location", path: "/work-location" },
  { icon: <FaMoneyCheckAlt />, label: "Payroll", path: "/payroll" },
  { icon: <FaHistory />, label: "Attendance History", path: "/attendance-history" },
  { icon: <FaCog />, label: "Settings", path: "/settings" }, // Added Settings here
];

const Sidebar = () => (
  <aside className="h-screen w-60 bg-blue-700 flex flex-col items-center py-8 shadow-lg">
    {/* Profile Section */}
    <div className="flex flex-col items-center mb-10">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile"
        className="w-16 h-16 rounded-full mb-3 border-4 border-blue-900 object-cover"
      />
      <span className="text-lg font-semibold text-white">John Doe</span>
      <span className="text-sm text-blue-200">HR Manager</span>
    </div>
    {/* Navigation */}
    <nav className="w-full flex-1">
      <ul className="flex flex-col gap-3 w-full px-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-white hover:bg-blue-800 transition ${
                  isActive ? "bg-blue-900" : ""
                }`
              }
              end
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);
 
export default Sidebar;