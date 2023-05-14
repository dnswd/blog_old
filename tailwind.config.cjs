/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        '135': '135deg'
      },
      backgroundColor: {
        "dark-canvas": "#161815"
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
      margin: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%'
      },
      typography: ({ theme }) => ({
        rose: {
          css: {
            '--tw-prose-body': theme('colors.rose[100]'),
            '--tw-prose-headings': theme('colors.rose[50]'),
            '--tw-prose-lead': theme('colors.rose[300]'),
            '--tw-prose-links': theme('colors.cyan[300]'),
            '--tw-prose-bold': theme('colors.rose[50]'),
            '--tw-prose-counters': theme('colors.rose[50]'),
            '--tw-prose-bullets': theme('colors.rose[50]'),
            '--tw-prose-hr': theme('colors.rose[50]'),
            '--tw-prose-quotes': theme('colors.zinc[300]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.rose[400]'),
            '--tw-prose-code': theme('colors.rose[100]'),
            '--tw-prose-pre-code': theme('colors.rose[100]'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': theme('colors.rose[100]'),
            '--tw-prose-td-borders': theme('colors.rose[100]'),
          },
        },
      }),
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
