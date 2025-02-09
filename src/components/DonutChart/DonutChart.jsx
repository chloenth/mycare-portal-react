import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const dataValues = [35, 28, 20, 17]; // Dữ liệu ví dụ cho biểu đồ donut
  const labels = [
    'Emergency Medicine',
    'General Medicine',
    'Internal Medicine',
    'Other Departments',
  ]; // Nhãn của donut chart

  // Tìm giá trị tối đa và chỉ số của nó
  const maxValue = Math.max(...dataValues);
  const maxIndex = dataValues.indexOf(maxValue);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues, // Dữ liệu không thay đổi
        backgroundColor: [
          'rgba(36,57,86, 0.8)',
          'rgba(163,242,239,0.8)',
          'rgba(223,249,250,0.8)',
          'rgba(230,230,232,0.8)',
        ],
        hoverBackgroundColor: [
          'rgba(36,57,86, 1)',
          'rgba(163,242,239,1)',
          'rgba(223,249,250,1)',
          'rgba(230,230,232,1)',
        ],
        borderWidth: 1, // Đặt borderWidth cho từng slice
        offset: dataValues.map((_, index) => (index === maxIndex ? 30 : 0)), // Moves the max slice outward
      },
    ],
  };

  // Tạo các tùy chỉnh cho biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Vị trí của legend
        align: 'start',
        labels: {
          boxWidth: 20, // Kích thước ô vuông màu
          boxHeight: 10, // Kích thước ô vuông màu
          padding: 10, // Khoảng cách giữa các mục
          usePointStyle: true, // Dùng điểm tròn thay vì ô vuông
          pointStyle: 'rectRounded', // Hình chữ nhật bo góc
        },
      },
      tooltip: {
        enabled: true, // Hiển thị tooltip khi hover vào các slice
      },
    },
    cutout: '50%', // Tạo lỗ giữa biểu đồ, tạo thành donut
  };

  return <Pie data={data} options={options} />;
};

export default DonutChart;
