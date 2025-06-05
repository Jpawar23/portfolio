import { Box, Typography, Chip, Stack, Divider } from '@mui/material';

const techStack = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
    'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Material UI',

];

const About = () => {
    return (
        <Box
            sx={{
                bgcolor: '#f9f9f9',
                py: 8,
                px: { xs: 3, md: 10 },
                minHeight: '100vh',
            }}
            id="about"
        >
            {/* Title */}
            <Typography
                variant="h4"
                sx={{ textAlign: 'center', fontWeight: 'bold', mb: 3 }}
            >
                About Me
            </Typography>

            {/* Introduction */}
            <Typography
                variant="body1"
                sx={{ color: '#444', fontSize: '1.1rem', maxWidth: '900px', mx: 'auto', mb: 3, textAlign: 'center' }}
            >
                {/* I’m a full stack web developer with a passion for building performant, scalable,
                and user-friendly web applications. With strong experience in both frontend and backend
                technologies, I enjoy turning complex challenges into elegant, efficient solutions. */}
                I’m a MERN stack web developer with a strong focus on building fast, scalable, and intuitive web applications.
                I specialize in frontend development using React.js and enjoy bringing seamless user experiences to life. With solid experience
                in MongoDB, Express.js, Node.js, and React, I love turning complex ideas into clean, responsive, and maintainable solutions.
                I’m passionate about writing efficient code, solving real-world problems, and constantly learning to stay up to date with the latest technologies.


            </Typography>

            <Typography
                variant="body1"
                sx={{ color: '#444', fontSize: '1.1rem', maxWidth: '900px', mx: 'auto', mb: 4, textAlign: 'center' }}
            >
                I love working with modern JavaScript frameworks like React and Node.js, and I’m constantly
                exploring new tools to improve my craft. I value clean code, great UX, and efficient teamwork.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Tech Stack */}
            <Typography
                variant="h5"
                sx={{ textAlign: 'center', fontWeight: 'medium', mb: 2 }}
            >
                Tech Stack
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                justifyContent="center"
                sx={{ mb: 5 }}
            >
                {techStack.map((tech, index) => (
                    <Chip
                        key={index}
                        label={tech}
                        sx={{ fontSize: '0.9rem', px: 2, py: 0.5 }}
                        variant="outlined"
                        color="primary"
                    />
                ))}
            </Stack>

            {/* Fun Fact / Currently Learning */}
            <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
                <Typography variant="h6" sx={{ mb: 1, color: '#333' }}>
                    🎯 Currently Learning
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    Exploring TypeScript and advanced design systems. Diving deeper into performance optimization and accessibility.
                </Typography>
            </Box>
        </Box>
    );
};

export default About;
