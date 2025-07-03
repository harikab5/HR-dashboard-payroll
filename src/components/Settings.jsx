import React, { useState, useEffect } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    role: "HR Manager",
    phone: "123-456-7890",
  });
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEdit = () => setEditMode(true);

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setMessage("Password updated successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 p-8 flex flex-col items-center transition-colors">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 w-full text-center">Settings</h2>
      {/* Profile Details */}
      <div className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Profile Details</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-200">Name: </span>
            <span className="dark:text-gray-100">{profile.name}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-200">Email: </span>
            <span className="dark:text-gray-100">{profile.email}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-200">Role: </span>
            <span className="dark:text-gray-100">{profile.role}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-200">Phone: </span>
            <span className="dark:text-gray-100">{profile.phone}</span>
          </div>
        </div>
        <button
          onClick={handleEdit}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Edit Profile
        </button>
      </div>

      {/* Edit Profile Form */}
      {editMode && (
        <form onSubmit={handleSave} className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Edit Profile</h3>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full border p-3 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full border p-3 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Role</label>
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleProfileChange}
              className="w-full border p-3 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Phone</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full border p-3 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Save Changes
          </button>
        </form>
      )}

      {/* Change Password */}
      <form onSubmit={handlePasswordSubmit} className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Change Password</h3>
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">New Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border p-3 rounded"
            placeholder="Enter new password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Update Password
        </button>
      </form>

      {/* Success/Error Message */}
      {message && (
        <div className="mt-4 text-green-600 text-center font-semibold">{message}</div>
      )}
    </div>
  );
};

export default Settings;