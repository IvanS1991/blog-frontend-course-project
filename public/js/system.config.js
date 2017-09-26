System.config({
  transpiler: 'plugin-babel',
  map: {
      'plugin-babel': '/lib/systemjs-plugin-babel/plugin-babel.js',
      'systemjs-babel-build': '/lib/systemjs-plugin-babel/systemjs-babel-browser.js',

      // EXTERNAL LIBS
      'jquery': '/lib/jquery/dist/jquery.js',
      'toastr': '/lib/toastr/toastr.js',
      'jquery-ui': '/lib/jquery-ui/jquery-ui.js',
      'navigo': '/lib/navigo/lib/navigo.min.js',
      'handlebars': '/lib/handlebars/handlebars.js',
      'crypto-js': '/lib/cryptojs-sha1/cryptojs-sha1.js',

      // APP HELPERS
      'validator': 'js/validator.js',
      'parse-query': 'js/parse-query.js',
      'json-requester': 'js/json-requester.js',
      'data': 'js/data.js',
      'templates': 'js/templates.js',

      //  APP CONTROLLERS
      'home-controller': 'js/controllers/home.controller.js',
      'users-controller': 'js/controllers/users.controller.js',
      'posts-controller': 'js/controllers/posts.controller.js',
      'comments-controller': 'js/controllers/comments.controller.js',
      // APP
      'app': 'js/app.js'
  }
});

System.import('app');