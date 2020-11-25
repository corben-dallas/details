import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const data = getData();
    data.then(res => setUsers(res))
  }, []);

  const getData = async() => {
    let json = null;
    const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
    if (response.ok) {
      json = response.json();
    }
    return json;
  }

  const handleSelectUser = id => setSelectedId(id);

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <List users={users} onSelectUser={handleSelectUser}/>
      { selectedId && <Details selected={selectedId} /> }
    </div>
  );
}

export default App;
