import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
});

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (values) => {
        const user = { email: values.email };
        dispatch(login(user));
        navigate('/tasks');
    };

    return (
        <div className="center" style={{ height: '100vh' }}>
            <div className="container" style={{ maxWidth: '400px', width: '100%' }}>
                <header>
                    <h1>Task Manager</h1>
                </header>
                <Typography variant="h4" gutterBottom align="center">
                    Login
                </Typography>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {() => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        variant="outlined"
                                        helperText={<ErrorMessage name="email" />}
                                        error={false}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="password"
                                        label="Password"
                                        fullWidth
                                        variant="outlined"
                                        helperText={<ErrorMessage name="password" />}
                                        error={false}
                                        type="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" fullWidth>
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginPage;
