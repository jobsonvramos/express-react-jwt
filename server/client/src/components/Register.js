
import axios from 'axios'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react'

function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/register', {username, password})
            console.log(response.data)
        } catch (exception) {
            console.log(exception)
        }
    }

    return(
        <Form onSubmit={handleRegister}>
            <FormGroup>
                <Label for='username'>Username</Label>
                <input type='text' value={username} onChange={(e) => {setUsername(e.target.value)}} required />
            </FormGroup>
            <FormGroup>
                <Label for='password'>Senha</Label>
                <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} required />
            </FormGroup>
            <Button type="submit" color="primary">Registrar!</Button>
        </Form>
    )

}

export default Register