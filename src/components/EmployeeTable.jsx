import React from "react";

const EmployeeTable = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-bold mb-2">Recent Employee Activity</h3>
    <table className="w-full text-sm">
      <thead>
        <tr>
          <th className="text-left py-1">Name</th>
          <th className="text-left py-1">Activity</th>
          <th className="text-left py-1">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jane Smith</td>
          <td>Checked In</td>
          <td>09:01 AM</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>Checked Out</td>
          <td>05:45 PM</td>
        </tr>
        <tr>
          <td>Priya Kumar</td>
          <td>On Leave</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default EmployeeTable;