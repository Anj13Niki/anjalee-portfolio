import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const cloud = [
    "Linux",
    "Shell Scripting",
    "Ansible",
    "Docker",
    "Terraform",
    "YAML",
    "HCL(HashiCorp Configuration Language)",
    "Jenkins",
    "Git",
    "Oracle"
  ];

  const web = [
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "Material UI",
    "Figma"
  ];

  const languages = ["Python", "Java"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Resourceful and results-driven IT professional with 1 year of
              hands-on experience as a Database Administrator (DBA), combined
              with a strong foundation in DevOps tools, cloud platforms, and
              programming. Proficient in managing Linux environments and
              automating workflows using Shell Scripting, Docker, Terraform, and
              Ansible, with current focus on mastering Jenkins for CI/CD
              automation. Certified in AWS and Microsoft Azure, showcasing cloud
              proficiency in deploying, managing, and securing cloud-native
              applications. Additionally, possess solid working knowledge of
              Python and Java, and prior experience as a Full Stack Developer,
              bringing a well-rounded perspective to system architecture,
              development, and operations. Adept at problem-solving,
              cross-functional collaboration, and adapting to fast-paced
              environments to deliver scalable and efficient solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Languages Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud Related</h3>
                <div className="flex flex-wrap gap-2">
                  {cloud.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Web Related</h3>
                <div className="flex flex-wrap gap-2">
                  {web.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.TECH in Computer Science and Engineering </strong>{" "}
                  - Ambalika Institute of Management And Technology, Lucknow
                  (2019-2023) <br />
              
                </li>

                <p>
                 <b> Relevant Coursework: Data Structures & Algorithms, Operating
                  Systems, Web Development, DBMS, Computer Networks</b>
                </p>

                
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-400">
                    Cloud Support Engineer @<span className="text-yellow-400 font-semibold">Tech Mahindra</span>
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Managed and maintained databases on Oracle and PostgreSQL,
                      ensuring high availability, security, and performance.
                    </li>
                    <li>I have knowledge of MySQL databases as well.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">
                    Full Stack Developer @<span className="text-yellow-400 font-semibold">Amtech Software</span>
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Worked on a school ERP website using React.js for the
                      front-end, ensuring a user-friendly and intuitive
                      interface for students, teachers, and administrators.
                    </li>
                    <li>
                      Worked on features like attendance tracking, fee
                      management, timetable scheduling, and report generation.
                    </li>
                    <li>
                      Built backend services with Node.js and MySQL including
                      creating RESTful APIs to handle user authentication,
                      role-based access, and data processing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
