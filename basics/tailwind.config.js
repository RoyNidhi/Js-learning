/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      tablet: "992px",
      lg: "1025px",
      xl: "1281px",
      xxl: "1441px",
      xxxl: "1700px",
    },
    colors: {
      red: {
        400: "#FF0000",
        600: "#CB0837",
      },
      pink: {
        400: "#FF6384",
      },
      white: {
        100: "#fff",
      },
      orange: {
        600: "#FF7A00",
      },
      yellow: {
        600: "#B8A926",
      },
      black: {
        300: "#333333",
        400: "#252F3E",
        500: "#202830",
        600: "#000000",
      },
      grey: {
        200: "#E0E7ED",
        300: "#C3C5CA",
        400: "#CACACA",
        500: "#5C5E64",
        600: "#999999",
      },
      blue: {
        400: "#55B6E0",
        500: "#08B4CB",
        600: "#0087B5",
        700: "#0B06F4",
        // gradient:
        //   "linear-gradient(180deg, #eaf6fa 0%, rgba(242, 245, 249, 0) 100%)",
      },
      purple: {
        600: "8F00FF",
      },
      green: {
        600: "#05C501",
      },
    },
    // fontFamily: {
    //   robotoRegular: ['Roboto-Regular', 'arial'],
    //   robotoMedium: ['Roboto-Medium', 'arial'],
    //   robotoBold: ['Roboto-Bold', 'arial'],
    //   robotoBlack: ['Roboto-Black', 'arial'],
    // },
    borderRadius: {
      "radius-6": "6px",
      "radius-20": "20px",
      fullRounded: "50%",
    },
    boxShadow: {
      button: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
      normalButton: "0px 4px 10px 0px rgba(0, 135, 181, 0.20)",
      none: "none",
    },
    transitionProperty: {
      width: "width",
    },
    scrollbar: {
      thinner: "4px",
    },
    fontSize: {
      "t-12": "0.75rem",
      "t-14": "0.875rem",
      "t-16": "1rem",
      "t-18": "1.125rem",
      "t-20": "1.25rem",
      "t-24": "1.5rem",
      "t-26": "1.625rem",
      "t-32": "2rem",
      "t-60": "3.75rem",
    },
    // backgroundImage: {
    //   "login-background": "url('../src/assets/images/utility-banner.png')",
    // },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addComponents }) {
      addComponents({
        ".MuiAutocomplete-paper": {
          maxWidth: "100%",
        },
      });
    },
  ],
};
