import "./App.css";
import Skills from "./components/Skills";

function App() {
  const skills = [
    {
      name: "HTML",
      tech: "html",
    },
    {
      name: "CSS",
      tech: "css",
    },
    {
      name: "JavaScript",
      tech: "javascript",
    },
    {
      name: "Node",
      tech: "node",
    },
    {
      name: "React",
      tech: "react",
    },
    {
      name: "MongoDB",
      tech: "mongo",
    },
    {
      name: "Express",
      tech: "express",
    },
  ];
  return (
    <>
      <div id="container">
        <div id="card">
          <div id="picture">
            <img src="/profile-pic/profile.jpg" alt="Profile Card Picture" />
          </div>
          <div id="text">
            <h2>Noble Benjamin</h2>
            <p>
              Hello! I am a skilled MERN stack developer with expertise in HTML,
              CSS, and JavaScript. I have a passion for creating dynamic and
              user-friendly web applications that are both visually appealing
              and functional. With years of experience in front-end and back-end
              development, I am confident in my ability to tackle any project
              and deliver high-quality results
            </p>
          </div>
          <hr />
          <div id="skills">
            {skills.map((skill, index) =>{
              return <Skills skill={skill} key={index} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
