"use client";

import { useParallax } from "@/hooks/useParallax";

export const FloatingShapes = () => {
  const scrollY = useParallax();

//   const shapes = [
//     {
//       id: 1,
//       size: "w-72 h-72",
//       position: "top-20 left-10",
//       gradient: "from-blue-500 to-purple-600",
//     },
//     {
//       id: 2,
//       size: "w-96 h-96",
//       position: "top-1/3 right-10",
//       gradient: "from-cyan-400 to-blue-500",
//     },
//     {
//       id: 3,
//       size: "w-64 h-64",
//       position: "bottom-20 left-1/4",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       id: 4,
//       size: "w-80 h-80",
//       position: "bottom-1/3 right-1/4",
//       gradient: "from-green-400 to-cyan-500",
//     },
//   ];



const shapes = [
  // Top-left half cut
  {
    id: 1,
    size: "w-[520px] h-[520px]",
    position: "-top-40 -left-40",
    gradient: "bg-[radial-gradient(circle,#10b981,transparent_70%)]",
  },

  // Bottom-right half cut
  {
    id: 2,
    size: "w-[520px] h-[520px]",
    position: "-bottom-40 -right-40",
    gradient: "bg-[radial-gradient(circle,#0ea5e9,transparent_70%)]",
  },

  // Top-right interior presence
  {
    id: 3,
    size: "w-[360px] h-[360px]",
    position: "top-24 right-[18%]",
    gradient: "bg-[radial-gradient(circle,#8b5cf6,transparent_75%)]",
  },

  // Bottom-left interior presence
  {
    id: 4,
    size: "w-[360px] h-[360px]",
    position: "bottom-28 left-[20%]",
    gradient: "bg-[radial-gradient(circle,#3b82f6,transparent_75%)]",
  },

  // Subtle mid accent (reduced dominance)
  {
    id: 5,
    size: "w-[260px] h-[260px]",
    position: "top-[48%] left-[48%]",
    gradient: "bg-[radial-gradient(circle,#6366f1,transparent_80%)]",
  },
];





  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
      ))}
    </div>
  );
};