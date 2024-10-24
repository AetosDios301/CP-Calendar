// src/components/PlatformFilter.jsx

import React from 'react';

const PlatformFilter = ({ setPlatformFilter }) => {
  return (
    <div className="platform-filter">
      <label>Filter by Platform: </label>
      <select onChange={(e) => setPlatformFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Codeforces">Codeforces</option>
        <option value="CodeChef">CodeChef</option>
        <option value="LeetCode">LeetCode</option>
        <option value="AtCoder">AtCoder</option>
      </select>
    </div>
  );
};

export default PlatformFilter;
