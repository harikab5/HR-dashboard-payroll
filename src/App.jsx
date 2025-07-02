import React from 'react';
import Sidebar from './components/Sidebar';
import EmployeeTable from './components/EmployeeTable';
import PayrollForm from './components/Payroll';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Routes, Route, Link } from 'react-router-dom';

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

// Employee Overview (Stacked Bar)
const employeeOverviewData = {
  labels: ['Employees'],
  datasets: [
    {
      label: 'Male',
      data: [120],
      backgroundColor: '#2563EB',
      borderRadius: 10,
      stack: 'Stack 0',
    },
    {
      label: 'Female',
      data: [80],
      backgroundColor: '#EC4899',
      borderRadius: 10,
      stack: 'Stack 0',
    },
  ],
};
const employeeOverviewOptions = {
  indexAxis: 'y',
  plugins: {
    legend: { display: true, position: 'bottom' },
    tooltip: {
      enabled: true,
      backgroundColor: '#1E293B',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
  responsive: true,
  scales: {
    x: { stacked: true, grid: { display: false }, max: 220 },
    y: { stacked: true, grid: { display: false } },
  },
};

// Attendance & Punctuality Data
const attendanceBarData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Attendance %',
      data: [92, 88, 95, 90],
      backgroundColor: '#2563EB', // Blue
      borderRadius: 8,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};
const attendanceBarOptions = {
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#1E293B',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { beginAtZero: true, max: 100, grid: { display: false } },
  },
};

// Leave Management Snapshot (Doughnut)
const leaveDoughnutData = {
  labels: ['Pending', 'Balance', 'On Leave'],
  datasets: [
    {
      data: [5, 12, 3],
      backgroundColor: ['#F59E0B', '#3B82F6', '#EF4444'],
      borderWidth: 8,
      borderColor: '#fff',
      cutout: '80%',
    },
  ],
};
const leaveDoughnutOptions = {
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#1E293B',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
};

// Recruitment Metrics (Horizontal Bar)
const recruitmentBarData = {
  labels: ['Open Positions', 'Applicants', 'Interview Stages'],
  datasets: [
    {
      label: 'Count',
      data: [4, 32, 3],
      backgroundColor: ['#3B82F6', '#84CC16', '#EF4444'],
      borderRadius: 10,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};
const recruitmentBarOptions = {
  indexAxis: 'y',
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#1E293B',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
  scales: {
    x: { beginAtZero: true, grid: { display: false }, max: 40 },
    y: { grid: { display: false } },
  },
};

const CARD_HEIGHT = "min-h-[340px] h-full";

const Dashboard = () => (
  <div className="flex h-screen w-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="flex flex-col w-1/5 min-w-[200px] max-w-[260px] bg-white p-4 shadow-md h-full">
      <Sidebar />
      <Link
        to="/payroll"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold"
      >
      </Link>
    </aside>
    {/* Main Content */}
    <main className="flex-1 flex flex-col h-full overflow-auto bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 h-full items-stretch">
        {/* Employee Overview */}
        <div className={`dashboard-card p-6 flex flex-col items-center self-stretch ${CARD_HEIGHT}`}>
          <h2 className="text-lg font-bold text-gray-700 mb-2">Employee Overview</h2>
          <Bar data={employeeOverviewData} options={employeeOverviewOptions} height={80} />
          <div className="flex justify-between w-full mt-4 text-sm">
            <span className="font-bold text-blue-600">Total: 200</span>
            <span className="font-bold" style={{ color: '#2563EB' }}>Male: 120</span>
            <span className="font-bold" style={{ color: '#EC4899' }}>Female: 80</span>
          </div>
        </div>
        {/* Attendance & Punctuality */}
        <div className={`dashboard-card p-6 flex flex-col items-center self-stretch ${CARD_HEIGHT}`}>
          <h2 className="text-lg font-bold text-gray-700 mb-2">Attendance & Punctuality</h2>
          <div className="flex flex-col w-full mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-gray-600">Absentees Today:</span>
              <span className="font-bold" style={{ color: '#DC2626' }}>2</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-gray-600">Late Comers:</span>
              <span className="font-bold" style={{ color: '#F59E0B' }}>5</span>
            </div>
          </div>
          <div className="w-full">
            <span className="block text-xs text-gray-500 mb-1">Monthly Attendance Summary</span>
            <Bar data={attendanceBarData} options={attendanceBarOptions} height={60} />
          </div>
        </div>
        {/* Leave Management Snapshot */}
        <div className={`dashboard-card p-6 flex flex-col items-center self-stretch ${CARD_HEIGHT}`}>
          <h2 className="text-lg font-bold text-gray-700 mb-2">Leave Management Snapshot</h2>
          <div className="w-40 h-40">
            <Doughnut data={leaveDoughnutData} options={leaveDoughnutOptions} />
          </div>
          <div className="flex justify-around w-full mt-4">
            {leaveDoughnutData.datasets[0].data.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span
                  className="font-bold text-lg"
                  style={{
                    color: leaveDoughnutData.datasets[0].backgroundColor[idx],
                  }}
                >
                  {val}
                </span>
                <span className="text-xs text-gray-500">{leaveDoughnutData.labels[idx]}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Recruitment Metrics */}
        <div className={`dashboard-card p-6 flex flex-col items-center self-stretch ${CARD_HEIGHT}`}>
          <h2 className="text-lg font-bold text-gray-700 mb-2">Recruitment Metrics</h2>
          <Bar data={recruitmentBarData} options={recruitmentBarOptions} height={100} />
          <div className="flex justify-around w-full mt-4 text-xs">
            <span className="font-bold" style={{ color: '#3B82F6' }}>Open: 4</span>
            <span className="font-bold" style={{ color: '#84CC16' }}>Applicants: 32</span>
            <span className="font-bold" style={{ color: '#EF4444' }}>Stages: 3</span>
          </div>
        </div>
      </div>
    </main>
    {/* Right Aside */}
    <aside className="flex flex-col w-1/4 max-w-[320px] bg-white p-4 shadow-md h-full">
      <h2 className="text-xl font-semibold mb-4">Employee Activity</h2>
      <EmployeeTable />
    </aside>
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/payroll" element={
      <div className="flex h-screen w-screen bg-gray-100">
        <aside className="flex flex-col w-1/5 min-w-[200px] max-w-[260px] bg-white p-4 shadow-md h-full">
          <Sidebar />
          <Link
            to="/"
            className="mt-8 bg-gray-300 hover:bg-gray-400 text-gray-800 text-center py-2 rounded-lg font-semibold"
          >
            Back to Dashboard
          </Link>
        </aside>
        <main className="flex-1 flex flex-col h-full overflow-auto bg-gray-50 items-center justify-center">
          <div className="dashboard-card p-6 flex flex-col items-center self-stretch w-full max-w-3xl">
            <PayrollForm />
          </div>
        </main>
      </div>
    } />
  </Routes>
);

export default App;