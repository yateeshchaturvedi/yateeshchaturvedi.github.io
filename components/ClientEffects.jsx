"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = [...document.querySelectorAll(".reveal")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 90, 300)}ms`;
      observer.observe(el);
    });

    const tiltCards = [...document.querySelectorAll(".tilt")];
    const tiltHandlers = tiltCards.map((card) => {
      const onMove = (event) => {
        const r = card.getBoundingClientRect();
        const x = (event.clientX - r.left) / r.width;
        const y = (event.clientY - r.top) / r.height;
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;
        card.style.transform = `perspective(850px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
        card.style.setProperty("--spot-x", `${x * 100}%`);
        card.style.setProperty("--spot-y", `${y * 100}%`);
      };
      const onLeave = () => {
        card.style.transform = "none";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return { card, onMove, onLeave };
    });

    const magneticBtn = document.querySelector(".magnetic");
    let onMagMove;
    let onMagLeave;
    if (magneticBtn) {
      onMagMove = (event) => {
        const rect = magneticBtn.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.15;
        const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.2;
        magneticBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      };
      onMagLeave = () => {
        magneticBtn.style.transform = "translate(0, 0)";
      };
      magneticBtn.addEventListener("mousemove", onMagMove);
      magneticBtn.addEventListener("mouseleave", onMagLeave);
    }

    const canvas = document.getElementById("constellation");
    let rafId = 0;
    let dots = [];
    let onResize;
    let animationOn = !document.hidden;

    if (canvas && !reduceMotion) {
      const ctx = canvas.getContext("2d");
      const mobile = window.innerWidth < 768;
      const DOT_COUNT = mobile ? 22 : 42;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const createDots = () => {
        dots = [];
        for (let i = 0; i < DOT_COUNT; i += 1) {
          dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
          });
        }
      };

      const draw = () => {
        if (!ctx || !animationOn) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(125,183,255,0.7)";

        for (let i = 0; i < dots.length; i += 1) {
          const dot = dots[i];
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < dots.length; j += 1) {
            const dot2 = dots[j];
            const dx = dot.x - dot2.x;
            const dy = dot.y - dot2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.strokeStyle = `rgba(85,246,203,${(120 - dist) / 600})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(dot2.x, dot2.y);
              ctx.stroke();
            }
          }
        }

        rafId = requestAnimationFrame(draw);
      };

      const onVisibilityChange = () => {
        animationOn = !document.hidden;
        if (animationOn && !rafId) {
          rafId = requestAnimationFrame(draw);
        }
      };

      resize();
      createDots();
      rafId = requestAnimationFrame(draw);
      onResize = () => {
        resize();
        createDots();
      };

      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibilityChange);

      return () => {
        observer.disconnect();
        tiltHandlers.forEach(({ card, onMove, onLeave }) => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
        if (magneticBtn && onMagMove && onMagLeave) {
          magneticBtn.removeEventListener("mousemove", onMagMove);
          magneticBtn.removeEventListener("mouseleave", onMagLeave);
        }
        if (onResize) window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    return () => {
      observer.disconnect();
      tiltHandlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
      if (magneticBtn && onMagMove && onMagLeave) {
        magneticBtn.removeEventListener("mousemove", onMagMove);
        magneticBtn.removeEventListener("mouseleave", onMagLeave);
      }
    };
  }, []);

  return null;
}