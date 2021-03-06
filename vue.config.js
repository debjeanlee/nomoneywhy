module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `
            @import "./src/assets/css/variables.scss";
          `
        }
      }
    }
  };