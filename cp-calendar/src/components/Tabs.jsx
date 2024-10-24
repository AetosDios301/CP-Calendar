import React, { useState } from 'react';
import Home from '../pages/Home';
import Platforms from '../pages/Platforms';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === 'Home' ? 'active' : ''}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'Platforms' ? 'active' : ''}
          onClick={() => setActiveTab('Platforms')}
        >
          Platforms
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Home' ? <Home /> : <Platforms />}
      </div>
    </div>
  );
};

export default Tabs;
