// src/pages/Home.jsx

import React, { useState } from 'react';
import ContestList from '../components/ContestList';
import DurationFilter from '../components/DurationFilter';
import PlatformFilter from '../components/PlatformFilter';

const Home = () => {
  const [durationFilter, setDurationFilter] = useState('');
  const [platformFilter, setPlatformFilter] = useState('');

  return (
    <div>
      <h2>Upcoming Contests</h2>
      <DurationFilter setDurationFilter={setDurationFilter} />
      <PlatformFilter setPlatformFilter={setPlatformFilter} />
      <ContestList durationFilter={durationFilter} platformFilter={platformFilter} />
    </div>
  );
};

export default Home;
