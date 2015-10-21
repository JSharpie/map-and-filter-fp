var prices = [];
prices = _.map(items, function(item, idx, arr){
    return item.price;
});
function average(prices){
    var avg = 0;
    for(var i = 0; i < prices.length; i++){
      avg = avg + prices[i];
    }
    return avg/i;
}
$('#answer1').append(" " + average(prices).toFixed(2));
var cheapFilter = [];
var cheapFilterTitles = [];
cheapFilter = _.filter(items, function(item, idx, arr){
  if(item.currency_code === "GBP"){
    item.price = (item.price * 1.55);
  }
  return item.price >= 14 && item.price <= 18;
});
cheapFilterTitles = _.map(cheapFilter, function(item, idx, arr){
  return "<br /> " + item.title;
});
$('#answer2').append(" " + cheapFilterTitles);
var gbpPrice;
var gbpTitle;
_.map(items, function(item, idx, arr){
  if(item.currency_code === "GBP"){
    item.price = (item.price/1.55);
    gbpPrice = item.price;
    gbpTitle = item.title;
  }
});
$('#answer3').append(" " + gbpTitle + " " + gbpPrice + "GBP");
var matArr = [];
matArr = _.map(items, function(item, idx, arr){
  return item.materials;
});
var matArrTitles = [];
var x = 0;
  for(var i = 0; i < matArr.length; i++){
    for(var j = 0; j < matArr[i].length; j++){
      if (matArr[i][j] === "wood"){
        matArrTitles[x] = "<br />" + items[i].title;
        x++;
      }
    }
  }
$('#answer4').append(matArrTitles);
var eightMats = [];
eightMats = _.map(items, function(item, idx, arr){
  return item.materials;
});
eightMats = _.filter(eightMats, function(item, idx, arr){
  return item.length >= 8;
});
var y = 0;
for(var i = 0; i < items.length; i++){
  if(items[i].materials.length >= 8){
    eightMats.splice(y, 0, "<br />" + items[i].title + " " + items[i].materials.length + " ");
    y = y + 2;
  }
}
$('#answer5').append(eightMats);
var made = [];
made = _.filter(items, function(item, idx, arr){
  return item.who_made === "i_did";
});
$('#answer6').append(" " + made.length);
