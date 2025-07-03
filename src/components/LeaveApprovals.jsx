import React, { useState } from "react";

const initialLeaves = [
  { id: 1, name: "John Doe", date: "2024-07-01", reason: "Medical", status: "Pending" },
  { id: 2, name: "Jane Smith", date: "2024-07-02", reason: "Personal", status: "Pending" },
  { id: 3, name: "Priya Kumar", date: "2024-07-03", reason: "Vacation", status: "Approved" },
];

const LeaveApprovals = () => {
  const [leaves, setLeaves] = useState(initialLeaves);

  const handleAction = (id, action) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: action } : leave
      )
    );
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 w-full text-center">Leave Approvals</h2>
      <div className="w-full max-w-4xl">
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left py-3 px-2">Employee</th>
              <th className="text-left py-3 px-2">Date</th>
              <th className="text-left py-3 px-2">Reason</th>
              <th className="text-left py-3 px-2">Status</th>
              <th className="text-left py-3 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-t">
                <td className="py-2 px-2">{leave.name}</td>
                <td className="py-2 px-2">{leave.date}</td>
                <td className="py-2 px-2">{leave.reason}</td>
                <td className="py-2 px-2">
                  <span
                    className={
                      leave.status === "Pending"
                        ? "text-yellow-600"
                        : leave.status === "Approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {leave.status}
                  </span>
                </td>
                <td className="py-2 px-2">
                  {leave.status === "Pending" ? (
                    <>
                      <button
                        onClick={() => handleAction(leave.id, "Approved")}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(leave.id, "Rejected")}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400">No Action</span>
                  )}
                </td>
              </tr>
            ))}
            {leaves.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-400">
                  No leave requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveApprovals;