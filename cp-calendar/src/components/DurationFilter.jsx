// src/components/DurationFilter.jsx

import React from 'react';
import PropTypes from 'prop-types';

const DurationFilter = ({ value, onChange }) => (
  <div className="duration-filter">
    <label>
      Duration:
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="all">All</option>
        <option value="short">Less than 2 hours</option>
        <option value="medium">2 to 6 hours</option>
        <option value="long">More than 6 hours</option>
      </select>
    </label>
  </div>
);

DurationFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DurationFilter;
