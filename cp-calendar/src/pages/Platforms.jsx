// src/pages/Platforms.jsx

import React from 'react';

const platforms = ['Codeforces', 'CodeChef', 'LeetCode', 'AtCoder'];

const Platforms = () => (
  <div>
    <h2>Contest Platforms</h2>
    <ul>
      {platforms.map((platform) => (
        <li key={platform}>{platform}</li>
      ))}
    </ul>
  </div>
);

export default Platforms;
