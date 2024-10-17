import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProcessManagerComponent = () => {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    axios.get('/api/processes/')
      .then(response => {
        setProcesses(response.data);
      })
      .catch(error => console.error('Error fetching processes:', error));
  }, []);

  return (
    <div>
      <h1>Manage Processes</h1>
      <ul>
        {processes.map(process => (
          <li key={process.id}>{process.name} - {process.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessManagerComponent;
