import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  // Define state for background image
  const [background, setBackground] = useState(
    "./assets/LionessValley.jpg"
  );

  // Background options
  const backgrounds = [
    { name: "Fevertree_Sunrise", src: "./assets/SouthAfricanFevertree.jpg" },
    { name: "Dusty_Elephant", src: "./assets/DustSprayedElephant.jpg" },
    { name: "Dusk", src: "./assets/BWLightRays.jpg" },
    { name: "HDR_Elephant", src: "./assets/HDRElephant.jpg" },
    { name: "Lioness_Valley", src: "./assets/LionessValley.jpg" },
  ];

  return (
    <div>
      {/* Preload All Images */}
      {backgrounds.map((bg, index) => (
        <div key={index} className="hidden">
          <Image src={bg.src} alt={bg.name} layout="fill" priority />
        </div>
      ))}
    <div
      className="hero min-h-screen relative transition-all duration-500"
      
      style={{
        backgroundImage: `url(${background})`,
      }}
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Elias Mendel</h1>
          <p className="mb-5 text-2xl">
            Software Engineer. Data Enthusiast. Photographer.
          </p>
          <a href="./Resume_Elias_Mendel_Software_Engineer.pdf" className="btn btn-primary"
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
           {backgrounds.map((bg, index) => (
            <li key={index}>
              <button
                onClick={() => setBackground(bg.src)}
                className="btn btn-ghost text-left"
              >
                {bg.name}
              </button>
            </li>
            ))}
        </ul>
      </div>
      </div>

  );
};

export default Hero;
