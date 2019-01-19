
 function Balance(name,initialdeposit) {
    this.name = name;
    this.initialdeposit = initialdeposit;
    
   }
   Balance.prototype.withdrawal= function(amount) {
    this.withdrawal -=amount
}
Balance.prototype.deposit=function(amount){
    this.deposit +=amount
}
var BankAccount = {
    balance: 0,
    withdrawal: function(amount) {
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
    var newBalance = parseInt($("input#withdrawal").val());
    newAccount.withdrawal(newBalance);
    $(".balance").text(newAccount.balance);
    });
    });
    
