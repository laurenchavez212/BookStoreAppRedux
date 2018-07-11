var store1 = require('./store1-data.js');


// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
 return store1["2015-01-08"][0][1];
}

// // Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
 return store1["2015-01-06"][1][2];
}


// // *********** LOOPING OVER DATA *********** \\


// // Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {
  var arr = [];
for(var i = 0; i < store1["2015-01-08"].length; i++) {
  arr.push(store1["2015-01-08"][i][0]);
}
return arr;
}


// // Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2() {
  var arr1 = [];
  for(var i = 0; i < store1["2015-01-10"].length; i++) {
    arr1.push(store1["2015-01-10"][i][2]);
  }
    var sum = 0;
    for(var i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    return sum;
}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
 return Object.keys(store1)
}

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  var sold = 0;
  for (var keys in store1) {
        for(var i = 0; i < store1[keys].length; i++)
  sold += store1[keys][i][2]
  }
  return sold
}


// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5() {
  return 'before the for in loop'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
