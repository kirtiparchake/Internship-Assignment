import React, { useState } from 'react';


const UserForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({ street: '', city: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { 
      id: Date.now(),
      name, 
      email, 
      address
    };
    onAdd(newUser);
    setName('');
    setEmail('');
    setAddress({ street: '', city: '' });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} placeholder="Street" required />
      <input type="text" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} placeholder="City" required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
