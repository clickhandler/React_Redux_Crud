import React, { useState } from "react";
import { adduser } from "../Redux/actions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Adduser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const { name, email, contact, address } = state;
  const handleTextField = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !email || !contact) {
      setError("Please Fill The Form");
    } else {
      dispatch(adduser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <>
      
      <Button onClick={()=>navigate("/")}
          style={{
            color: "white",
            backgroundColor: "teal",
            margin: "10px",
            width: "100px",
          }}
        >
          Go Back
        </Button> 
     
      <h1>Add User</h1>
      {error&&<h3 style={{color:"red"}} >{error}</h3>}
      <form onSubmit={handleSubmit}>
      <Box

      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="standard-basic"
          name="name"
          type="text"
          onChange={handleTextField}
          label="Enter Name"
          variant="standard"
          value={name}
        />
        <br />
        <TextField
          id="standard-basic"
          name="email"
          type="email"
          onChange={handleTextField}
          label="Enter Email"
          variant="standard"
          value={email}
        />
        <br />
        <TextField
          id="standard-basic"
          name="contact"
          type="number"
          onChange={handleTextField}
          label="Enter contact"
          variant="standard"
          value={contact}
        />
        <br />
        <TextField
          id="standard-basic"
          name="address"
          type="text"
          onChange={handleTextField}
          label="Enter Address"
          variant="standard"
          value={address}
        />
        <br />
        <Button
          style={{
            color: "white",
            backgroundColor: "green",
            margin: "10px",
            width: "100px",
          }}
          type="submit"
        >
          Submit
        </Button>
        </Box>
      </form>
    </>
  );
};

export default Adduser;
