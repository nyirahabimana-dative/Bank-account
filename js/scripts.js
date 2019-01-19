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