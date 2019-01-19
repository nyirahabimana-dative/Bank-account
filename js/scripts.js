
var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
       this.balance -= amount;
    },
    deposit: function(amount) {
       this.balance +=  amount;
    }
    };
$(document).ready(function() {
    var newAccount = Object.create(BankAccount);
    $("form#transactions").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedBalance = parseInt($("input#initial").val());
    newAccount.name = inputtedName;
    newAccount.deposit(inputtedBalance);
    $(".balance").text(newAccount.balance);
    });
    $("form#amount1").submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($("input#deposit").val());
    newAccount.deposit(newBalance);
    $(".balance").text(newAccount.balance);

    });
    $("form#amount2").submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($("input#withdraw").val());
    newAccount.withdraw(newBalance);
    $(".balance").text(newAccount.balance);
    });
    });
    
