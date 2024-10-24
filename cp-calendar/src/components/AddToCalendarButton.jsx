// src/components/AddToCalendarButton.jsx

import React from 'react';

const AddToCalendarButton = ({ contest }) => {
  const handleAddToCalendar = () => {
    // Logic to add contest to Google Calendar
    alert(`Added ${contest.name} to calendar!`);
  };

  return (
    <button onClick={handleAddToCalendar}>
      Add to Google Calendar
    </button>
  );
};

export default AddToCalendarButton;
