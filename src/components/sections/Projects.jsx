import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Terraform Build Image{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                <p>
                  This project demonstrates how to use Terraform to automate
                  building and running a custom Docker container. Terraform
                  provisions Docker resources including images and containers
                  directly on your local machine.
                </p>
                <li>Uses the Kreuzwerker/docker Terraform provider.</li>
                <li>Builds a custom Docker image from a local Dockerfile.</li>
                <li>Runs a container from the built image.</li>
                <li>Maps ports and auto-restarts on failure.</li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Docker", "Dockerfile", "Terraform", "Local Automation"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anj13Niki/terraform-build-image"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                AWS Automated Infra with Terraform
              </h3>
              <p className="text-gray-400 mb-4">
                <p>
                  This project automates the creation of core AWS infrastructure
                  using Terraform. It is designed for easy setup of a
                  production-ready environment, including VPC, EC2, Security
                  Groups, Load Balancer, S3, and IAM roles/policies.
                </p>
             
                
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "AWS",
                  "Shell Script",
                  "Terraform"
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anj13Niki/aws-infra-automated-terraform"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">MySQL + Adminer with Docker Compose</h3>
              <p className="text-gray-400 mb-4">
                <p>
                 This project sets up a local development environment using Docker Compose with:
                </p>
                <li>Set up MySQL database and Adminer UI using Docker containers.</li>
                <li>Used Docker Compose to define services, networks, and volumes.</li>
                <li>Connected Adminer to MySQL for database management via browser.</li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "MySQL",
                  "Adminer",
                  "Docker",
                  "Docker Compose"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anj13Niki/mysql-adminer-docker"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Node.js + Django App with Docker Compose
              </h3>
              <p className="text-gray-400 mb-4">
                <li>
                  Deployed a full-stack application using Docker Compose with Node.js frontend and Django backend.
                </li>
                <li>
                  Created separate Dockerfiles and services for each part of the app.
                </li>
                <li>Set up communication between services using Docker Compose networking.</li>
                <li>Used environment variables and volumes for configuration and data persistence.</li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "MySQL",
                  "Django",
                  "Docker",
                  "Docker Compose"
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Anj13Niki/notes-app-django-docker"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
