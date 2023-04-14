/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
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
      },
      typography: {
        DEFAULT: {
          css: {
            'font-size':
              'clamp(1.125rem, calc(1.125rem + ((1.25 - 1.125) * ((100vw - 20rem) / (96 - 20)))), 1.25rem)',
          },
        },
      },
    },
  },
  corePlugins: {
    fontSize: false,
},
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-fluid-type"),
  ],
};
