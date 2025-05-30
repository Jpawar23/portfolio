import React from "react";
import {
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    Link,
    Stack,
    Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactSection() {
    return (
        <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h4" align="center" gutterBottom>
                Contact Me
            </Typography>

            <Grid
                container
                spacing={0}
                maxWidth="md"
                sx={{
                    mx: "auto",
                    mt: 4,
                    borderRadius: 2,
                    overflow: "hidden",
                }}
            >


                {/* Right Side: Contact Form */}
                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 4, height: "100%" }}>
                        <Typography variant="h6" gutterBottom>
                            Send a Message
                        </Typography>
                        <form noValidate autoComplete="off">
                            <TextField
                                label="Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Message"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Button variant="contained" color="primary">
                                    Send Message
                                </Button>
                            </Box>

                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
