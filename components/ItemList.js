import { useState } from 'react';

export default function FormComponent() {
  const [filter, setFilter] = useState('active');
  const items = [
    { id: 1, name: 'Popcorn machine', status: 'active' },
    { id: 2, name: 'Soda fountain', status: 'inactive' },
    { id: 3, name: 'Ticket booth', status: 'active' },
    { id: 4, name: 'Projector', status: 'inactive' },
    { id: 5, name: 'Recliner seats', status: 'active' },
    { id: 6, name: 'Candy counter', status: 'inactive' },
    { id: 7, name: '3D glasses', status: 'active' },
    { id: 8, name: 'Speaker system', status: 'inactive' },
    { id: 9, name: 'Movie posters', status: 'active' },
    { id: 10, name: 'Neon signs', status: 'inactive' },
    { id: 11, name: 'Arcade machines', status: 'active' },
    { id: 12, name: 'Carpeted floors', status: 'inactive' },
  ];

  const filteredItems = items.filter(item => item.status === filter);

  return (
    <div>
      <button onClick={() => setFilter('active')}>Active Items</button>
      <button onClick={() => setFilter('inactive')}>Inactive Items</button>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

