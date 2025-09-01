import Particles from "react-tsparticles";

function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#0F1624",    // dark background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: true, mode: "repulse" }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#38BDF8" }, /* blue shade, change as needed */
          links: {
            color: "#38BDF8",
            distance: 140,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" }
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 3 }
        },
        detectRetina: true
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0
      }}
    />
  );
}
