import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';

const Graph = (props) => {
  // console.log('hello from graph');
  const { featData } = props;
  let featDataArr = [];

  if (featData) {
    featDataArr = featData;
  }

  const data = {
    labels: ['Acousticness', 'Danceability', 'Duration(mins)', 'Energy', 'Instrumentalness', 'Liveness', 'Loudness', 'Speechiness', 'Tempo', 'Valence'],

    datasets: [
      {
        label: 'Average',
        data: featDataArr,
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

  if (featDataArr.length > 0) {
    return (
      <PolarArea data={data} />
    );
  }
  return null;
};

export default Graph;
