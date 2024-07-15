import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

function Logout() {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:3000/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('token');
      console.log('Logged out successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleLogout} color="danger">Logout</Button>
  );
}

export default Logout;
