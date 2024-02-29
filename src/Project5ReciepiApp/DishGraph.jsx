import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const DishGraph = () => {
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
          labels: ['Calories', 'Fat', 'Protein', 'Carbs'], // Changed labels
          datasets: [{
            label: ` Nutrition`, // Display dish name in the label
            data: [240, 15, 10, 35], // Sample nutrition data (adjust as needed)
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
  }, [dishName]);

  return (
    <div style={{ height: '400px' }}> {/* Adjust the height here */}
      <h2>Nutrition Graph for {dishName}</h2>
      <canvas ref={chartContainer} width={300} height={200}></canvas>
    </div>
  );
};

export default DishGraph;
