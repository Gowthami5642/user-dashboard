import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">User Dashboard</h1>
      <SearchBar setSearchTerm={setSearchTerm} />

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success" onClick={() => navigate('/create')}>
          Create New User
        </button>
      </div>

      <div className="row">
        {filteredUsers.map(user => (
          <div className="col-md-4 mb-3" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;