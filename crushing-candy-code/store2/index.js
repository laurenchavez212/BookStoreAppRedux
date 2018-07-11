var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
  function accessesingData1() {
    var salesDates = [];
    for(var i = 0; i < store2["sale dates"]["Banana Bunches"].length; i++) {
      salesDates.push(store2["sale dates"]["Banana Bunches"][i]);
    }
    return salesDates
  }
  accessesingData1()

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
 return store2["sale dates"]["Banana Bunches"].length
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
var mintPrice = store2["inventory prices"]["Banana Bunches"];
mintPrice = 3;
if(store2["inventory prices"]["Banana Bunches"] === 3) {
  return yes
  //wow it changed the value because this isnt real life
} else {
  return false
  //Of course not. It only changes the value of the new variable
}
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  var salesDates = store2["sale dates"]["Caramel Twists"];
   salesDates.pop();
  if(store2["sale dates"]["Caramel Twists"] === ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10']){
    return true
    //pop changed the length of an array
  } else {
    return false
  }
  //this wont happen
}


/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {

}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {

}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
