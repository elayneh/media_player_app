import React, { useState, useEffect } from 'react';

function Statstic() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-api-url.com/statistics')
      .then(response => response.json())
      .then(data => setStatistics(data));
  }, []);

  return (
    <div>
      <h1>Statistics Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map(stat => (
            <tr key={stat.category}>
              <td>{stat.category}</td>
              <td>{stat.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Statstic;
