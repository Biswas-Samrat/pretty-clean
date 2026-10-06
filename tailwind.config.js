/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#C9A227",
          "purple-dark": "#9C7616",
          "purple-light": "#F4E5B2",
          teal: "#E7C968",
          "teal-light": "#F6F1D8",
          coral: "#C9A227",
          yellow: "#E7C968",
          cream: "#F6F6F4",
          dark: "#151515",
        },
        soft: "#F6F6F4",
        cream: "#F6F6F4",
        dark: "#151515",
        charcoal: "#151515",
        "charcoal-dark": "#0B0B0B",
        white: "#FFFFFF",
        border: "#E8E1D2",
        muted: "#5F5F5F",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        display: ['"Playfair Display"', "serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(21, 21, 21, 0.08)",
      },
      animation: {
        "slide-in": "slideIn 0.3s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
