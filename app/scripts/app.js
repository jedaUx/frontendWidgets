'use strict';

var trans_en = {
  contactProfile : 'test'
};

/**
 * @ngdoc overview
 * @name testFrontApp
 * @description
 * # testFrontApp
 *
 * Main module of the application.
 */
angular
  .module('testFrontApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngTagsInput',
    'frontDirectives',
    'pascalprecht.translate',
    'tmh.dynamicLocale'
  ])
  .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
  .constant('LOCALES', {
    'locales': {
      'es': 'Español',
      'en': 'English'
    },
    'preferredLocale': 'en'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  // Angular debug info
  .config(function ($compileProvider, DEBUG_MODE) {
    if (!DEBUG_MODE) {
      $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
    }
  })
  // Angular translate
  .config(['$translateProvider', function ($translateProvider, LOCALES, DEBUG_MODE) {
    if (DEBUG_MODE) {
      $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
    }

    $translateProvider.useSanitizeValueStrategy('escapeParameters');

    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/',
        suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage("en");

  }])
  // Angular Dynamic Locale
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  });
