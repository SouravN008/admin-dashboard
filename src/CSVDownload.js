import React from 'react';
import { CSVLink } from 'react-csv';

const CSVDownloadButton = ({ data }) => {
  return (
    <div>
      <CSVLink data={data} filename={'admin-data.csv'}>
        Download CSV
      </CSVLink>
    </div>
  );
};

export default CSVDownloadButton;
