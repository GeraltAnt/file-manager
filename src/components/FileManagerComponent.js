import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileManagerComponent = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('/api/documents/')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => console.error('Error fetching documents:', error));
  }, []);

  return (
    <div>
      <h1>Manage Files</h1>
      <ul>
        {documents.map(document => (
          <li key={document.id}>{document.file} - Uploaded on: {new Date(document.uploaded_at).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileManagerComponent;
