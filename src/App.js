import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import CreateUserForm from './components/CreateUserForm';
const App = () => {
  return (
    <UserProvider>
      <Router>
       <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/user/:id" element={<UserDetails />} />
  <Route path="/create" element={<CreateUserForm />} />
</Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
