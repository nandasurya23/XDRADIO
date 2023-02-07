/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      gray: "#EAEAEA",
      white: "#FFFFFF",
      dark: "#1E1E1E",
      "prime-1": "#013764",
      "prime-2": "#1ccad3",
      "prime-3": "#01223D",
      "prime-4": "#003054",
      "yellow-2": "#FBB034",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      XDPrime: ["XDPrime, sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
