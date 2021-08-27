import React from 'react';

const Theory = ({ data }) => (
  data ? (
    <>
      <h4>Music Theory</h4>
      {data.map((theory) => (
        <div key={theory}>
          {theory[0]}
          -
          {theory[1]}
        </div>
      ))}
    </>
  ) : null
);

export default Theory;
