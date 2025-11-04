import React, { useEffect, useRef } from "react";
const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.5,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        opacitySpeed: Math.random() * 0.015 + 0.005,
        direction: Math.random() > 0.5 ? 1 : -1,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#0a0d1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "black");
      gradient.addColorStop(1, "#030712");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Yonib-o‘chish (sinusoidal – tabiiyroq)
        const twinkle = Math.sin(star.twinklePhase) * 0.4 + 0.6;
        star.opacity = twinkle;
        star.twinklePhase += star.opacitySpeed;

        // Harakat (pastga sekin tushadi)
        star.y += star.speed;
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        // Yulduz chizish
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity})`; // Sovuq oq-ko‘k
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(100, 200, 255, 0.8)";
        ctx.fill();
        ctx.closePath();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Canvas – to‘q kosmik fon + yuradigan yulduzlar */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />


    </div>
  );
};

export default Home;