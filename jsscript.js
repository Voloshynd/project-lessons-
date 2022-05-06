const numberOfFilms = prompt("How many movies did you watch?", "");
const personalMovieDB  = {
    count: Number(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of the last movies you watched?", ""),
    b = Number(prompt("How would you rate it?","")),
    c =  prompt("One of the last movies you watched?", ""),
    d = Number(prompt("How would you rate it?",""));

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
        
