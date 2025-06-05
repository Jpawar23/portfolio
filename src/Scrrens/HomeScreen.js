import DrawerAppBar from "../Components/Navbar"
import About from "./AboutScreen"
import ContactSection from "./ContactScreen"
import ProjectsSection from "./ProjectSection"
import Footer from "./Footer";
export const HomeScreen = () => {
    // return (
    //     <>
    //         <DrawerAppBar />
    //         <About />
    //         <ProjectsSection />
    //         <ContactSection />
    //         <Footer />
    //     </>
    // )

    return (
        <>
            <DrawerAppBar />

            <div id="About">
                <About />
            </div>

            <div id="Project">
                <ProjectsSection />
            </div>

            <div id="Contact">
                <ContactSection />
            </div>

            <Footer />
        </>
    );
}
