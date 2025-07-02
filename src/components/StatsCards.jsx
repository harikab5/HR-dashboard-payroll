import React from 'react';

const stats = [
  { label: 'Male Employees', value: 45 },
  { label: 'Female Employees', value: 38 },
  { label: 'Clients', value: 12 },
  { label: 'Ongoing Projects', value: 6 },
  { label: 'Completed Projects', value: 18 },
];

const StatsCards = () => {
  return (
    <>
      {stats.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow flex flex-col items-center">
          <h3 className="text-gray-600 font-semibold">{item.label}</h3>
          <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
        </div>
      ))}
    </>
  );
};

export default StatsCards;
