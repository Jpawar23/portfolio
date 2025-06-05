// import React from "react";
// import {
//     Box,
//     Typography,
//     Card,
//     CardContent,
//     CardActions,
//     Button,
//     Grid,
//     Chip,
// } from "@mui/material";

// const projects = [
//     // {
//     //     id: 1,
//     //     title: "Web App",
//     //     description: "A React app for Attendance management.",
//     //     technologies: ["React", "Node.js"],
//     //     demoLink: "https://demo-webapp.com",
//     // },
//     {
//         id: 1,
//         title: "Attendance Dashboard",
//         description: "A React-based dashboard for managing and tracking employee attendance with real-time updates",
//         technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind Css"],
//         role: "Frontend Developer",
//         demoLink: "https://demo-mobileapp.com",
//         githubLink: "https://github.com/Jpawar23",

//     },

//     {
//         id: 2,
//         title: "Vrromo Dashboard",
//         description: "A secure ride tracking dashboard developed for a client,featuring real-time vehicle location, route animations, and ride status management using React, Node.js, and Google Maps API.",
//         technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Tailwind Css"],
//         role: "Frontend Developer",
//         demoLink: "https://demo-mobileapp.com",
//         githubLink: "https://github.com/Jpawar23"
//     },
//     {
//         id: 3,
//         title: "API Development",
//         description: "RESTful API for e-commerce platform.",
//         technologies: ["Node.js", "Express"],
//         demoLink: "https://github.com/user/api-project",
//     },

// ];

// export default function ProjectsSection() {
//     return (
//         <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Projects
//             </Typography>

//             <Grid container spacing={4} justifyContent="center">
//                 {projects.map(({ id, title, description, technologies, demoLink }) => (
//                     <Grid item xs={12} sm={6} md={4} key={id}>
//                         <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
//                             <CardContent sx={{ flexGrow: 1 }}>
//                                 <Typography variant="h6" component="div" gutterBottom>
//                                     {title}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary" paragraph>
//                                     {description}
//                                 </Typography>
//                                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                                     {technologies.map((tech) => (
//                                         <Chip key={tech} label={tech} size="small" />
//                                     ))}
//                                 </Box>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     size="small"
//                                     color="primary"
//                                     href={demoLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     View Demo
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>

//             <Box sx={{ textAlign: "center", mt: 4 }}>
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => alert("Load more projects...")}
//                 >
//                     View More Projects
//                 </Button>
//             </Box>
//         </Box>
//     );
// }



// import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from "@mui/material";

// const projects = [
//     {
//         id: 1,
//         title: "Attendance Dashboard",
//         description: "A React-based dashboard for managing and tracking employee attendance with real-time updates.",
//         technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind Css"],
//         role: "Frontend Developer",
//         demoLink: "https://demo-mobileapp.com",
//         githubLink: "https://github.com/Jpawar23",
//     },
//     {
//         id: 2,
//         title: "Vrromo Dashboard",
//         description: "A secure ride tracking dashboard developed for a client, featuring real-time vehicle location, route animations, and ride status management using React, Node.js, and Google Maps API.",
//         technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Tailwind Css"],
//         role: "Frontend Developer",
//         demoLink: "https://demo-mobileapp.com",
//         githubLink: "https://github.com/Jpawar23",
//     },
//     {
//         id: 3,
//         title: "API Development",
//         description: "RESTful API for e-commerce platform.",
//         technologies: ["Node.js", "Express"],
//         demoLink: "https://github.com/user/api-project",
//     },
// ];

// export default function ProjectsSection() {
//     return (
//         <Box sx={{ maxWidth: 500, mx: "auto", p: 3 }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Projects
//             </Typography>

//             <Grid container spacing={4}>
//                 {projects.map(({ id, title, description, technologies, demoLink, githubLink }) => (
//                     <Grid item xs={12} sm={6} md={4} key={id}>
//                         <Card
//                             sx={{
//                                 height: "100%",
//                                 display: "flex",
//                                 flexDirection: "column",
//                             }}
//                         >
//                             <CardContent sx={{ flexGrow: 1 }}>
//                                 <Typography variant="h6" gutterBottom>
//                                     {title}
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     color="text.secondary"
//                                     sx={{
//                                         mb: 2,
//                                         overflow: "hidden",
//                                         textOverflow: "ellipsis",
//                                     }}
//                                 >
//                                     {description}
//                                 </Typography>
//                                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                                     {technologies.map((tech) => (
//                                         <Chip key={tech} label={tech} size="small" />
//                                     ))}
//                                 </Box>
//                             </CardContent>

//                             <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
//                                 <Button
//                                     size="small"
//                                     color="primary"
//                                     href={demoLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     View Demo
//                                 </Button>
//                                 {githubLink && (
//                                     <Button
//                                         size="small"
//                                         color="secondary"
//                                         href={githubLink}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         GitHub
//                                     </Button>
//                                 )}
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>

//             {/* <Box sx={{ textAlign: "center", mt: 4 }}>
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => alert("Load more projects...")}
//                 >
//                     View More Projects
//                 </Button>
//             </Box> */}
//         </Box>
//     );
// }


import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
} from "@mui/material";

const projects = [
    {
        id: 1,
        title: "Attendance Dashboard",
        description: "A React-based dashboard for managing and tracking employee attendance.",
        // description: "A React-based",

        technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
        role: "Frontend Developer",
        demoLink: "https://demo-mobileapp.com",
        githubLink: "https://github.com/Jpawar23",
    },
    {
        id: 2,
        title: "Vromo Dashboard",
        description: "A ride tracking dashboard.",
        // description: "A React-based",

        technologies: ["React.js", "TypeScript", "Node.js", "Google Maps API"],
        role: "Frontend Developer",
        demoLink: "https://demo-mobileapp.com",
        githubLink: "https://github.com/Jpawar23",
    },
    // {
    //     id: 3,
    //     title: "API Development",
    //     description: "A React-based",
    //     technologies: ["Node.js", "Express"],
    //     demoLink: "https://github.com/user/api-project",
    // },
];

export default function ProjectsSection() {
    return (

        <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", p: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {projects.map(({ id, title, description, technologies, demoLink, githubLink }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        mb: 2,
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: "vertical"
                                    }}
                                >
                                    {description}
                                </Typography>

                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {technologies.map((tech) => (
                                        <Chip key={tech} label={tech} size="small" />
                                    ))}
                                </Box>
                            </CardContent>

                            <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                                <Button
                                    size="small"
                                    color="primary"
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Demo
                                </Button>
                                {githubLink && (
                                    <Button
                                        size="small"
                                        color="secondary"
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>


    );
}
