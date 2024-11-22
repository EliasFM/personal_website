'use client';
import Hero from "./components/hero";
import projects from "./data/projects";
export default function Home() {
  return (
    <>
  {/* Page Content */}
  <div className="flex-grow">
    <div className="navbar bg-base-300 bg-opacity-100 rounded-box sticky top-0 z-10">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Elias Mendel</a>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              Menu
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <header>
      <Hero />
    </header>
  </div>
  <section id="projects" className="w-full mx-auto my-10">
    <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
    <div className="carousel w-full space-x-4 p-4 flex overflow-x-scroll snap-x snap-mandatory">
    {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-item snap-center flex-shrink-0 w-96 bg-base-300 shadow-xl"
            >
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    href={project.github}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    role="button"
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
    ))}
    </div>
  </section>
  {/* Footer */}
  <footer className="footer bg-base-300 bg-opacity-100 text-neutral-content items-center p-4">
    <aside className="grid-flow-col items-center">
      <p>© 2024 Elias Mendel. All rights reserved.</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://www.github.com/EliasFM" className="hover:opacity-75">
        <img
          src="/assets/logos/github-mark-white.svg"
          alt="GitHub"
          className="h-6 w-6"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/eliasmendel"
        className="hover:opacity-75"
      >
        <img
          src="/assets/logos/LI-In-Bug.png"
          alt="LinkedIn"
          className="h-6 w-7"
        />
      </a>
      <a href="mailto:elias.mendel@gmail.com" className="hover:opacity-75">
        <img
          src="/assets/logos/gmail-logo.png"
          alt="Gmail"
          className="h-6 w-6"
        />
      </a>
    </nav>
  </footer>
</>
  );
}
