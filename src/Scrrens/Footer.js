import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                textAlign: "center",
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                mb={1}
            >
                <Link
                    href="mailto:yourname@example.com"
                    color="inherit"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <EmailIcon sx={{ mr: 0.5 }} /> Email
                </Link>
                <Link
                    // href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <LinkedInIcon sx={{ mr: 0.5 }} /> LinkedIn
                </Link>
                <Link
                    // href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <GitHubIcon sx={{ mr: 0.5 }} /> GitHub
                </Link>
            </Stack>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Your Name
            </Typography>
        </Box>
    );
}
