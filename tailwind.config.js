import fontInter from 'tailwindcss-font-inter';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
 // tailwind.config.js
theme: {
  extend: {
    fontSize: {
      'fluid': 'clamp(1rem, 2vw, 2rem)', // optional
    }
  }
}
,
  plugins: [
    fontInter(), // enable Inter font plugin
  ],
};
