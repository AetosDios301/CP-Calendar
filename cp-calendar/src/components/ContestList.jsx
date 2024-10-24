// src/components/ContestList.jsx

import React, { useEffect, useState } from 'react';
import ContestItem from './ContestItem';
import contestService from '../services/contestService';

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Fetch contests
    contestService.getContests().then(data => setContests(data));
  }, []);

  return (
    <div className="contest-list">
      {contests.length > 0 ? (
        contests.map(contest => (
          <ContestItem
            key={contest.id}
            name={contest.name}
            startTime={contest.startTime}
            endTime={contest.endTime}
            duration={contest.duration}
            platform={contest.platform}
            link={contest.link}
          />
        ))
      ) : (
        <p>No upcoming contests available.</p>
      )}
    </div>
  );
};

export default ContestList;
