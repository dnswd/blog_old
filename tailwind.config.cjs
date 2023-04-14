/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        '135': '135deg'
      },
      transformOrigin: {
        'top-left-5-95': '5% 95%',
      },
      width: {
        "screen-50": '50vw',
        "screen-65": '65vw'
      },
      spacing: {
        'home-padding': '3.6rem',
        '40-rem': '40rem',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// calc(20px + (72px - 20px) * ((100vw - 640px) / (1536px - 640px)));