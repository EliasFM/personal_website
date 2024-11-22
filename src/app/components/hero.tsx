import { useState } from "react";

const Hero = () => {
  // Define state for background image
  const [background, setBackground] = useState(
    "/static/assets/SouthAfricanFevertree.jpg"
  );

  // Background options
  const backgrounds = {
    Fevertree: "/static/assets/SouthAfricanFevertree.jpg",
    Elephant: "/static/assets/DustSprayedElephant.jpg",
    Dusk: "/static/assets/BWLightRays.jpg",
    HDR: "/static/assets/HDR_Elephant.jpg",
    Lioness: "/static/assets/Lioness_Valley.jpg",
  };

  return (
    <div>
    <div
      className="hero min-h-screen relative transition-all duration-500"
      style={{
        backgroundImage: `${background}`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Elias Mendel</h1>
          <p className="mb-5 text-2xl">
            Software Engineer. Data Enthusiast. Photographer.
          </p>
          <a href="/data/Resume_Elias_Mendel_Software_Engineer.pdf" className="btn btn-primary"
              download>Download My Resume</a>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-top">
        <label tabIndex={0} className="btn btn-primary">
          Change Background (A Selection of My Photography)
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box shadow"
        >
          <li>
          <button
            onClick={() => setBackground(backgrounds.Fevertree)}
            className="btn btn-ghost"
          >
            Fevertree Sunrise
          </button>
          </li>
          <li>
          <button
            onClick={() => setBackground(backgrounds.Elephant)}
            className="btn btn-ghost ml-2"
          >
            Elephant Approaching
          </button>
          </li>
          <li>
          <button
            onClick={() => setBackground(backgrounds.Dusk)}
            className="btn btn-ghost ml-2"
          >
            Dusk
          </button>
          </li>
          <li>
          <button
            onClick={() => setBackground(backgrounds.HDR)}
            className="btn btn-ghost ml-2"
          >
            HDR Elephant
          </button>
          </li>
          <li>
          <button
            onClick={() => setBackground(backgrounds.Lioness)}
            className="btn btn-ghost ml-2"
          >
            Wandering Lioness
          </button>
          </li>
        </ul>
      </div>
      </div>

  );
};

export default Hero;
