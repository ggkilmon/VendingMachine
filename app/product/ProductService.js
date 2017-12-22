angular.module('VendingApp').service('ProductService', function(){
    var products = [];
    products.push(new Product("Cola", 1.00, 5));
    products.push(new Product("Chips", .50, 10));
    products.push(new Product("Candy", .65, 10));

    this.GetProducts = function(){
        return products;
    }

    this.GetProduct = function (name){
        for (var i = 0; i < products.length; i++){
            if (products[i].Name == name){
                return products[i];
            }
        }

        return new Product(NOT_FOUND, 0);
    }
});