import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Password } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { registerSchema } from "../../validations/ResisterSchems";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

export default function Register() {


  const [serverErrors,setServerErrors] = useState([]);
 

  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm(
    {
      resolver:yupResolver(registerSchema)
    }
  );
  
  const RegisterForm = async(data)=>{
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
      console.log(response);
    }catch(error){
      setServerErrors(error.response.data.errors);
    }
  }
  return (
    <Box>
      <Typography component="h1" variant='h2'>
        Register
      </Typography>
      {serverErrors?.length > 0 ? serverErrors.map((error)=>
      <Typography color="error">{error}</Typography>) : ''}
      <Box onSubmit={handleSubmit(RegisterForm)} component = "form" sx={{marginTop:2 , display:'flex' , flexDirection:'column' , gap:2}}>
        <TextField fullWidth {...register("userName")} label = "userName" variant = "outlined" error={errors.userName}/>
        <TextField fullWidth {...register("fullName")} label = "full Name" variant = "outlined" error={errors.fullName}/>
        <TextField fullWidth {...register("email")} label = "email" variant = "outlined" error={errors.email}/>
        <TextField fullWidth {...register("phoneNumber")} label = "phoneNumber" variant = "outlined" error={errors.phoneNumber}/>
        <TextField fullWidth {...register("password")} label = "password" variant = "outlined" error={errors.password}/>
        <Button variant='contained' type='submit' disabled={isSubmitting}>
          {isSubmitting?<CircularProgress />:'Register'}
        </Button>
      </Box>
    </Box>
  )
}
