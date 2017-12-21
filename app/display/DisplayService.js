angular.module('VendingApp').service('DisplayService', function(){
    this.display = new DisplayScreen('INSERT COIN', '');

    this.UpdateDisplay = function(line1, line2){
        this.display.Line1 = line1;
        this.display.Line2 = line2;
    }

    this.GetNextMessage = function(){
        switch(this.display.Line1){
            case "THANK YOU":
                this.display.Line1 = "INSERT COIN";
                this.display.Line2 = "$0.00";
                return;
            case "PRICE":
                if (currentMoney > 0){
                    this.display.Line1 = "";
                    this.display.Line2 = "$" + CurrencyFormatted(currentMoney);
                }else{
                    this.display.Line1 = "INSERT COIN";
                    this.display.Line2 = "";
                }
                
                return;
            case "SOLD OUT":
                if (machineChange > 0){
                    this.display.Line1 = "";
                    this.display.Line2 = "$" + CurrencyFormatted(machineChange);
                }else{
                    this.display.Line1 = "INSERT COIN";
                    this.display.Line2 = "";
                }
                return;
            default:
            this.display.Line1 = "INSERT COIN";
            this.display.Line2 = "";
        }
    }
});