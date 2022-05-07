const numberOfFilms = +prompt("How many movies did you watch?", "");

    
const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for( let i = 0; i < 2; i++){
   
    const a = prompt("One of the last movies you watched?", "");
        b = Number(prompt("How would you rate it?",""));
        if(a !== '' && b !== null && a !== null && b !== "" && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("Done!");
        } else{
            console.log("Error");
            i--;
        }
}
if (personalMovieDB.count < 10){
    console.log("You watched just few movies ")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("You are a classic spectator")
} else if (personalMovieDB.count <=  30){
    console.log("you are a movie buff")
} else{
    console.log("Error")
}

console.log(personalMovieDB);
        
