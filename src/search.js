import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by first or last name"
      />
    </div>
  );
};

export default Search;

