angular.module('VendingApp').controller('CoinInsertController', ['$scope', 'DisplayService', 'CoinReturnService', function($scope, DisplayService, CoinReturnService){
    CoinReturnService.UpdateCoinReturn('', CurrencyFormatted(coinReturn));
    
    $scope.InsertCoin = function(event){
        var coinInserted = event.target.value;
        var coinValue = Coin.GetCoinValue(coinInserted);

        if (Coin.IsValidCoin(coinInserted)){
            currentMoney += coinValue;
            
            DisplayService.UpdateDisplay('', CurrencyFormatted(currentMoney));
        }else{
            coinReturn += coinValue;

            CoinReturnService.UpdateCoinReturn('', CurrencyFormatted(coinReturn));
        }
    };

    $scope.CoinReturn = function(){
        coinReturn += currentMoney;
        currentMoney = 0;

        DisplayService.UpdateDisplay(INSERT_COIN, '');
        CoinReturnService.UpdateCoinReturn('', CurrencyFormatted(coinReturn));
    };

    $scope.UpdateDisplay = function(){
        DisplayService.GetNextMessage();
    }
}]);