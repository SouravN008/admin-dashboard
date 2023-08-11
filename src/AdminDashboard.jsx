import React, { useState, useEffect } from 'react';
import Table from './Table';
import Search from './search';
import Pagination from './Pagination';
import CSVDownload from './CSVDownload';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch data from the API endpoint
    // Replace with your actual API fetching logic
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin-data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search query
  const filteredData = Array.isArray(data)
    ? data.filter(
        (record) =>
          record.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          record.last_name.toLowerCase().includes(searchQuery.toLowerCase())
        // Add more fields for search as needed
      )
    : [];

  // Pagination logic
  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Table data={paginatedData} />
      <Pagination
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      <CSVDownload data={filteredData} />
    </div>
  );
};

export default AdminDashboard;
