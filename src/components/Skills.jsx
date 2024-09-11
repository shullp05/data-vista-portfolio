const skills = [
  { name: "Power BI", level: 90 },
  { name: "Tableau", level: 85 },
  { name: "D3.js", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Python", level: 70 },
  { name: "R", level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Skills
        </h2>
        <div className="mt-12 space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;