import About from "./components/About";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#000015]">
    <Nav/>
    <Profile />
    <About/>
    <Skills />
    <Experience />
    <Projects/>
    </div>
  );
}

export default App;
