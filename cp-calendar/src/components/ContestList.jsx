// src/components/ContestList.jsx

import React, { useEffect, useState } from 'react';
import contestService from '../services/contestService';
import ContestItem from './ContestItem';

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      const data = await contestService.getContests();
      setContests(data);
    };

    fetchContests();
  }, []);

  return (
    <div>
      {contests.map((contest) => (
        <ContestItem key={contest.id} contest={contest} />
      ))}
    </div>
  );
};

export default ContestList;
