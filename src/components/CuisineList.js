import React from 'react';

const CuisineList = ({ cuisines }) => {
  return (
    <div className="flex flex-wrap">
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default CuisineList;
