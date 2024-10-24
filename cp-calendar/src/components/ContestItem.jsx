// src/components/ContestItem.jsx

import React from 'react';
import AddToCalendarButton from './AddToCalendarButton';
import './ContestItem.css'; // Add styles specific to ContestItem

const ContestItem = ({ contest }) => {
  return (
    <div className="contest-item">
      <h3>{contest.name}</h3>
      <p>Start Time: {new Date(contest.startTime).toLocaleString()}</p>
      <p>End Time: {new Date(contest.endTime).toLocaleString()}</p>
      <p>Duration: {contest.duration} hours</p>
      <p>Platform: {contest.platform}</p>
      <a href={contest.link} target="_blank" rel="noopener noreferrer">View Contest</a>
      <AddToCalendarButton contest={contest} />
    </div>
  );
};

export default ContestItem;
