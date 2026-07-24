import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Password } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginSchems } from "../../validations/LoginSchems";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useCounterStore } from "../../store/useCounterStore";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Login() {

const x = useCounterStore( (state)=> state.counter);
const setToken = useAuthStore((state)=> state.setToken);
const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);


  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(
    {
      resolver: yupResolver(loginSchems)
    }
  );

  const LoginForm = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`, data);
      setToken(response.data.accessToken);
      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed";

      setServerErrors([message]);
    }
  }
  return (
    <Box>
      <Typography component="h1" variant='h2'>
        Login -- {x}
      </Typography>
      {serverErrors?.length > 0
        ? serverErrors.map((error, index) => (
          <Typography key={index} color="error">
            {error}
          </Typography>
        ))
        : null}
      <Box onSubmit={handleSubmit(LoginForm)} component="form" sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>

        <TextField fullWidth {...register("email")} label="email" variant="outlined" error={errors.email} />
        <TextField fullWidth {...register("password")} label="password" variant="outlined" error={errors.password} />
        <Button variant='contained' type='submit' disabled={isSubmitting} >
          {isSubmitting ? <CircularProgress /> : 'Login'}
        </Button>
      </Box>
    </Box>
  )
}
