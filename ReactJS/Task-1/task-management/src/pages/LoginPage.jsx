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
        <>
            {/* Fixed Navbar */}
            <div style={styles.navbar}>
                <div style={styles.navbarTitle}>Task Manager</div>
                <div style={styles.navLinks}>
                    <Button style={styles.navButton} onClick={() => navigate('/login')}>Login</Button>
                    <Button style={styles.navButton} onClick={() => navigate('/signup')}>Signup</Button>
                    <Button style={styles.navButton} onClick={() => navigate('/tasks')}>Tasks</Button>
                    <Button style={styles.navButton} onClick={() => navigate('/')}>Logout</Button>
                </div>
            </div>

            {/* Login Form */}
            <div className="center" style={styles.center}>
                <div className="container" style={styles.container}>
                    <header>
                        <h1 style={styles.headerTitle}>Task Manager</h1>
                    </header>
                    <Typography variant="h4" gutterBottom align="center">
                        Login
                    </Typography>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({ errors, touched }) => (
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
                                            error={touched.email && !!errors.email}
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
                                            error={touched.password && !!errors.password}
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
        </>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#333',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
    },
    navbarTitle: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        gap: '15px',
    },
    navButton: {
        color: 'white',
        backgroundColor: '#444',
        '&:hover': {
            backgroundColor: '#575757',
        },
    },
    center: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '70px', // Add padding to prevent the form from being hidden under the navbar
    },
    container: {
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
    headerTitle: {
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default LoginPage;
