/* globals System */

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
      'handlebars': '/lib/handlebars/dist/handlebars.min.js',

      // APP HELPERS
      'requester': 'js/requester.js',
      'data': 'js/data.js',
      'templates': 'js/templates.js',
      'error': 'js/error.js',

      //  APP CONTROLLERS
      'home-controller': 'js/controllers/home.controller.js',
      'users-controller': 'js/controllers/users.controller.js',
      'posts-controller': 'js/controllers/posts.controller.js',
      'comments-controller': 'js/controllers/comments.controller.js',
      // APP
      'app': 'js/app.js',
  },
});

System.import('app');
