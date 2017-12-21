angular.module('VendingApp').controller('ProductController', ['$scope', 'ProductService', 'DisplayService', 'CoinReturnService', function($scope, ProductService, DisplayService, CoinReturnService){
    $scope.ProductList = ProductService.GetProducts();

    $scope.VendItem = function(event){
        var productChosen = event.target.value;
        var product = ProductService.GetProduct(productChosen);

        if (product.Name != "Not Found"){
            if (product.Inventory <= 0){
                DisplayService.UpdateDisplay('SOLD OUT', '');
                return;
            }

            if (currentMoney >= product.Price){
                var change = currentMoney - product.Price;

                if (change > machineChange){
                    DisplayService.UpdateDisplay('EXACT CHANGE ONLY', '');
                    return;
                }

                coinReturn += change;
                machineChange -= change;
                currentMoney = 0;
                product.UpdateInventory(-1);
                DisplayService.UpdateDisplay('THANK YOU', '');
                CoinReturnService.UpdateCoinReturn('', '$' + CurrencyFormatted(coinReturn));
            }else{
                DisplayService.UpdateDisplay('PRICE', '$' + CurrencyFormatted(product.Price));
            }
        }else{
            DisplayService.UpdateDisplay('NOT VALID PRODUCT', '$' + CurrencyFormatted(currentMoney));
        }
    };
}]);