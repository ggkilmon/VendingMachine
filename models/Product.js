var Product = function(name, price, inventory){
    var self = this;

    self.Name = name;
    self.Price = CurrencyFormatted(price);
    self.Inventory = inventory;

    self.UpdateInventory = function(quantity){
        self.Inventory += quantity;
    }

    return self;
};