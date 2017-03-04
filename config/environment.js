/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'diamanias',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'style-src': "'self' 'unsafe-inline'",
      'connect-src': "'self' http://localhost:2999/ https://diadata.herokuapp.com",
      'frame-src': "'self' http://localhost:2999/",
      'img-src': ["'self'", "http://localhost:2999/", "https://s3.eu-central-1.amazonaws.com"], // TODO: cors violation - check if to use amazon or rails api instead
      'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com",
      "font-src":"'self' data: "
    },


    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV.host = 'http://localhost:2999';
   /* ENV['ember-cli-mirage'] = {
      enable: true
    } */
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/';
    ENV.locationType = 'auto';
    ENV.host = 'https://diadata.herokuapp.com';

  }

  return ENV;
};
