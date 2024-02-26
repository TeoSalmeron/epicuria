import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material'
import axios from "axios"
import { Navigate } from "react-router-dom"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formStatus, setFormStatus] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.post("http://localhost:3001/administrator/login", { email, password })
        response = response.data
        if(response.err) {
            setFormStatus(response.msg)
        } else {
            localStorage.setItem("token", response.token)
            console.log(response.token)
            // window.location.replace("http://localhost:3001/administration")
        }
    }

    return (
        <Container component="main" maxWidth="s">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Connexion
                </Typography>
                <Typography component="h2" variant="h6" style={{
                    marginTop: '15px',
                    marginBottom: '15px',
                    color: "red"
                }}>
                    {formStatus}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        type='email'
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Se connecter
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage
