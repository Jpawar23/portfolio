import DrawerAppBar from "../Components/Navbar"
import About from "./AboutScreen"
import ContactSection from "./ContactScreen"
import ProjectsSection from "./ProjectSection"
import Footer from "./Footer";
export const HomeScreen = () => {
    return (
        <>
            <DrawerAppBar />
            <About />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    )
}


// import { Box, Container } from "@mui/material";
// import DrawerAppBar from "../Components/Navbar";
// import About from "./AboutScreen";
// import ProjectsSection from "./ProjectSection";

// export const HomeScreen = () => {
//     return (
//         <>
//             <DrawerAppBar />

//             <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//                 <Box sx={{ mb: 6 }}>
//                     <About />
//                 </Box>

//                 <Box sx={{ mb: 6 }}>
//                     <ProjectsSection />
//                 </Box>
//             </Container>
//         </>
//     );
// }
