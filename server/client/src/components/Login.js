
import axios from 'axios'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {username, password})
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token)
        } catch (exception) {
            console.log(exception)
        }
    }

    return(
        <Form onSubmit={handleLogin}>
            <FormGroup>
                <Label for='username'>Username</Label>
                <input type='text' value={username} onChange={(e) => {setUsername(e.target.value)}} required />
            </FormGroup>
            <FormGroup>
                <Label for='password'>Senha</Label>
                <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} required />
            </FormGroup>
            <Button type="submit" color="primary">Entrar</Button>
        </Form>
    )

}

export default Login