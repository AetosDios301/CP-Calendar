// src/services/contestService.js

const contestService = {
    getContests: async () => {
      const contests = [
        {
          id: 1,
          name: "Codeforces Round #838",
          startTime: "2024-10-30T15:00:00Z",
          endTime: "2024-10-30T17:00:00Z",
          duration: 2,
          platform: "Codeforces",
          link: "https://codeforces.com/contest/838",
        },
        // Add more contests as needed
      ];
  
      // Simulate a real API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(contests);
        }, 1000);
      });
    },
  };
  
  export default contestService;
  