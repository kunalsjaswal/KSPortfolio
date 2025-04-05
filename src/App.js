import { useRef } from "react";
import { AppContainerStyle } from "./AppStyle";
import Navbar from "./common/components/navbar/Navbar";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Work from "./components/work/Work";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log(ref.current);
    
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorkSection = (index) => {
    const refs = [experienceRef, skillsRef, projectRef];

    scrollToSection(refs[index]);
  }

  return (
    <AppContainerStyle>
      <section className="navbar-fixed">
        <Navbar
          onAboutClick={() => scrollToSection(aboutRef)}
          onContactClick={() => scrollToSection(contactRef)}
          onExperienceClick={() => scrollToWorkSection(0)}
          onSkillsClick={() => scrollToWorkSection(1)}
          onProjectClick={() => scrollToWorkSection(2)}
        />
      </section>

      <section className="scroll-section">
        <div ref={aboutRef}>
          <Profile />
        </div>
        <Work experienceRef = {experienceRef}  skillsRef = {skillsRef} projectRef = {projectRef}/>
        <div ref={contactRef}>
          <About />
        </div>
      </section>
    </AppContainerStyle>
  );
}

export default App;
