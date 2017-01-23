loanApp.controller('monthlyPaymentController', function($scope) {
 $scope.loan = {
    principal: 1000,
    interestRate: 5,
    period: 1,
    principalToolTip: "Total sum of money lent or invested.",
    interestRateToolTip: "Amount charged by a lender expressed as a % of the principal.",
    periodToolTip: "Length of time in years to pay back a loan.",
    interestPrnct: function() { /* convert to % */
       var loan = $scope.loan;
       var interest = loan.interestRate;
       var interestPrnct = (interest  / 100);
       return interestPrnct;
    },
    dailyInterest: function() {
       var loan = $scope.loan;
       var dailyInterest = (loan.interestPrnct() / 365) * loan.principal;
       return dailyInterest;
    },
    weeklyInterest: function() {
       var loan = $scope.loan;
       var weeklyInterest = (loan.interestPrnct() / 52) * loan.principal;
       return weeklyInterest;
    },
    monthlyInterest: function() {
       var loan = $scope.loan;
       var monthlyInterest = (loan.interestPrnct() / 12) * loan.principal;
       return monthlyInterest;
    },
    annualInterest: function() {
       var loan = $scope.loan;
       var annualInterest = (loan.interestPrnct()) * loan.principal;
       return annualInterest;
    },
    emi: function() { /* EMI = Equated Monthly Installment */
       var loan = $scope.loan;
       var p = loan.principal;
       var n = (loan.period * 12);
       var r = (loan.interestRate / 1200);
       var emi = ((p * r * Math.pow((1 + r), n)) / (Math.pow((1 + r),n) - 1 ));
       return emi;
    },
    repayment: function() { /* repayment = EMI * n */
       var loan = $scope.loan;
       var emi = loan.emi();
       var n = (loan.period * 12);
       var repayment = (emi * n);
       return repayment;
    },
    loss: function() {
       var loan = $scope.loan;
       var loss = (loan.repayment() - loan.principal);
       return loss;
    }
 };
});
