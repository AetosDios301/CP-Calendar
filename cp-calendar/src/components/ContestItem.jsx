// src/components/ContestItem.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './ContestItem.css'; // Assuming styling is placed in ContestItem.css

const ContestItem = ({ name, startTime, endTime, duration, platform, link }) => (
  <div className="contest-item">
    <h3>{name}</h3>
    <p><strong>Start Time:</strong> {new Date(startTime).toLocaleString()}</p>
    <p><strong>End Time:</strong> {new Date(endTime).toLocaleString()}</p>
    <p><strong>Duration:</strong> {duration} hours</p>
    <p><strong>Platform:</strong> {platform}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Contest Page</a>
  </div>
);

ContestItem.propTypes = {
  name: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ContestItem;
