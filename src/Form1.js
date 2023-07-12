import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import  { useState } from 'react';
import { Axios } from 'axios';


export default Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const { name, email, message } = formData;
    
      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit =async e =>  {
        console.log("name,",name);
        console.log("email,",email);
        console.log("message,",message);
        e.preventDefault();
        try {
          const res =await Axios({
            method:"GET",
            url:"",
            data:{
              email:email,
              name:name,
              message:message
            }

          })
        } catch (error) {
          
        }
        // form submission logic goes here
      };
    
  return (
    <div>
        <div class="container">
        <h1>Reach Us</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}required
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}required
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}required
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
  )}