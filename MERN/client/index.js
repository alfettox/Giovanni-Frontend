import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Route path="/" exact>
          <ItemsList items={items} />
        </Route>
        <Route path="/create">
          <CreateItem />
        </Route>
        <Route path="/edit/:id">
          <EditItem />
        </Route>
      </div>
    </Router>
  );
}

function ItemsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
            {item.name} - ${item.price}
          <button onClick={() => handleDelete(item._id)}>Delete</button>
          <Link to={`/edit/${item._id}`}>Edit</Link>
        </li>
      ))}
    </ul>
  );

  async function handleDelete(id) {
    await fetch(`/items/${id}`, {
      method: 'DELETE'
    });
    setItems(items.filter(item => item._id !== id));
  }
}

function CreateItem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );

  async function handleCreate() {
    await fetch('/items', {
      method: 'POST',
      body: JSON.stringify({ name, price }),
      headers: { 'Content-Type': 'application/json' }
    });
    setName('');
    setPrice('');
  }
}

function EditItem({ match }) {
  const [item, setItem] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch(`/items/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setName(data.name);
        setPrice(data.price);
      });
  }, [match.params.id]);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={() => handleUpdate(item._id)}>Update</button>
    </div>
  );

  async function handleUpdate(id) {
    await fetch(`/items/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, price }),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export default App;
