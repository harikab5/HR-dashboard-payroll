import React, { useState } from "react";

const initialAttendance = [
  { id: 1, name: "John Doe", date: "2024-07-01", status: "Present", inTime: "09:00 AM", outTime: "05:30 PM" },
  { id: 2, name: "Jane Smith", date: "2024-07-01", status: "Absent", inTime: "-", outTime: "-" },
  { id: 3, name: "Priya Kumar", date: "2024-07-01", status: "Present", inTime: "09:15 AM", outTime: "05:45 PM" },
];

const AttendanceHistory = () => {
  const [attendance] = useState(initialAttendance);

  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 w-full text-center">Attendance History</h2>
      <div className="w-full max-w-4xl">
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left py-3 px-2">Employee</th>
              <th className="text-left py-3 px-2">Date</th>
              <th className="text-left py-3 px-2">Status</th>
              <th className="text-left py-3 px-2">In Time</th>
              <th className="text-left py-3 px-2">Out Time</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id} className="border-t">
                <td className="py-2 px-2">{record.name}</td>
                <td className="py-2 px-2">{record.date}</td>
                <td className="py-2 px-2">
                  <span
                    className={
                      record.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {record.status}
                  </span>
                </td>
                <td className="py-2 px-2">{record.inTime}</td>
                <td className="py-2 px-2">{record.outTime}</td>
              </tr>
            ))}
            {attendance.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-400">
                  No attendance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;