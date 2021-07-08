import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js';
import { Bar, PolarArea, Radar } from 'react-chartjs-2';



// const options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

const Graph = (props) => {
  // <PolarArea data={data} options={options} />
  // let featData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let featData = [];
  if (props.featData) {
    featData = props.featData;
    // console.log('props.featData', props.featData);
  };
  const data = {
    labels: ['Acousticness', 'Danceability', 'Duration(mins)', 'Energy', 'Instrumentalness', 'Liveness', 'Loudness', 'Speechiness', 'Tempo', 'Valence'],
    datasets: [
      {
        label: 'Average',
        // data: [1, 5, 6, 2, 4, 6, 4, 2, 10, 1],
        data: featData,
        backgroundColor: [
          'rgba(171, 222, 230, 1)',
          'rgba(203, 170, 203, 1)',
          'rgba(255, 255, 181, 1)',
          'rgba(255, 204, 182, 1)',
          'rgba(243, 176, 195, 1)',
          'rgba(198, 219, 218, 1)',
          'rgba(151, 193, 169, 1)',
          'rgba(236, 213, 227, 1)',
          'rgba(85, 203, 205, 1)',
          'rgba(246, 234, 194, 1)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  if (featData) {
    return (
      <PolarArea data={data} />
    );
  }
  return null;
};

export default Graph;
