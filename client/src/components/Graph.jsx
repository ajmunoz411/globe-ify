import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import graphProps from '../../../data/graphProps';

const Graph = (props) => {
  const { featDataOne, featDataTwo } = props;

  let graphLabels;
  let graphColors;
  let featData;

  if (featDataTwo.length === 0) {
    graphLabels = graphProps.singleLabels;
    graphColors = graphProps.singleColors;
    featData = featDataOne;
  } else {
    graphLabels = graphProps.doubleLabels;
    graphColors = graphProps.doubleColors;
    featData = [...featDataOne, ...featDataTwo];
  }

  const graphData = {
    labels: graphLabels,
    datasets: [
      {
        label: 'Average',
        data: featData,
        backgroundColor: graphColors,
        borderColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (featData.length > 0) ? (
    <PolarArea data={graphData} />
  ) : null;
};

export default Graph;
