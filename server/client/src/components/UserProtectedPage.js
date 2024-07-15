import React, { useState } from 'react';
import { Button, Input, FormGroup, Label, Container } from 'reactstrap';
import axios from 'axios';

function UserProtectedPage() {
  const [response, setResponse] = useState('');

  const handleRequest = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/user/user-role-protected-endpoint', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setResponse(res.data.message);
    } catch (error) {
      console.error(error);
      setResponse('Error fetching data');
    }
  };

  return (
    <Container>
      <FormGroup>
        <Label for="response">Response</Label>
        <Input type="text" name="response" id="response" value={response} readOnly />
      </FormGroup>
      <Button onClick={handleRequest} color="primary">Fetch Data</Button>
    </Container>
  );
}

export default UserProtectedPage;
