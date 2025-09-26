import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
   <div className="container py-4">
  <div className="card p-4">
    <h2 className="card-title">{user.name}</h2>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Company:</strong> {user.company.name}</p>
    <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    <p><strong>Geo:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>
  </div>
</div>
  );
};

export default UserDetails;