/* global chrome */

// Log when the background script is loaded
console.log("CP Calendar background script is running.");

// Listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        console.log("CP Calendar extension installed for the first time.");
        // Initialize any data or settings if needed
        chrome.storage.sync.set({ contests: [] }, () => {
            console.log("Initialized contests storage.");
        });
    } else if (details.reason === "update") {
        console.log("CP Calendar extension updated.");
    }
});

// Alarm to fetch contest data at intervals
chrome.alarms.create("fetchContests", { periodInMinutes: 60 });

// Listener for when the alarm goes off (runs every 60 minutes)
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "fetchContests") {
        console.log("Fetching contest data...");
        // Fetch data from contestService or an API and store it
        fetchContestsAndStore();
    }
});

// Function to fetch contest data and store it in Chrome storage
function fetchContestsAndStore() {
    fetch('https://example.com/api/contests') // Replace with the actual API endpoint
        .then(response => response.json())
        .then(data => {
            chrome.storage.sync.set({ contests: data }, () => {
                console.log("Contest data updated in storage.");
            });
        })
        .catch((error) => {
            console.error("Error fetching contest data:", error);
        });
}
