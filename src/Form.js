import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Typography} from '@material-ui/core'


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7ollwai', 'template_vf2dgbu', form.current, {
        publicKey: 'Pn0ei-Ca1Di71_f43',
      })
      .then(
        () => {
          alert('WE WILL GET BACK TO YOU');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
      form.current.reset();
  };

  return (
    <center style={{'backgroundColor':'ButtonFace'}}>
      <br/>
      <br/>

      <Typography variant="h6">
          Fill the below form for any Occasions or invitation requests.
        </Typography>
        <Typography variant='h2' >Contact Form</Typography>
    <form  ref={form} onSubmit={sendEmail}>

      <TextField style={{"width":"450px","margin":"5px"}} required id="outlined-basic" label="Full_name" variant='outlined'  type="text" name="user_name" /><br/>
      <TextField style={{"width":"450px","margin":"5px"}} required id="outlined-basic" label="user_email" variant='outlined'  type="email" name="user_email" /><br/>
      <TextField style={{"width":"450px","margin":"5px"}} required id="outlined-basic" label="Event_info" variant='outlined'  name="message" /><br/>
      <Button type="submit" variant="contained" value="Send" color='primary' >Submit</Button>
     
        
    
    </form>
    <br/>
    <br/>
    </center>
  );
};

export default Form;




