import React, { useState } from "react";

const initialEmployees = [
  { id: 1, name: "John Doe", role: "HR Manager" },
  { id: 2, name: "Jane Smith", role: "Developer" },
  { id: 3, name: "Priya Kumar", role: "Designer" },
];

const Manageroles = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [newEmployee, setNewEmployee] = useState({ name: "", role: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.role) return;
    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name: newEmployee.name,
        role: newEmployee.role,
      },
    ]);
    setNewEmployee({ name: "", role: "" });
  };

  const handleRemove = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="w-full h-full min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-700 w-full text-center">Manage Employee Roles</h2>
        <form onSubmit={handleAdd} className="flex gap-4 mb-8 flex-col md:flex-row w-full">
          <input
            type="text"
            placeholder="Employee Name"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            className="border p-3 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Role"
            value={newEmployee.role}
            onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
            className="border p-3 rounded flex-1"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </form>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-blue-100">
                <th className="text-left py-3 px-2">Name</th>
                <th className="text-left py-3 px-2">Role</th>
                <th className="text-left py-3 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="py-2 px-2">{emp.name}</td>
                  <td className="py-2 px-2">{emp.role}</td>
                  <td className="py-2 px-2">
                    <button
                      onClick={() => handleRemove(emp.id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {employees.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-400">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manageroles;