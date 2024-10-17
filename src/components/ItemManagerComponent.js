import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemManagerComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      <h1>Manage Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManagerComponent;
