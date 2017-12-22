angular.module('VendingApp').service('DisplayService', function(){
    this.display = new DisplayScreen(INSERT_COIN, '');

    this.UpdateDisplay = function(line1, line2){
        this.display.Line1 = line1;
        this.display.Line2 = line2;
    }

    this.GetNextMessage = function(){
        switch(this.display.Line1){
            case THANK_YOU:
                this.display.Line1 = INSERT_COIN;
                this.display.Line2 = CurrencyFormatted(0);
                return;
            case PRICE:
                if (currentMoney > 0){
                    this.display.Line1 = "";
                    this.display.Line2 = CurrencyFormatted(currentMoney);
                }else{
                    this.display.Line1 = INSERT_COIN;
                    this.display.Line2 = "";
                }
                
                return;
            case SOLD_OUT:
                if (machineChange > 0){
                    this.display.Line1 = "";
                    this.display.Line2 = CurrencyFormatted(machineChange);
                }else{
                    this.display.Line1 = INSERT_COIN;
                    this.display.Line2 = "";
                }
                return;
            default:
                this.display.Line1 = INSERT_COIN;
                this.display.Line2 = "";
                return;
        }
    }
});