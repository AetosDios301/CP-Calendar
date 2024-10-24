// src/components/Tabs.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
  return (
    <div className="tabs">
      <Link to="/">Home</Link>
      <Link to="/platforms">Platforms</Link>
    </div>
  );
};

export default Tabs;
