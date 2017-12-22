angular.module('VendingApp').controller('DisplayController', ['$scope', 'DisplayService', 'CoinReturnService', function ($scope, DisplayService, CoinReturnService){
    $scope.DisplayScreen = DisplayService.display;
    $scope.CoinReturn = CoinReturnService.coinReturn;
    
    $scope.TakeCoins = function(){
        coinReturn = 0;

        CoinReturnService.UpdateCoinReturn(' ', CurrencyFormatted(coinReturn));
    }
}]);