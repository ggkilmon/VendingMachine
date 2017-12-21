var Coin = function(){
    var self = this;

    return self;
};

Coin.GetCoinValue = function(coinStr){
    switch(coinStr){
        case "Coin.Large":
            return .25;
        case "Coin.ExtraSmall":
            return .10;
        case "Coin.Medium":
            return .05;
        case "Coin.Small":
            return .01;
        default:
            return 0;
    }
};

Coin.IsValidCoin = function(coinStr){
    if (coinStr == "Coin.Large" ||
        coinStr == "Coin.ExtraSmall" ||
        coinStr == "Coin.Medium")
    {
        return true;
    }

    return false;
}