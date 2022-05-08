let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many movies did you watch?", "");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies did you watch?", "");
    }
}
 
// start();

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
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
}

// rememberMyFilms();




function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("You watched just few movies ")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("You are a classic spectator")
    } else if (personalMovieDB.count <=  30){
        console.log("you are a movie buff")
    } else{
        console.log("Error")
    }
}

// detectPersonalLevel(); 

// console.log(personalMovieDB);

// function showMyDB(dateBase){
//     for(date in dateBase){
//        if (date.privet === false){
//            console.log(personalMovieDB)
//     }
//    } 
// }

// showMyDB(personalMovieDB);

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privet);

// function writeYourGenres(){
    
//     for(let j = 1; j <= 3; j++){
//         let favoriteGenres = prompt("What is you favorite ganres?", "");
//         personalMovieDB.genres.push(`${favoriteGenres}`)
//     }

// }

// writeYourGenres();

function writeYourGenres(){
    for(let j = 1; j <= 3; j++){
        personalMovieDB.genres[i - 1] = prompt(`What is you favorite ganres? ${i}`, "");
    }
}

writeYourGenres();

console.log(personalMovieDB);
