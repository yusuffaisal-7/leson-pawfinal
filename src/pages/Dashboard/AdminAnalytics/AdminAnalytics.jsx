import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const res = await axiosSecure.get('/analytics');
      return res.data;
    },
  });

  if (isLoading) return <div>Loading analytics...</div>;

  const chartData = {
    labels: ['Users', 'Tutors', 'Jobs', 'Payments'],
    datasets: [
      {
        label: 'Counts',
        data: [stats.totalUsers, stats.totalTutors, stats.totalJobs, stats.totalPayments],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Platform Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{stats.totalUsers}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Tutors</h3>
          <p className="text-2xl">{stats.totalTutors}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Jobs</h3>
          <p className="text-2xl">{stats.totalJobs}</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-semibold">Total Payments</h3>
          <p className="text-2xl">{stats.totalPayments}</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl p-4">
        <h3 className="text-lg font-semibold mb-4">Statistics Chart</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default AdminAnalytics;

