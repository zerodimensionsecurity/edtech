

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

interface CarouselSlide {
  id: number;
  // Use a Tailwind gradient class for backgrounds to avoid missing asset imports
  bg: string;
  badge: {
    icons: string[];
    text: string;
    reward?: string;
  };
  logo: string;
  title: string;
  subtitle: string;
  duration?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    bg: "from-purple-600 via-pink-500 to-orange-400",
    badge: {
      icons: ["🔷", "×", "📊"],
      text: "Earn up to",
      reward: "$75 000",
    },
    logo: "ZIGChain",
    title: "DUALDEFENSE CONTEST",
    subtitle: "Duration: 19 Dec - 15 Jan",
  },
  {
    id: 2,
    bg: "from-sky-600 via-cyan-500 to-emerald-400",
    badge: {
      icons: ["🔷", "×", "💧"],
      text: "Learn more about how to",
      reward: "protect your Sui project",
    },
    logo: "Sui Foundation",
    title: "SECURITY EXPANSION PROGRAM",
    subtitle: "vs HackenProof",
  },
  {
    id: 3,
    bg: "from-indigo-700 via-violet-600 to-fuchsia-500",
    badge: {
      icons: ["🔷", "×", "⚡"],
      text: "Up to",
      reward: "$100 000",
    },
    logo: "DeFi Protocol",
    title: "BUG BOUNTY PROGRAM",
    subtitle: "Ongoing security initiative",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Main carousel card */}
          <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden">
            {/* Background gradient (replaces missing static assets) */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slides[currentSlide].bg}`}
            />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Badge - top right */}
            <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg">
              <div className="flex items-center gap-1 mb-2">
                {slides[currentSlide].badge.icons.map((icon, i) => (
                  <span key={i} className="text-lg">{icon}</span>
                ))}
                <button className="ml-2 w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">{slides[currentSlide].badge.text}</p>
              <p className="text-lg lg:text-xl font-bold text-foreground">
                {slides[currentSlide].badge.reward}
              </p>
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">
                {slides[currentSlide].logo}
              </h3>
              
              {/* Title bar */}
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-3 mt-4">
                <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] text-foreground">
                  {slides[currentSlide].title}
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-muted-foreground mt-4">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-6 bg-foreground"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
