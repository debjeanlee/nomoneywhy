module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `
            @import "./src/assets/css/variables.scss";
            @import "./src/assets/css/mixins.scss";
            @import "./src/assets/css/general.scss";
          `
        }
      }
    }
  };