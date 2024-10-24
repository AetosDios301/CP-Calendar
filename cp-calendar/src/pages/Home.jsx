// src/pages/Home.jsx

import React, { useState } from 'react';
import ContestList from '../components/ContestList';
import DurationFilter from '../components/DurationFilter';
import PlatformFilter from '../components/PlatformFilter';

const Home = () => {
  const [durationFilter, setDurationFilter] = useState('all');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handleDurationChange = (value) => {
    setDurationFilter(value);
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="home">
      <h2>Today & Upcoming Contests</h2>
      <DurationFilter value={durationFilter} onChange={handleDurationChange} />
      <PlatformFilter selectedPlatforms={selectedPlatforms} onChange={handlePlatformChange} />
      <ContestList />
    </div>
  );
};

export default Home;
