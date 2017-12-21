angular.module('VendingApp').service('CoinReturnService', function(){
    this.coinReturn = new DisplayScreen('', '');

    this.UpdateCoinReturn = function(line1, line2){
        this.coinReturn.Line1 = line1;
        this.coinReturn.Line2 = line2;
    }
});