// src/components/AdsInsights.js
import React, { useState } from 'react';
import DoughnutChart from './components/DoghnutChart';
import AdsTable from './AdsTable';

const AdsInsights = ({ data }) => {
  const [showChart, setShowChart] = useState(true);

  const toggleView = () => {
     setShowChart(!showChart);
  };

  return (
    <div className='h-50 w-25'>
       <button onClick={toggleView} className='bg-primary'>
        {showChart ? 'Show Table' : 'Show Doughnut Chart'}
      </button> 
       {showChart ? <DoughnutChart data={data} /> : <AdsTable data={data} />} 
    </div>
  );
};

export default AdsInsights;
