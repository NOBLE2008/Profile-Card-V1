import "./App.css";

function App() {
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
            <div className="skill html">
              <p className="skills">HTML</p>
            </div>
            <div className="skill css">
              <p className="skills">CSS</p>
            </div>
            <div className="skill javascript">
              <p className="skills">JavaScript</p>
            </div>
            <div className="skill node">
              <p className="skills">Node</p>
            </div>
            <div className="skill react">
              <p className="skills">React</p>
            </div>
            <div className="skill mongo">
              <p className="skills">MongoDB</p>
            </div>
            <div className="skill express">
              <p className="skills">Express</p>
            </div>
            <div className="skill git">
              <p className="skills">Git</p>
            </div>
            <div className="skill sql">
              <p className="skills">SQL</p>
  
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
