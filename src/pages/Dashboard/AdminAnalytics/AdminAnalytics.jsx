// import React from 'react';

// import { useQuery } from '@tanstack/react-query';

// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const AdminAnalytics = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: stats = {}, isLoading } = useQuery({
//     queryKey: ['analytics'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/analytics');
//       return res.data;
//     },
//   });

//   if (isLoading) return <div>Loading analytics...</div>;

//   const chartData = {
//     labels: ['Users', 'Tutors', 'Jobs', 'Payments'],
//     datasets: [
//       {
//         label: 'Counts',
//         data: [stats.totalUsers, stats.totalTutors, stats.totalJobs, stats.totalPayments],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Platform Analytics</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Users</h3>
//           <p className="text-2xl">{stats.totalUsers}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Tutors</h3>
//           <p className="text-2xl">{stats.totalTutors}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Jobs</h3>
//           <p className="text-2xl">{stats.totalJobs}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Payments</h3>
//           <p className="text-2xl">{stats.totalPayments}</p>
//         </div>
//       </div>
//       <div className="card bg-base-100 shadow-xl p-4">
//         <h3 className="text-lg font-semibold mb-4">Statistics Chart</h3>
//         <Bar data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default AdminAnalytics;



// import React, { useState, useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const AdminAnalytics = () => {
//   const axiosSecure = useAxiosSecure();
//   const [period, setPeriod] = useState('monthly'); // Default to monthly view

//   const { data: stats = {}, isLoading, refetch } = useQuery({
//     queryKey: ['analytics', period],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/analytics?period=${period}`);
//       return res.data;
//     },
//   });

//   // Auto-refresh data every 5 minutes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       refetch();
//     }, 300000); // 5 minutes in milliseconds
//     return () => clearInterval(interval);
//   }, [refetch]);

//   const chartData = {
//     labels: ['Users', 'Tutors', 'Jobs', 'Payments', 'Students'],
//     datasets: [
//       {
//         label: 'Counts',
//         data: [
//           stats.totalUsers || 0,
//           stats.totalTutors || 0,
//           stats.totalJobs || 0,
//           stats.totalPayments || 0,
//           stats.totalStudent || 0,
//         ],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: 'top' },
//       title: { display: true, text: `Platform Analytics (${period.charAt(0).toUpperCase() + period.slice(1)})` },
//     },
//     scales: {
//       y: { beginAtZero: true, title: { display: true, text: 'Count' } },
//     },
//   };

//   if (isLoading) return <div className="text-center py-20">Loading analytics...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Platform Analytics</h2>
//       <div className="mb-4">
//         <label className="mr-2">View by: </label>
//         <select
//           value={period}
//           onChange={(e) => setPeriod(e.target.value)}
//           className="border p-1 rounded"
//         >
//           <option value="daily">Daily</option>
//           <option value="weekly">Weekly</option>
//           <option value="monthly">Monthly</option>
//         </select>
//         <button
//           onClick={() => refetch()}
//           className="ml-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//         >
//           Refresh Now
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Users</h3>
//           <p className="text-2xl">{stats.totalUsers || 0}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Tutors</h3>
//           <p className="text-2xl">{stats.totalTutors || 0}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Jobs</h3>
//           <p className="text-2xl">{stats.totalJobs || 0}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Payments</h3>
//           <p className="text-2xl">{stats.totalPayments || 0}</p>
//         </div>
//         <div className="card bg-base-100 shadow-xl p-4">
//           <h3 className="text-lg font-semibold">Total Students</h3>
//           <p className="text-2xl">{stats.totalStudent || 0}</p>
//         </div>
//       </div>
//       <div className="card bg-base-100 shadow-xl p-4 h-96">
//         <h3 className="text-lg font-semibold mb-4">Statistics Chart</h3>
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default AdminAnalytics;


import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading, refetch } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const res = await axiosSecure.get('/analytics');
      return res.data;
    },
  });

  // Auto-refresh data every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 300000); // 5 minutes in milliseconds
    return () => clearInterval(interval);
  }, [refetch]);

  if (isLoading) return <div className="text-center py-20">Loading analytics...</div>;

  const chartData = {
    labels: ['Users', 'Tutors', 'Jobs', 'Payments', 'Students'],
    datasets: [
      {
        label: 'Counts',
        data: [
          stats.totalUsers || 0,
          stats.totalTutors || 0,
          stats.totalJobs || 0,
          stats.totalPayments || 0,
          stats.totalStudent || 0,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Teal for Users
          'rgba(255, 99, 132, 0.6)', // Pink for Tutors
          'rgba(54, 162, 235, 0.6)', // Blue for Jobs
          'rgba(255, 206, 86, 0.6)', // Yellow for Payments
          'rgba(153, 102, 255, 0.6)', // Purple for Students
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Platform Analytics Overview' },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Count' } },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Platform Analytics</h2>
      <div className="mb-4">
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Refresh Now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{stats.totalUsers || 0}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Tutors</h3>
          <p className="text-2xl">{stats.totalTutors || 0}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Jobs</h3>
          <p className="text-2xl">{stats.totalJobs || 0}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Payments</h3>
          <p className="text-2xl">{stats.totalPayments || 0}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-2xl">{stats.totalStudent || 0}</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl p-4 h-96">
        <h3 className="text-lg font-semibold mb-4">Statistics Chart</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AdminAnalytics;