function Balance(name,initialdeposit) {
    this.name = name;
    this.initialdeposit = initialdeposit;
  }

   Balance.prototype.withdraw= function(amount) {
    this.withdraw=this.balance-amount
}
Balance.prototype.deposit=function(amount){
    this.deposit=this.balance+amount
}
var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
       this.balance = this.balance - amount;
    },
    deposit: function(amount) {
       this.balance = this.balance + amount;
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