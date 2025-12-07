// utils/confettiService.ts
import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ["#4299e1", "#667eea", "#764ba2", "#ed64a6"],
    particleCount: 50,
    scalar: 1.2,
  };

  // Multiple burst effects
  const fire = (particleRatio: number, opts: any) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(defaults.particleCount * particleRatio),
    });
  };

  // Main burst
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  // Add some floating particles
  setTimeout(() => {
    fire(0.2, {
      spread: 150,
      startVelocity: 15,
      gravity: 0.5,
      decay: 0.9,
      scalar: 1.5,
      colors: ["#4299e1", "#667eea"],
    });
  }, 100);

  // Side bursts
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
      colors: ["#4299e1", "#667eea"],
    });

    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
      colors: ["#764ba2", "#ed64a6"],
    });
  }, 200);
};

export const triggerMiniConfetti = () => {
  confetti({
    particleCount: 30,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#4299e1", "#667eea"],
    scalar: 0.8,
  });
};
