import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const WhiteParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0F0F0F",
        },
      },

      fpsLimit: 120,
      interactivity: {
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },

      particles: {
        color: {
          value: [
            "#1F7585",
            "#7F00D2",
            "#6b00ab",
            "#456a8f",
            "#456a8f",
            "#302a5c",
            "#7f8782",
            "#ae615f",
            "#3a5688",
            "#5e223f",
            "#8e7342",
          ],
        },
        move: {
          direction: "",
          enable: true,
          outModes: {},
          random: true,
          speed: 13,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 20,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 100, max: 400 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        ></Particles>
      </>
    );
  }

  return <></>;
};

export default WhiteParticles;
