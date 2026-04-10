import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsChart = ({ user }) => {
  const data = {
    labels: ['Public Repos', 'Followers', 'Following', 'Public Gists'],
    datasets: [{
      label: 'Count',
      data: [user.public_repos, user.followers, user.following, user.public_gists],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 205, 86, 0.8)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 205, 86, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Profile Statistics',
      },
    },
  };

  return (
    <div className="card stat-card text-white shadow-lg">
      <div className="card-body">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default StatsChart;
