import  { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Footer from './Footer'
const MonitoringChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartContainer && chartContainer.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartContainer.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Monitoring Data',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: '750px' }}> {/* Adjust the height here */}
      <h2>Monitoring Chart</h2>
      <canvas ref={chartContainer} width={300} height={200}></canvas>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <MonitoringChart />
      <Footer/>
    </div>
    
  );
};

export default Dashboard;
