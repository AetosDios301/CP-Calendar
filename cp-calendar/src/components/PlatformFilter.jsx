// src/components/PlatformFilter.jsx

import React from 'react';
import PropTypes from 'prop-types';

const platforms = ['Codeforces', 'CodeChef', 'LeetCode', 'AtCoder'];

const PlatformFilter = ({ selectedPlatforms, onChange }) => (
  <div className="platform-filter">
    <h3>Filter by Platform</h3>
    {platforms.map(platform => (
      <div key={platform}>
        <input
          type="checkbox"
          id={platform}
          value={platform}
          checked={selectedPlatforms.includes(platform)}
          onChange={() => onChange(platform)}
        />
        <label htmlFor={platform}>{platform}</label>
      </div>
    ))}
  </div>
);

PlatformFilter.propTypes = {
  selectedPlatforms: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default PlatformFilter;
