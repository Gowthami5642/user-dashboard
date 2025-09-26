import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import CreateUserForm from '../components/CreateUserForm';

const Dashboard = () => {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="container py-4">
  <h1 className="mb-4 text-center">User Dashboard</h1>
  <SearchBar setSearchTerm={setSearchTerm} />
  <div className="row">
    {filteredUsers.map(user => (
      <div className="col-md-4 mb-3" key={user.id}>
        <UserCard user={user} />
      </div>
    ))}
  </div>
  <CreateUserForm />
</div>
  );
};

export default Dashboard;