var Product = function(name, price, inventory, image){
    var self = this;

    self.Name = name;
    self.PriceFormatted = CurrencyFormatted(price);
    self.Price = price;
    self.Inventory = inventory;
    self.ImageName = image;

    self.UpdateInventory = function(quantity){
        self.Inventory += quantity;
    }

    return self;
};