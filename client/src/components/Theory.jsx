import React from 'react';

const Theory = ({ data }) => (
  data ? (
    <>
      <h4>Music Theory</h4>
      {data.map((theory) => (
        <div key={theory}>
          {theory[0][0].toUpperCase() + theory[0].slice(1)}
          {': '}
          {theory[1]}
        </div>
      ))}
    </>
  ) : null
  // console.log('data', data);
  // return null;
);

export default Theory;
