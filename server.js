const express = require('express');
const app = express();
const PORT = 8080;
 
// This would be replaced with your actual data retrieval and processing logic
const getDashboardData = () => {
  return {
    activeCars: 3,
    inactiveCars: 31,
    currentBalance: 4366,
    todaysPayment: 5750,
    carsDriven: 11,
    totalBookings: 72,
    kmsPerDay: 987.87
  };
};
 
// Serve static files from the 'public' directory where your frontend files are located
app.use(express.static('public'));
 
// API endpoint to get dashboard data
app.get('/api/dashboard', (req, res) => {
  const data = getDashboardData();
  res.json(data);
});
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${8080}`);
});