import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import api from '../api/api';

const SiteItemProcessFileView = () => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [processes, setProcesses] = useState([]);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    api.fetchSites().then(data => setSites(data));
  }, []);

  const handleSiteClick = (site) => {
    setSelectedSite(site);
    api.fetchItems(site.id).then(data => setItems(data));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    api.fetchProcesses(item.id).then(data => setProcesses(data));
  };

  const handleProcessClick = (process) => {
    setSelectedProcess(process);
    api.fetchDocuments(process.id).then(data => setDocuments(data));
  };

  return (
    <div>
      <div>
        {sites.map(site => (
          <Button key={site.id} onClick={() => handleSiteClick(site)}>{site.name}</Button>
        ))}
      </div>
      <div>
        {items.map(item => (
          <Button key={item.id} onClick={() => handleItemClick(item)}>{item.name}</Button>
        ))}
      </div>
      <div>
        {processes.map(process => (
          <Button key={process.id} onClick={() => handleProcessClick(process)}>{process.name}</Button>
        ))}
      </div>
      <div>
        {documents.map(document => (
          <div key={document.id}>{document.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SiteItemProcessFileView;
