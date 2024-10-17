import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';  // Update with your actual API URL

export const fetchSites = () => axios.get(`${BASE_URL}/sites/`).then(res => res.data);
export const fetchItems = siteId => axios.get(`${BASE_URL}/items/?site=${siteId}`).then(res => res.data);
export const fetchProcesses = itemId => axios.get(`${BASE_URL}/processes/?item=${itemId}`).then(res => res.data);
export const fetchDocuments = processId => axios.get(`${BASE_URL}/documents/?process=${processId}`).then(res => res.data);

export default {
    fetchSites,
    fetchItems,
    fetchProcesses,
    fetchDocuments,
};
