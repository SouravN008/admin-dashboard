import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDashboard from './AdminDashboard';


function App() {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // Fetch admin data
    axios.get('/api/admin-data.json') // Updated URL for admin data
      .then(response => {
        setAdminData(response.data);
      })
      .catch(error => {
        console.error('Error fetching admin data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Admin Dashboard</h1>
      {adminData && <AdminDashboard data={adminData} />}
    </div>
  );
}

export default App;
