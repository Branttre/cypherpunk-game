import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import BackgroundPixels from "../resources/BackgroundPixels.jpeg";

function SignUp() {
    const handleSubmit = (event:any) => {
      event.preventDefault();
      const newData = new FormData(event.currentTarget);
      axios.post('', newData)
      alert(`Welcome ${newData.get('firstName')} Please go to sign in page to login.`)
      // console.log(newData)
      // console.log({
      //   firstName: newData.get('firstName'),
      //   lastName : newData.get('lastName'),
      //   email: newData.get('email'),
      //   password: newData.get('password'),
      // });
    };
  
    return (
      <>
      <div style={{backgroundImage: `url('${BackgroundPixels}')`,backgroundSize:'100% 100%',minHeight:'94vh',minWidth:'100vw',position: "absolute",backgroundRepeat: 'no-repeat',zIndex:'1'}}>
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    sx={{backgroundColor:'white'}}
                    variant="outlined"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    sx={{backgroundColor:'white'}}
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{backgroundColor:'white'}}
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{backgroundColor:'white'}}
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'white', color:'black' }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to = "/" style={{color:'white',justifyContent:'center'}}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        </div> 
        </>
    );
  }
  
  export default SignUp;