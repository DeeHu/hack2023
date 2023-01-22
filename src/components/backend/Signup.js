/* import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup() {
    const [db, setDb] = useState({});

    useEffect(() => {
        fetch('./db/accounts.json')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setDb(data)
          })
          .catch(error => console.log(error));
      }, []);


    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log("Form data: " + formData.name + formData.email) 
        console.log(db);
      }

    const handleSubmit = (e) => {
      console.log(e)
    }
  


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="signup">
    <TextField
          name="name"
          required
          id="outlined-required"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          required
          id="outlined-required"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
        name="password"
          required
          id="outlined-required"
          label="Password"
            value={formData.password}
            onChange={handleChange}
        />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
    </Box>
  );
} 

export default Signup; */