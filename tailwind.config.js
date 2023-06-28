/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "p-cyan": "hsl(180, 66%, 49%)",
      "p-violet-dark": "hsl(257, 27%, 26%)",
      "s-red": "hsl(0, 87%, 67%)",
      "n-gray": "hsl(0, 0%, 75%)",
      "n-violet-gray": "hsl(257, 7%, 63%)",
      "n-blue-vdark": "hsl(255, 11%, 22%)",
      "n-violet-vdark": "hsl(260, 8%, 14%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mobile: "url('/images/bg-boost-mobile.svg')",
        desktop: "url('/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
