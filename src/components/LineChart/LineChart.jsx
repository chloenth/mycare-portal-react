import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin,
);

const incomes = [30, 45, 28, 80, 60, 90, 105];
const maxIncome = Math.max(...incomes);
const maxIncomeIndex = incomes.indexOf(maxIncome);

const expenses = [10, 28, 6, 30, 35, 40, 50];
const maxExpense = Math.max(...expenses);
const maxExpenseIndex = expenses.indexOf(maxExpense);

const LineChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Income',
        data: [30, 45, 28, 80, 60, 90, 105],
        borderColor: 'rgba(36,57,86, 1)',
        backgroundColor: 'rgba(36,57,86, 1)',
        pointBackgroundColor: incomes.map((val) =>
          val === maxIncome ? 'rgba(36,57,86, 1)' : 'transparent',
        ),
        pointRadius: incomes.map((val) => (val === maxIncome ? 5 : 0)),
        borderWidth: 2,
        tension: 0.4, // Makes the line smoother
      },
      {
        label: 'Expense',
        data: [10, 28, 6, 30, 35, 40, 50],
        borderColor: 'rgba(16, 235, 228, 1)',
        backgroundColor: 'rgba(16, 235, 228, 1)',
        pointBackgroundColor: expenses.map((val) =>
          val === maxExpense ? 'rgba(16, 235, 228, 1)' : 'transparent',
        ),
        pointRadius: expenses.map((val) => (val === maxExpense ? 5 : 0)),
        borderWidth: 2,
        tension: 0.4, // Makes the line smoother
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
      // **Tùy chỉnh để hiện giá trị trên max point**
      annotation: {
        annotations: [
          {
            type: 'label',
            xValue: maxIncomeIndex,
            yValue: maxIncome, // Giá trị trên trục y
            backgroundColor: '#a3f2ef',
            borderColor: '#a3f2ef',
            borderWidth: 1,
            content: [`$ ${maxIncome}`], // Hiển thị số liệu
            font: {
              size: 12,
              weight: 'bold',
            },
            xAdjust: -30,
            yAdjust: -10, // Đẩy label lên trên
          },
          {
            type: 'label',
            xValue: maxExpenseIndex,
            yValue: maxExpense, // Giá trị trên trục y
            backgroundColor: '#a3f2ef',
            borderColor: '#a3f2ef',
            borderWidth: 1,
            content: [`$ ${maxExpense}`], // Hiển thị số liệu
            font: {
              size: 12,
              weight: 'bold',
            },
            xAdjust: -30,
            yAdjust: -10, // Đẩy label lên trên
          },
        ],
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light horizontal grid lines
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
