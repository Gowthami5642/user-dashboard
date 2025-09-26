import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const CreateUserForm = () => {
  const { users, setUsers } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: { name: formData.company }
    };
    setUsers([...users, newUser]);
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mt-4">
  <h5 className="card-title mb-3">Create New User</h5>
  <input type="text" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
  <input type="email" className="form-control mb-2" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
  <input type="text" className="form-control mb-2" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
  <input type="text" className="form-control mb-3" placeholder="Company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
  <button type="submit" className="btn btn-primary">Add User</button>
</form>
  );
};

export default CreateUserForm;