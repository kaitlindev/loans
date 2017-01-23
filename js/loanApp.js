var loanApp = angular.module('loanApp', ['ngMessages', '720kb.tooltips', 'ngRoute']);
  loanApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/monthlyPayment', {
       templateUrl: 'monthlyPayment.htm',
       controller: 'monthlyPaymentController'
    }).
    when('/payoffTime', {
       templateUrl: 'payoffTime.htm',
       controller: 'payoffTimeController'
    }).
    otherwise({
       redirectTo: '/monthlyPayment'
    });
  }]);
  /* Round up value to closest whole number */
  loanApp.filter('roundup', function(){
  return function(input) {
    return Math.ceil(+input);
  };
})
