import React, { useState } from 'react';


const EditUserForm = ({ currentUser, onSave }) => {
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [address, setAddress] = useState(currentUser.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...currentUser, name, email, address });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} required />
      <input type="text" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUserForm;
