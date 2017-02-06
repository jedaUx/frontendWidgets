'use strict';

var dModule = angular.module('frontDirectives', ['ngAnimate', 'ngSanitize', 'ui.bootstrap','ngTagsInput','chart.js','pascalprecht.translate',
'tmh.dynamicLocale']);

// var translations = {
//   HEADLINE: 'What an awesome module!',
//   PARAGRAPH: 'Srsly!'
// };
//
// dModule.config(['$translateProvider', function ($translateProvider) {
//   // add translation table
//   $translateProvider.translations('en', translations);
//   $translateProvider.preferredLanguage('en');
// }]);

dModule.directive('contactProfile', function(){
      return {
        controller: 'contactProfileCtrl',
        scope: false,
        templateUrl: 'widgets/profile.html'
      };
    });

dModule.directive('contactOptions', function(){
      return {
        controller: 'contactProfileCtrl',
        scope: false,
        templateUrl: 'widgets/contact-options.html'
      };
    });

dModule.directive('contactForm', function(){
      return {
        controller: 'contactFormCtrl',
        scope: false,
        templateUrl: 'widgets/contact-form.html'
      };
    });

dModule.directive('datatransferReport', function(){
      return {
        controller: 'datatransfer-reportCtrl',
        scope: false,
        templateUrl: 'widgets/datatransfer-report.html'
      };
    });
