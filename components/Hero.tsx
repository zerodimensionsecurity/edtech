"use client";

import { motion } from "framer-motion";
import { Target, Shield } from "lucide-react";
import ServiceCard from "./ServiceCard";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-3xl mb-12 lg:mb-16"
        >
          Expert web3 bug bounty and crowdsourced audit platform
        </motion.h1>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Service cards */}
          <div className="flex flex-col gap-6">
            <ServiceCard
              icon={
                <Target className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              }
              title="Run Bug Bounty Program"
              description="Be aware of vulnerabilities before blackhats exploit them."
              delay={0.1}
            />
            <ServiceCard
              icon={
                <Shield className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              }
              title="Get Crowdsourced Audit"
              description="Get your audit done by the web3 security community before mainnet."
              delay={0.2}
            />
          </div>

          {/* Right - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
