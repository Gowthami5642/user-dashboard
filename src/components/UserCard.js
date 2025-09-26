import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
   <div className="card h-100 shadow-sm" onClick={() => navigate(`/user/${user.id}`)}>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text"><strong>Email:</strong> {user.email}</p>
    <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
    <p className="card-text"><strong>Company:</strong> {user.company.name}</p>
  </div>
</div>
  );
};

export default UserCard;