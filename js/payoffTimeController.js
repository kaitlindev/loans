loanApp.controller('payoffTimeController', function($scope) {
  $scope.loan = {
   principal: 1000,
   interestRate: 5,
   payment: 100,
   principalToolTip: "Total sum of money lent or invested.",
   interestRateToolTip: "Amount charged by a lender expressed as a % of the principal.",
   paymentToolTip: "Monthly payment made on loan total.",
   interestPrnct: function() { /* convert to % */
      var loan = $scope.loan;
      var interest = loan.interestRate;
      var interestPrnct = (interest  / 100);
      return interestPrnct;
   },
   payoffMonths: function() {
      var loan = $scope.loan;
      var m = loan.payment;
      var p = loan.principal;
      var r = loan.interestPrnct();
      var payoffMonths = ((Math.log10(m) - Math.log10(m - ((p * r)/12))) / Math.log10(1 + (r /12)));
      return payoffMonths;
   },
   payoffYears: function() {
      var loan = $scope.loan;
      var payoffYears = loan.payoffMonths() / 12;
      return payoffYears;
   }
  };
});
