export const theme = {
  colors: {
    primary: "#4baa7d",
    gray: "#d9d9d9",
    black: "#121212",
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },

  media: {
    mobile: (styles) => `
      @media (max-width: 480px) {
        ${styles}
      }
    `,
    tablet: (styles) => `
      @media (max-width: 768px) {
        ${styles}
      }
    `,
    laptop: (styles) => `
      @media (max-width: 1024px) {
        ${styles}
      }
    `,
    desktop: (styles) => `
      @media (max-width: 1280px) {
        ${styles}
      }
    `,
  },
};
