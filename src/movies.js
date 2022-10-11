
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((element) => 
    element.director)
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter((element) => element.director === "Steven Spielberg")
    
    const dramaSteven = moviesSteven.filter((element) => element.genre.includes("Drama"))
    
    if (dramaSteven.length === 0 ){
    return 0;
    }
    else {
    return dramaSteven.length;
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const sumatory =  moviesArray.reduce((previousValue, currentValue) => {
    if (currentValue.score){
    return previousValue + currentValue.score
    } else {
        return previousValue;
    }
   },0)

   let average = sumatory/moviesArray.length
   return Math.round (average*100)/100

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const dramaMovies = moviesArray.filter((element) => element.genre.includes("Drama"))
    if (dramaMovies.length === 0){
        return 0;
    }
    const dramaMoviesScore =  dramaMovies.reduce((previousValue, currentValue) => {
    if (currentValue.score){
    return previousValue + currentValue.score
    } else {
        return previousValue;
    }
    },0)
    
   let average = dramaMoviesScore/ dramaMovies.length
   return Math.round (average *100)/100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
const newArray = moviesArray.map(function(i){
    return Object.assign({},i)
})
newArray.sort(function(a,b){
    if (a.year > b.year) return 1
    if (a.year < b.year) return -1
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
})

    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let titleArray = []
moviesArray.sort(function(a,b){
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
})
moviesArray.forEach(element => {
    titleArray.push(element.title)
});
if (moviesArray.length<20) {
    return titleArray
} else {
   return titleArray.slice(0,20)
}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
