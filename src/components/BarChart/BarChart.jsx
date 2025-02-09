import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['4 Jul', '5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul', '10 Jul'],
    datasets: [
      {
        label: 'Child',
        data: [41, 78, 80, 100, 78, 120, 98],
        backgroundColor: 'rgba(16, 235, 228, 0.6)',
        borderColor: 'rgba(16, 235, 228,1)',
        borderWidth: 1,
        borderRadius: 20,
        // maxBarThickness: 10,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
      {
        label: 'Adult',
        data: [41, 78, 80, 100, 78, 115, 67],
        backgroundColor: 'rgba(36,57,86, 1)',
        borderColor: 'rgba(36,57,86,1)',
        borderWidth: 1,
        borderRadius: 20,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
      {
        label: 'Ederly',
        data: [41, 78, 80, 100, 78, 23, 38],
        backgroundColor: 'rgba(63, 173, 186, 0.6)',
        borderColor: 'rgba(63, 173, 186, 1)',
        borderWidth: 1,
        borderRadius: 20,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Tắt đường grid dọc
        },
      },
      y: {
        grid: {
          drawBorder: false, // Ẩn viền bên ngoài
          color: 'rgba(0, 0, 0, 0.1)', // Màu của đường ngang
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
