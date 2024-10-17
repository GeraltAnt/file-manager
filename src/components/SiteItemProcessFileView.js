import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const SiteItemProcessFileView = () => {
    const [sites, setSites] = useState([]);
    const [selectedSite, setSelectedSite] = useState(null);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [processes, setProcesses] = useState([]);
    const [selectedProcess, setSelectedProcess] = useState(null);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        axios.get('/api/sites/')
            .then(res => setSites(res.data))
            .catch(err => console.error('Error loading sites', err));
    }, []);

    const selectSite = site => {
        setSelectedSite(site);
        axios.get(`/api/items/?site=${site.id}`)
            .then(res => setItems(res.data))
            .catch(err => console.error('Error loading items', err));
    };

    const selectItem = item => {
        setSelectedItem(item);
        axios.get(`/api/processes/?item=${item.id}`)
            .then(res => setProcesses(res.data))
            .catch(err => console.error('Error loading processes', err));
    };

    const selectProcess = process => {
        setSelectedProcess(process);
        axios.get(`/api/documents/?process=${process.id}`)
            .then(res => setDocuments(res.data))
            .catch(err => console.error('Error loading documents', err));
    };

    return (
        <Container>
            <Typography variant="h4">Sites</Typography>
            {sites.map(site => (
                <Button key={site.id} onClick={() => selectSite(site)}>{site.name}</Button>
            ))}

            {selectedSite && <Typography variant="h6">Items in {selectedSite.name}</Typography>}
            {items.map(item => (
                <Button key={item.id} onClick={() => selectItem(item)}>{item.name}</Button>
            ))}

            {selectedItem && <Typography variant="h6">Processes for {selectedItem.name}</Typography>}
            {processes.map(process => (
                <Button key={process.id} onClick={() => selectProcess(process)}>{process.name}</Button>
            ))}

            {selectedProcess && <Typography variant="h6">Documents in {selectedProcess.name}</Typography>}
            {documents.map(document => (
                <Typography key={document.id}>{document.name}</Typography>
            ))}
        </Container>
    );
};

export default SiteItemProcessFileView;
