"use client"
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // Customize particle options here
                particles: {
                    number: {
                        value: 50,
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
