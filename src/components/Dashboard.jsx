// Dashboard.jsx
// import { Doughnut } from 'react-chartjs-2';

// const Dashboard = () => {
//   const [ads, setAds] = useState([
//     { id: 1, title: 'Ad 1', description: 'Description 1' },
//     { id: 2, title: 'Ad 2', description: 'Description 2' },
//     // Add more sample data as needed
//   ]);

//   const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
//   const [showAdsInsights, setShowAdsInsights] = useState(false);

//   const handleCreateAd = () => {
//     // Add logic to handle ad creation
//     const newAd = {
//       id: ads.length + 1,
//       title: `Ad ${ads.length + 1}`,
//       description: `Description ${ads.length + 1}`,
//     };
//     setAds([...ads, newAd]);
//   };

//   const handleSort = () => {
//     // Toggle between 'asc' and 'desc' when the sort button is clicked
//     const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//     setSortOrder(newSortOrder);

//     // Sort the ads array based on the ad titles
//     const sortedAds = [...ads].sort((a, b) => {
//       const compareResult =
//         newSortOrder === 'asc'
//           ? a.title.localeCompare(b.title)
//           : b.title.localeCompare(a.title);
//       return compareResult;
//     });

//     // Update the state with the sorted array
//     setAds(sortedAds);
//   };

//   const doughnutChartData = {
//     labels: ads.map((ad) => ad.title),
//     datasets: [
//       {
//         data: ads.map(() => Math.floor(Math.random() * 100)),
//         backgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#4BC0C0',
//           '#9966FF',
//         ],
//         hoverBackgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#4BC0C0',
//           '#9966FF',
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button type="button" onClick={handleCreateAd}>
//         Create Ad
//       </button>

//       <div>
//         <button type="button" onClick={handleSort}>
//           Sort {sortOrder === 'asc' ? 'High to Low' : 'Low to High'}
//         </button>
//       </div>

//       <div>
//         <label>Show Ads Insights</label>
//         <input
//           type="checkbox"
//           checked={showAdsInsights}
//           onChange={() => setShowAdsInsights(!showAdsInsights)}
//         />
//       </div>

//       {showAdsInsights && (
//         <div>
//           <h2>Ads Insights</h2>
//           <Doughnut data={doughnutChartData} />
//         </div>
//       )}

//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {ads.map((ad) => (
//             <tr key={ad.id}>
//               <td>{ad.title}</td>
//               <td>{ad.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Da

// src/App.js
import React from 'react';
import AdsInsights from '../AdsInsights';


const SampleData = [
  { label: ' 1',product:"shampoo" ,value: 25 , des:"This is product use of hairwash"},
  { label: ' 2',product:"cosmetic" ,value: 50 ,des:"This is product use of makeup" },
  { label: '3',product:"serums" ,value: 25 ,des:"This is product use of hair"  },
  { label: '4',product:"facewash" ,value: 25 ,des:"This is product use of face"  },
  { label: '5',product:"shampoo" ,value: 25 ,des:"This is product use of hairwash"  },
  { label: '6',product:"facewash" ,value: 25 ,des:"This is product use of face"  },
  { label: '7',product:"shampoo" ,value: 25 ,des:"This is product use of hairwash"  },
];

const Dashboard = () => {
  return (
    <div className="App">
      <AdsInsights data={SampleData}/>
    </div>
  );
};

export default Dashboard;
