export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Dark Blue
        secondary: '#3b82f6', // Light Blue
        accent: '#f97316', // Orange Accent
        background: '#f9fafb', // Light Background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
