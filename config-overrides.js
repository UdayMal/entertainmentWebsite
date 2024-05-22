module.exports = function override(config, env) {
    if (config.devServer) {
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        // Custom middleware logic can be added here
        // Example:
        // devServer.app.use((req, res, next) => {
        //   console.log('Request URL:', req.url);
        //   next();
        // });
  
        return middlewares;
      };
    }
  
    return config;
  };
  