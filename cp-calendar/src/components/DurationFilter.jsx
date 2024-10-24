// src/components/DurationFilter.jsx

import React from 'react';

const DurationFilter = ({ setDurationFilter }) => {
  return (
    <div className="duration-filter">
      <label>Filter by Duration: </label>
      <select onChange={(e) => setDurationFilter(e.target.value)}>
        <option value="">All</option>
        <option value="1">1 hour</option>
        <option value="2">2 hours</option>
        <option value="3">3 hours</option>
      </select>
    </div>
  );
};

export default DurationFilter;
