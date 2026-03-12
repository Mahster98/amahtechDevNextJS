import Landing from "@/components/Landing/Landing";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";


export default function Home() {
  return (
    <div className="App">
      <div className="landing">
        <Landing />
      </div>
      <div className='aboutMe' id="About-Me">
        <h1 className="title">About Me</h1>
        <AboutMe />
      </div>
      <div className="experienceDiv" id="Experience">
        <h1 className="title"> Experience </h1>
        <Experience />
      </div>
      <div className="projectDiv" id="Projects">
        <h1 className="title"> My Projects </h1>
        <Projects />
      </div>


      <Footer />
    </div>

  );
}