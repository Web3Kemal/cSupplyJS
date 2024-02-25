This little script only calculates the circulating supply of a token, the reason I've created this script is because this was needed to be listen on CoinMarketCap and CoinGecko.

The way I did it, in a rush, is very simple:

circulatingSupply = totalSupply - burnedSupply;

totalSupply and burnedSUpply are calculated via BSCSCAN free API. 
