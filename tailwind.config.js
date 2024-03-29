/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["M PLUS Rounded 1c"],
      },
      fontWeight: {
        thin: 300,
        medium: 400,
        semidark: 500,
      },
      screens: {
        'xs' : '350px',
      }
    },
    
  },
  plugins: [],
};
