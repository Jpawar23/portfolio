import './input.css';
import { Home } from './Components/Home.jsx';
import { About } from './Components/About.jsx';
import { Projects } from './Components/Projects.jsx';
import { Experience } from './Components/Experience.jsx';
import { Contact } from './Components/Contact.jsx';
import { Footer } from './Components/Footer.jsx';
import { Header } from './Components/Header.jsx';
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
export default App;
