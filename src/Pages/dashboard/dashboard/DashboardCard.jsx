import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
    return (
      <div className="bg-base-200 p-6 rounded-xl shadow-md text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold text-primary">{value}</p>
  </div>
    );
};

export default DashboardCard;




