import React, { useState } from 'react';

const Theory = ({ data }) => {
  if (data) {
    return (
      <>
        <h4>Music Theory</h4>
        {data.map((theory, i) => (
          <div key={i}>
            {theory[0]}
            -
            {theory[1]}
          </div>
        ))}
      </>
    );
  }
  return null;
};

export default Theory;
