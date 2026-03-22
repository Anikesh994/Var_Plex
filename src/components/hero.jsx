"use client";


import Link from "next/link";
import React, { useState, useEffect } from "react";
import FeaturesSection from "./features";



// THIS IS JUST FOR STATS ANIMATION
const useCountUp = (end, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(counter);
      } else {
        setValue(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
};

// THIS IS JUST FOR STATS ANIMATION
const formatStat = (num, raw) => {
  if (raw.includes("M")) return `${num.toFixed(0)}M+`;
  if (raw.includes("%")) return `${num.toFixed(1)}%`;
  if (raw.includes("s")) return `${num.toFixed(1)}s`;
  return num;
};








const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const tools = [
    { icon: "✂️", label: "Crop" },
    { icon: "📐", label: "Resize" },
    { icon: "🎨", label: "Adjust" },
    { icon: "🤖", label: "AI Tools" },
  ];

  const stats = [
    { num: "12M+", label: "Creatives" },
    { num: "0.3s", label: "Avg Process" },
    { num: "99.9%", label: "Uptime" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');

        @keyframes gradSpin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes canvasPulse {
          0%, 100% { opacity: 0.75; }
          50%       { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-1 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.10s both; }
        .anim-2 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .anim-3 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
        .anim-4 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .anim-5 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.70s both; }
        .anim-6 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.85s both; }

        .shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 0.55s ease;
        }
        .shimmer-btn:hover::after {
          transform: translateX(120%);
        }
      `}</style>

      {/* ── SECTION: fully transparent, no bg ── */}
      <section className="relative w-full">

        {/* ══════════════════════════════════
            CENTERED COLUMN — everything flows
            top → bottom, all centered
        ══════════════════════════════════ */}
        <div className="flex flex-col items-center text-center px-6 pt-32 pb-28 w-full">

          {/* 1 ── BADGE */}
          <div className="anim-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-400/5 mb-10">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-lime-400">
              2026 — AI-Assist Editing
            </span>
          </div>

          {/* 2 ── HEADLINE */}
          <h1
            className="anim-2 font-black leading-[0.88] tracking-tighter text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(58px, 10vw, 128px)",
            }}
          >
            <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Create
            </span>
            <br />
            <span className="text-white">Without</span>
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.18)" }}
            >
              Limits.
            </span>
          </h1>

          {/* 3 ── SUBTEXT */}
          <p className="anim-3 mt-8 text-lg md:text-xl leading-relaxed text-white/45 max-w-xl">
            AI-powered image editing that feels like{" "}
            <span className="text-white/80 font-medium">magic</span>. Crop,
            enhance, and transform visuals with{" "}
            <span className="text-white/80 font-medium">
              precision at the speed of thought
            </span>
            .
          </p>

          {/* 4 ── BUTTONS */}
          <div className="anim-4 flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/dashboard">
              <button
                className="shimmer-btn flex items-center gap-2 px-9 py-4 rounded-2xl bg-lime-400 text-[#080810] font-black text-base tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(163,230,53,0.4)] active:scale-95"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Start Creating
                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </Link>

            <button className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-white/55 text-base font-light backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25 hover:text-white">
              <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[10px]">
                ▶
              </span>
              Watch Demo
            </button>
          </div>

          {/* 5 ── STATS */}
          {/* <div className="anim-5 flex flex-wrap items-center justify-center gap-10 mt-14">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-10">
                <div className="text-center">
                  <div
                    className="text-3xl font-black text-white tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1">
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-white/10" />
                )}
              </div>
            ))}
          </div> */}

          <div className="anim-5 flex flex-wrap items-center justify-center gap-10 mt-14">
            {stats.map((s, i) => {
              const numericValue = parseFloat(s.num);
              const count = useCountUp(numericValue, 1800);

            return (
            <div key={i} className="flex items-center gap-10">
                <div className="text-center">
                  <div
                    className="text-3xl font-black text-white tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {formatStat(count, s.num)}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1">
                    {s.label}
                  </div>
                </div>
                       {i < stats.length - 1 && (
                         <div className="w-px h-10 bg-white/10" />
                       )}
                     </div>
                   );
                 })}
            </div>          


            {/* 6 ── DEMO CARD */}
          <div
            className="anim-6 mt-20 w-full max-w-3xl"
            style={{ perspective: "1400px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false);
              setMousePos({ x: 0, y: 0 });
            }}
            onMouseMove={handleMouseMove}
          >
            {/* Animated gradient border ring */}
            <div
              className="relative rounded-[30px] p-[2px] w-full"
              style={{
                background:
                  "linear-gradient(135deg, #a3e635, #22d3ee, #ec4899, #a3e635)",
                backgroundSize: "300% 300%",
                animation: "gradSpin 5s linear infinite",
              }}
            >
              {/* Card body */}
              <div
                className="rounded-[28px] bg-white/[0.06] backdrop-blur-2xl border border-white/[0.09] p-7"
                style={{
                  transform: hovered
                    ? `rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`
                    : "rotateX(0deg) rotateY(0deg)",
                  transition: hovered
                    ? "transform 0.08s linear"
                    : "transform 0.55s ease",
                  willChange: "transform",
                }}
              >
                {/* ── Top bar ── */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 bg-white/[0.08] border border-white/[0.12] px-3 py-1 rounded-full">
                    Pixxel Pro — Studio
                  </span>
                </div>

                {/* ── Canvas with mouse-tracked spotlight glow ── */}
                <div
                  className="relative rounded-2xl overflow-hidden h-64 mb-8"
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                  style={{ "--mx": "50%", "--my": "50%" }}
                >
                  {/* dark base so canvas reads clearly */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl" />

                  {/* colour mesh */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 65% 80% at 25% 50%, rgba(123,47,255,0.55), transparent), radial-gradient(ellipse 55% 65% at 75% 35%, rgba(0,229,255,0.4), transparent), radial-gradient(ellipse 50% 55% at 58% 75%, rgba(255,60,172,0.38), transparent)",
                      animation: "canvasPulse 7s ease-in-out infinite",
                    }}
                  />

                  {/* Fine grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Mouse spotlight — follows cursor inside canvas */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle 120px at var(--mx) var(--my), rgba(255,255,255,0.12), transparent 80%)",
                      transition: "background 0.05s linear",
                    }}
                  />

                  {/* Fake cursor dot that follows mouse */}
                  <div
                    className="absolute pointer-events-none w-5 h-5 rounded-full border-2 border-white/60 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                    style={{
                      left: "var(--mx)",
                      top: "var(--my)",
                      transform: "translate(-50%, -50%)",
                      transition: "left 0.06s linear, top 0.06s linear",
                      display: hovered ? "block" : "none",
                    }}
                  />

                  {/* Centre label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <p
                      className="text-white/85 font-black text-2xl tracking-tight drop-shadow-lg"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Your Canvas
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-white/35">
                      Drop anything here
                    </p>
                  </div>
                </div>

                {/* ── Tool tiles ── */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {tools.map((tool, i) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center gap-2 bg-white/[0.06] hover:bg-lime-400/10 border border-white/[0.1] hover:border-lime-400/40 backdrop-blur-md rounded-2xl py-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {tool.icon}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 group-hover:text-lime-400 transition-colors duration-200 font-semibold">
                        {tool.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ── Status bar ── */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635] animate-pulse" />
                    <span className="text-[12px] font-medium text-white/50">AI Engine Active</span>
                  </div>
                  {/* Export button — dark bg so it's always visible */}
                  <button className="text-[12px] font-bold tracking-wide text-white bg-lime-500 hover:bg-lime-400 px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(163,230,53,0.35)] hover:shadow-[0_6px_28px_rgba(163,230,53,0.55)] transition-all duration-200 active:scale-95">
                    ↑ Export
                  </button>
                </div>

              </div>
            </div>
          </div>


          {/* features section */}
          <FeaturesSection/>




          {/* end card */}

        </div>
        {/* end centered column */}

      </section>
    </>
  );
};

export default HeroSection;




// ANOTHER CARD DESIGN

        //  <div
        //     className="anim-6 mt-20 w-full max-w-2xl"
        //     style={{ perspective: "1400px" }}
        //     onMouseEnter={() => setHovered(true)}
        //     onMouseLeave={() => {
        //       setHovered(false);
        //       setMousePos({ x: 0, y: 0 });
        //     }}
        //     onMouseMove={handleMouseMove}
        //   >
        //    {/* Animated gradient border ring */}
        //     <div
        //       className="relative rounded-[30px] p-[2px] w-full"
        //       style={{
        //         background:
        //           "linear-gradient(135deg, #a3e635, #22d3ee, #ec4899, #a3e635)",
        //         backgroundSize: "300% 300%",
        //         animation: "gradSpin 5s linear infinite",
        //       }}
        //     >
        //       {/* Card body — glass, NO dark bg, shapes bleed through */}
        //       <div
        //         className="rounded-[28px] bg-white/[0.05] backdrop-blur-2xl border border-white/[0.08] p-7"
        //         style={{
        //           transform: hovered
        //             ? `rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`
        //             : "rotateX(0deg) rotateY(0deg)",
        //           transition: hovered
        //             ? "transform 0.08s linear"
        //             : "transform 0.55s ease",
        //           willChange: "transform",
        //         }}
        //       >
        //         {/* ── Top bar ── */}
        //         <div className="flex items-center justify-between mb-6">
        //           <div className="flex gap-1.5">
        //             <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        //             <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        //             <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        //           </div>
        //           <span className="text-[10px] uppercase tracking-widest text-white/25 bg-white/[0.05] border border-white/[0.07] px-3 py-1 rounded-full">
        //             Pixxel Pro — Studio
        //           </span>
        //         </div>

        //      {/* ── Canvas ── */}
        //         <div className="relative rounded-2xl overflow-hidden h-60 mb-8">
        //           <div className="absolute inset-0 bg-black/25" />
        //           <div
        //             className="absolute inset-0"
        //             style={{
        //               background:
        //                 "radial-gradient(ellipse 65% 80% at 25% 50%, rgba(123,47,255,0.55), transparent), radial-gradient(ellipse 55% 65% at 75% 35%, rgba(0,229,255,0.4), transparent), radial-gradient(ellipse 50% 55% at 58% 75%, rgba(255,60,172,0.38), transparent)",
        //               animation: "canvasPulse 7s ease-in-out infinite",
        //             }}
        //           />
        //         {/* Fine grid inside canvas */}
        //           <div
        //             className="absolute inset-0 opacity-[0.07]"
        //             style={{
        //               backgroundImage:
        //                 "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        //               backgroundSize: "32px 32px",
        //             }}
        //           />
        //           <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        //             <p
        //               className="text-white/80 font-black text-2xl tracking-tight"
        //               style={{ fontFamily: "'Syne', sans-serif" }}
        //             >
        //             Your Canvas
        //             </p>
        //             <p className="text-[10px] uppercase tracking-widest text-white/30">
        //               Drop anything here
        //             </p>
        //           </div>
        //         </div>

        //         {/* ── Tool tiles — inside card, bottom, breathing room ── */}
        //         <div className="grid grid-cols-4 gap-3 mb-6">
        //           {tools.map((tool, i) => (
        //             <div
        //               key={i}
        //               className="group flex flex-col items-center gap-2 bg-white/[0.05] hover:bg-lime-400/10 border border-white/[0.07] hover:border-lime-400/30 backdrop-blur-md rounded-2xl py-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
        //             >
        //               <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
        //                 {tool.icon}
        //               </span>
        //               <span className="text-[9px] uppercase tracking-widest text-white/30 group-hover:text-lime-400 transition-colors duration-200">
        //                 {tool.label}
        //               </span>
        //             </div>
        //           ))}
        //         </div>

        //         {/* ── Status bar ── */}
        //         <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
        //           <div className="flex items-center gap-2">
        //             <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635] animate-pulse" />
        //             <span className="text-[11px] text-white/30">AI Engine Active</span>
        //           </div>
        //           <button className="text-[11px] font-semibold tracking-wide text-lime-400 border border-lime-400/25 bg-lime-400/10 hover:bg-lime-400/20 hover:shadow-[0_0_20px_rgba(163,230,53,0.2)] px-4 py-1.5 rounded-full transition-all duration-200">
        //             ↑ Export
        //           </button>
        //         </div>

        //       </div>
        //     </div>
        //   </div> 