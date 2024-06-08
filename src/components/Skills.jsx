const Skills = ({skill}) => {
  return (
    <div className={`skill ${skill.tech}`}>
      <p className="skills">{skill.name}</p>
    </div>
  );
};

export default Skills;
