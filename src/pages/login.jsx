import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

const BASE_URL= "http://localhost:2000"

const Login = (props) => {
    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLogin, setLogin] = useState(false);

    const navigate = useNavigate();

    const onButtonLogin = () => {
        setLoading(true)
        Axios.get(BASE_URL + `/users?username=${username}&password=${password}`)
        .then(response => {
            if (!response.data.length) {
                setError(true);
                setLoading(false);
                return;
            }

            localStorage.setItem('token', response.data[0].UID);

            // if success
            navigate('/');
        }).catch(error => console.log('error : ', error))
    }

    // useEffect => Berjalan setiap ada perubahan
    // side effect => similiar with class component's lifecycle method (Berjalan terus saat ada perubahan)
    useEffect( () => {
        console.log('side effect');

        // check token
        const TOKEN = localStorage.getItem("token");
        if (!TOKEN) return
        
        setLogin(true);
    }, [])

    if (isLogin) {
        return <Navigate to="/" />
    }
    
    return (
        <div className="login-container">
            <h1>Sign in</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="input" 
                        placeholder="Enter username" 
                        value={username}
                        onChange={ e => setUsername(e.target.value) }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                { error ? <Alert variant="danger">Error : username or password doesn't match</Alert> : '' }

                <Button variant="primary" type="submit" onClick={onButtonLogin} disabled={loading}>
                    { loading ? <Spinner animation="border" variant="light" /> : 'Login' }
                </Button>
            </Form>
        </div>
    )
}

export default Login;