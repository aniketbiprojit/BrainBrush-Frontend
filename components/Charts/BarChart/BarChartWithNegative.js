import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChartWithNegative = () => {
  return (
    <div>
      <div>
        <Bar
        data ={{
            labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
            datasets: [
              {
                label: ' ', 
                data: [-10, -23, -15, 10, 60, 90],
                backgroundColor: [
                  'rgba(218, 99, 99, 1)',
                  'rgba(218, 99, 99, 1)',
                  'rgba(218, 99, 99, 1)',
                  'rgba(54, 159, 220, 1)',
                  'rgba(163, 214, 220, 1)',
                  'rgba(165, 213, 224, 1)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
              }
            ],
        }}
        height={400}
        width={600}
        options ={{ 
            maintainAspectRatio: false
        }}
        />
      </div>
    </div>
  );
};