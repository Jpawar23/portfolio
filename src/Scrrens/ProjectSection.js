import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Chip,
} from "@mui/material";

const projects = [
    {
        id: 1,
        title: "Web App",
        description: "A React app for task management.",
        technologies: ["React", "Node.js"],
        demoLink: "https://demo-webapp.com",
    },
    {
        id: 2,
        title: "Mobile App",
        description: "A Flutter app for fitness tracking.",
        technologies: ["Flutter", "Dart"],
        demoLink: "https://demo-mobileapp.com",
    },
    {
        id: 3,
        title: "API Development",
        description: "RESTful API for e-commerce platform.",
        technologies: ["Node.js", "Express"],
        demoLink: "https://github.com/user/api-project",
    },

];

export default function ProjectsSection() {
    return (
        <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {projects.map(({ id, title, description, technologies, demoLink }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {description}
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {technologies.map((tech) => (
                                        <Chip key={tech} label={tech} size="small" />
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert("Load more projects...")}
                >
                    View More Projects
                </Button>
            </Box>
        </Box>
    );
}
