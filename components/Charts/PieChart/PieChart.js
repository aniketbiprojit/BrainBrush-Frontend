import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const PieChart = () => {
  const listItemStyle = {
    color: "#333",
    listStyle: "none",
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    margin: "8px"
  };

    return (
        <div>
            <div>
                <Doughnut
                    data={{
                        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
                        datasets: [
                            {
                              label: ' ', 
                              data: [3, 5, 6, 8, 9, 10],
                              backgroundColor: [
                                'rgba(50, 160, 230, 1)',
                                'rgba(221, 221, 221, 1)',
                                'rgba(63, 120, 158, 1)',
                                'rgba(54, 159, 220, 1)',
                                'rgba(163, 214, 220, 1)',
                                'rgba(165, 213, 224, 1)',
                              ],
                              borderColor: [
                                'rgba(50, 160, 230, 1)',
                                'rgba(221, 221, 221, 1)',
                                'rgba(63, 120, 158, 1)',
                                'rgba(54, 159, 220, 1)',
                                'rgba(163, 214, 220, 1)',
                                'rgba(165, 213, 224, 1)',
                              ],
                            }
                          ],
                    }}
                    options ={{
                        responsive: true,
          maintainAspectRatio: true,
                    }}

                />
            </div>

        </div>
    );
};
