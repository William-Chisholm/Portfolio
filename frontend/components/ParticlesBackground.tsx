'use client'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { loadLinksPreset } from "@tsparticles/preset-links"
import { useTheme } from '@mui/material/styles'

export default function ParticlesBackground() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [init, setInit] = useState(false);

  console.log({theme})

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the stars preset into the engine
      await loadStarsPreset(engine);
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "stars",
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: isDark ? "#000" : "#fff",
        },
      },
      particles: {
        color: {
          value: isDark ? "#fff" : '#000',
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
    }),
    [isDark]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
