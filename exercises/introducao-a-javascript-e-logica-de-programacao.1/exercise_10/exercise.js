let productCost = 1.99;
let marketValue = 10;

if(productCost >= 0 && marketValue >= 0){
  let finalCost = productCost + (productCost * 0.2);
  let profit = marketValue - finalCost;

  let amountSold = 1000;

  let totalProfit = profit * amountSold;

  console.log(`The total profit was: ${totalProfit}`);

} else {
  console.log('Error! Invalid input');
}