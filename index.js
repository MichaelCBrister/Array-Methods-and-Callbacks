import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const fourteenFinal = fifaData.filter(function(item) {
    return item.Year === 2014 && item.Stage === "Final";
});
console.log(fourteenFinal)
console.log(fourteenFinal[0]["Home Team Name"]);
console.log(fourteenFinal[0]["Away Team Name"]);
console.log(fourteenFinal[0]["Home Team Goals"]);
console.log(fourteenFinal[0]["Away Team Goals"]);
console.log(fourteenFinal[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const onlyFinals = data.filter((item) => {
        return item.Stage == "Final"
    });
    return onlyFinals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const years = callback.map(function (item) {
      return {year: item.Year};
    });
    return years;
  }
  console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const homeWinners = callback.filter(function (item) {
        return item["Home Team Goals"] >= item["Away Team Goals"];
    }).map(function (item) {
        return {"Winning Team Name": item["Home Team Name"]};
    });
    const awayWinners = callback.filter(function (item) {
        return item["Home Team Goals"] < item["Away Team Goals"];
    }).map(function (item) {
        return {"Winning Team Name": item["Away Team Name"]};
    });
    const winners = homeWinners.concat(awayWinners);
    return winners;
}

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(cbYear, cbWinner) {
//     const newArr = cbYear.map(function(item) {
//         return {year: item.year}
//     });
//     const newArr2 = (cbWinner.map(function(item) {
//         return {newArr.push("Winning Team Name": item["Winning Team Name"])}
//     }));
//     console.log(newArr)
//     console.log(`In ${newArr.year}, ${newArr["Winning Team Name"]} won the World Cup!`);
// }

function getWinnersByYear(cbYear, cbWinner) {
    let newArr = cbYear.map((item, i) => 
        Object.assign({}, item, cbWinner[i]));
    for (let i = 0; i < newArr.length; i++) {
    console.log(`In ${newArr[i].year}, ${newArr[i]["Winning Team Name"]} won the World Cup!`);
    }
}
  
getWinnersByYear(getYears(getFinals(fifaData)),getWinners(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeGoals = fifaData.reduce(function (accumulator, item) {
        return accumulator + item["Home Team Goals"];
    },0);
    const awayGoals = fifaData.reduce(function (accumulator, item) {
        return accumulator + item["Away Team Goals"];
    },0);
    return `Average Home Team Goals: ${homeGoals / fifaData.length} - Average Away Team Goals: ${awayGoals / fifaData.length}`
}
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
