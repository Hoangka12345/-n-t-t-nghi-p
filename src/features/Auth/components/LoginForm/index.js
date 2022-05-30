import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LinearProgress from '@mui/material/LinearProgress';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = yup.object().shape({
        email: yup.string().required('please enter your email')
            .email('PLease enter your valid email address'),
        password: yup.string().required('please enter your password')
            .min(6, 'Please enter at least 6 characters'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    // const { isSubmitting } = form.formState

    return (
        <>
            {/* {isSubmitting && <LinearProgress />} */}

            <Avatar sx={{ margin: '2rem auto 1rem', backgroundColor: '#9c27b0' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', color: '#9c27b0', mb: 2 }}>
                Sign in
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Email"
                    {...register("email")}
                    InputProps={{ style: { fontSize: '1.6rem' } }}
                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                    error={!!errors.email?.message}
                />
                <Typography
                    sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                >
                    {errors.email?.message}
                </Typography>
                <TextField
                    fullWidth
                    label="Password"
                    {...register("password")}
                    InputProps={{ style: { fontSize: '1.6rem' } }}
                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                    sx={{ mt: 2 }}
                    error={!!errors.password?.message}
                />
                <Typography
                    sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                >
                    {errors.password?.message}
                </Typography>

                <Button fullWidth variant="contained" sx={{ mt: 2, fontSize: '1.8rem', fontWeight: 'bold' }} type="submit">Login</Button>
            </form>
        </>
    );
}

export default LoginForm;