import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LinearProgress from '@mui/material/LinearProgress';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup.string().required('Moe ai dạy mày để trống thế kia?')
            .test('should has at least two words', 'Please enter at least two words', value => {
                return value.split(' ').length >= 2
            }),
        email: yup.string().required('please enter your email')
            .email('PLease enter your valid email address'),
        password: yup.string().required('please enter your password')
            .min(6, 'Please enter at least 6 characters'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], 'your confirm password does not match'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    // const { isSubmitting } = form.formState

    return (
        <Box>
            {/* {isSubmitting && <LinearProgress />} */}

            <Avatar sx={{ margin: '2rem auto 1rem', backgroundColor: '#9c27b0' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', color: '#9c27b0', mb: 2 }}>
                Sign up
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Fullname"
                    {...register("fullName")}
                    InputProps={{ style: { fontSize: '1.6rem' } }}
                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                    error={!!errors.fullName?.message}
                />
                <Typography
                    sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                >
                    {errors.fullName?.message}
                </Typography>

                <TextField
                    fullWidth
                    label="Email"
                    {...register("email")}
                    InputProps={{ style: { fontSize: '1.6rem' } }}
                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                    sx={{ mt: 2 }}
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

                <TextField
                    fullWidth
                    label="Confirm password"
                    {...register("confirmPassword")}
                    InputProps={{ style: { fontSize: '1.6rem' } }}
                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                    sx={{ mt: 2 }}
                    error={!!errors.confirmPassword?.message}
                />
                <Typography
                    sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                >
                    {errors.confirmPassword?.message}
                </Typography>

                <Button fullWidth variant="contained" sx={{ mt: 2, fontSize: '1.8rem', fontWeight: 'bold' }} type="submit">Register</Button>
            </form>
        </Box>
    );
}

export default RegisterForm;