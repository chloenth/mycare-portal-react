import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register required components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  annotationPlugin,
);

const childValues = [41, 78, 80, 100, 78, 120, 98];
const maxChildValue = Math.max(...childValues);
const maxChildIndex = childValues.indexOf(maxChildValue);

const adultValues = [41, 78, 80, 100, 78, 120, 98];
const maxAdultValue = Math.max(...adultValues);
const maxAdultIndex = adultValues.indexOf(maxAdultValue);

const elderlyValues = [41, 78, 80, 100, 78, 120, 98];
const maxElderlyValue = Math.max(...elderlyValues);
const maxElderlyIndex = adultValues.indexOf(maxElderlyValue);

const BarChart = () => {
  const data = {
    labels: ['4 Jul', '5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul', '10 Jul'],
    datasets: [
      {
        label: 'Child',
        data: childValues,
        backgroundColor: 'rgba(16, 235, 228, 0.6)',
        borderColor: 'rgba(16, 235, 228,1)',
        borderWidth: 1,
        borderRadius: 20,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
      {
        label: 'Adult',
        data: adultValues,
        backgroundColor: 'rgba(36,57,86, 1)',
        borderColor: 'rgba(36,57,86,1)',
        borderWidth: 1,
        borderRadius: 20,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
      {
        label: 'Elderly',
        data: elderlyValues,
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
      // **Tùy chỉnh để hiện giá trị trên max point**
      annotation: {
        annotations: [
          {
            type: 'label',
            xValue: maxChildIndex,
            yValue: maxChildValue, // Giá trị trên trục y
            backgroundColor: '#a3f2ef',
            borderColor: 'transparent',
            borderWidth: 1,
            content: [`Child: ${maxChildValue}`], // Hiển thị số liệu
            font: {
              size: 12,
              weight: 'bold',
              color: 'white',
            },
            xAdjust: -250,
            yAdjust: 10, // Đẩy label lên trên
          },
          {
            type: 'label',
            xValue: maxAdultIndex,
            yValue: maxAdultValue, // Giá trị trên trục y
            backgroundColor: '#a3f2ef',
            borderColor: 'transparent',
            borderWidth: 1,
            content: [`Adult: ${maxAdultValue}`], // Hiển thị số liệu
            font: {
              size: 12,
              weight: 'bold',
              color: 'white',
            },
            xAdjust: -170,
            yAdjust: 10, // Đẩy label lên trên
          },
          {
            type: 'label',
            xValue: maxElderlyIndex,
            yValue: maxElderlyValue, // Giá trị trên trục y
            backgroundColor: '#a3f2ef',
            borderColor: 'transparent',
            borderWidth: 1,
            content: [`Elderly: ${maxElderlyValue}`], // Hiển thị số liệu
            font: {
              size: 12,
              weight: 'bold',
              color: 'white',
            },
            xAdjust: -90,
            yAdjust: 10, // Đẩy label lên trên
          },
        ],
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
