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
      'requester': 'js/helpers/requester.js',
      'templates': 'js/helpers/templates.js',
      'error': 'js/helpers/error.js',
      'routes': 'js/app/routes/routes.js',
      'data': 'js/data/data.js',
      'update-categories': 'js/helpers/update-categories.js',
      'check-logged-in': 'js/helpers/check-logged-in.js',

      // APP CONTROLLERS
      'home-controller': 'js/app/routes/controllers/home.controller.js',
      'users-controller': 'js/app/routes/controllers/users.controller.js',
      'posts-controller': 'js/app/routes/controllers/posts.controller.js',
      'comments-controller': 'js/app/routes/controllers/comments.controller.js',

      // APP
      'app': 'js/app/app.js',

      // MAIN
      'main': 'js/main.js',
  },
});

System.import('main');
