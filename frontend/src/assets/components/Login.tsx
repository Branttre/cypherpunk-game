import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';
import axios from 'axios';


const Login = () => {
    const {user}:any = useContext(UserContext)
    const {setUser}:any = useContext(UserContext)

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        let response = await axios.post('/user/login/', data)
        console.log(response.data.login)
        console.log(response.data.firstname)
        setUser({username: response.data.username, firstname: response.data.firstname})
        if (response.data.login) { 
        window.location.href = '/profile/'
        }
      };

return (
    

    <Container component="main" maxWidth="xs" sx={{ position:'absolute',left:'50%',transform:'translateX(-50%)',display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor:'black',
          padding:'10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'white' }}>
          <LockOutlinedIcon sx={{color:'black'}} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{color:'white'}}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            sx={{backgroundColor:'white'}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
            sx={{backgroundColor:'white'}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor:'white', color:'black' }}
          >
            Sign In
          </Button>
          <Grid container sx={{color:'white'}}>
            {/* <Grid item xs>
              <Link to = "/" style={{color:'white'}}>
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item sx={{justifyContent:'center'}}>
              <Link to ="/signup/" style={{color:'white',justifyContent:'center'}}>
            Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
       {/* <Copyright sx={{ mt: 8, mb: 4 }} />  */}
    </Container>
    );
    }

export default Login;
