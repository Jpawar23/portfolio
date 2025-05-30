import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
const role = [
    "Frontend Developer",
    "web Developer",
    "Reactjs Developer"
]
const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % role.length);
            console.log("role", currentRoleIndex);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                minHeight: '90vh',
                width: '100vw',
                bgcolor: '#f0f4f8',
                px: { xs: 2, md: 8, xl: 16 },
                py: { xs: 8, md: 12 },
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={4} alignItems="center">
                {/* Left Content */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            color: '#333',
                            fontSize: { xs: '2.25rem', md: '3rem', xl: '3.5rem' },
                            mb: 2,
                        }}
                    >
                        Hi, I’m Juhi Pawar
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ color: '#555', mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                    >
                        {role[currentRoleIndex]}
                        {/* Full Stack Web Developer */}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 4, maxWidth: 500 }}>
                        I craft modern, responsive websites that are fast, accessible, and built with the latest technologies.
                        {/* Bringing ideas to life with clean code and thoughtful design. */}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button variant="contained" color="primary" size="large">
                            View Projects
                        </Button>
                        <Button variant="outlined" color="primary" size="large">
                            Contact Me
                        </Button>
                    </Box>
                </Grid>

                {/* Right Image */}
                {/* <Grid item xs={12} md={6} textAlign="center">
                    <Box
                        component="img"
                        src="C:\Users\AroGeek11\Pictures\Screenshots\image.png.png"
                        alt="Coding illustration"
                        sx={{
                            width: '100%',
                            maxWidth: 450,
                            mx: 'auto',
                        }}
                    />
                </Grid> */}
            </Grid>
        </Box>
    );
};

export default Hero;
