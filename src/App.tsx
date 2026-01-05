import './App.css'
import Navigation from './Navigation';
import Skills from './Skills';
import Projects from './Projects';
import MeImages from './MeImages';

// https://react-bootstrap.netlify.app/docs/components/

function App() {
  return (
    <>
      <Navigation />
      <div className="content-header">
        <h1>Cameron Zifcak's Portfolio</h1>
        <p>
          I'm a computer science student passionate about building robust, 
          scalable software for fast-moving, 
          user-facing platforms where thoughtful engineering 
          decisions directly impact thousands of users and create a meaningful impact.
        </p>
      </div>
      <MeImages />
      <Skills />
      <Projects />
    </>
  )
}

export default App
