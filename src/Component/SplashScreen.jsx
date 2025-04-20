import React from 'react';
import { motion } from 'framer-motion';

// Define symbols and their weights
const symbolWeights = [
  { symbol: '</>', weight: 2 },
  
];

// Create a flat array based on weights
const weightedSymbols = symbolWeights.flatMap(({ symbol, weight }) =>
  Array(weight).fill(symbol)
);

// Generate 50 random symbols based on weights
const symbols = Array.from({ length: 10 }, () =>
  weightedSymbols[Math.floor(Math.random() * weightedSymbols.length)]
);

const getRandomStyle = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  fontSize: `${12 + Math.random() * 20}px`,
});

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-yellow-50 z-50 flex flex-col justify-center items-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5.5, duration: 1 }}
    >
      {/* Floating Code Symbols */}
      {symbols.map((symbol, index) => {
        const style = getRandomStyle();
        return (
          <motion.span
            key={index}
            className="absolute text-black/20 font-mono pointer-events-none select-none"
            style={style}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 0.5,
            }}
          >
            {symbol}
          </motion.span>
        );
      })}

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-col items-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-semibold
          text-black tracking-wider font-sans text-shadow-xs">
          Leonard K B
        </h1>
        <p className="mt-4 text-gray-700 text-lg text-center">
           A Journey Through Innovation and Impact.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;