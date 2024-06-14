import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/MissionStatement.css';

const MissionStatement = () => {
  useEffect(() => {
    const canvas = document.getElementById('sparkCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 100;

    let particles = [];
    const colors = ['#0A9396', '#94D2BD', '#E9D8A6'];
    let animationFrameId;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let isHovered = false;
    let fadeTimeoutId;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        if (isHovered) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = canvas.width / 10;
          const force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            this.speedX += forceDirectionX * force * 0.1;
            this.speedY += forceDirectionY * force * 0.1;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (!isHovered && this.alpha > 0) {
          this.alpha -= 0.01;
        }

        if (this.size > 0.2) this.size -= 0.01;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
      }
    }

    function handleParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.3 || particles[i].alpha <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    function startAnimation() {
      isHovered = true;
      clearTimeout(fadeTimeoutId);
      init();
      animate();
    }

    function stopAnimation() {
      isHovered = false;
      fadeTimeoutId = setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 5000);
    }

    const container = document.querySelector('.mission-statement-container');
    container.addEventListener('mouseenter', startAnimation);
    container.addEventListener('mouseleave', stopAnimation);
    container.addEventListener('mousemove', (event) => {
      mouseX = event.offsetX;
      mouseY = event.offsetY;
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = 100;
      init();
    });

    return () => {
      container.removeEventListener('mouseenter', startAnimation);
      container.removeEventListener('mouseleave', stopAnimation);
      container.removeEventListener('mousemove', (event) => {
        mouseX = event.offsetX;
        mouseY = event.offsetY;
      });
      window.removeEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = 100;
        init();
      });
    };
  }, []);

  return (
    <div className="mission-statement-container">
      <canvas id="sparkCanvas"></canvas>
      <div className="mission-statement">
        <Typewriter
          words={['Creating innovative solutions for a better world.']}
          loop={1} // Typing once and stops
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default MissionStatement;
