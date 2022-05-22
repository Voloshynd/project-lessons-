// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("How many movies did you watch?", "");
//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("How many movies did you watch?", "");
//   }
// }

// start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("How many movies did you watch?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many movies did you watch?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("One of the last movies you watched?", "").trim();
      b = Number(prompt("How would you rate it?", ""));
      if (a !== "" && b !== null && a !== null && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done!");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("You watched just few movies ");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a classic spectator");
    } else if (personalMovieDB.count <= 30) {
      console.log("you are a movie buff");
    } else {
      console.log("Error");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    // First method
    // for (let j = 1; j <= 3; j++) {
    //   let genre = prompt(`What is you favorite ganres? ${j}`);
    //   if (genre == null || genre == "") {
    //     console.log("You provide inccorect data");
    //     i--;
    //   } else {
    //     personalMovieDB.genres[j - 1] = genre;
    //   }
    // }
    // personalMovieDB.genres.forEach((item, index)=>{
    //     console.log(`Favourite genre ${index + 1} - it's ${item}`);
    //   });



      // Second method 
      for(let j = 1; j < 2; j++){
        let genre = prompt(`What is you favorite ganres separated by commas?`);
        if (genre == null || genre == "") {
          console.log("You provide inccorect data");
          i--;
        } else {
          personalMovieDB.genres = genre.split(", ");
          personalMovieDB.genres.sort();
        }
      }
      personalMovieDB.genres.forEach((item, index)=>{
        console.log(`Favourite genre ${index + 1} - it's ${item.charAt(0).toUpperCase() + item.slice(1)}`);
      });

  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privet) {
      personalMovieDB.privet = false;
    } else {
      personalMovieDB.privet = true;
    }
  },
};

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("One of the last movies you watched?", "").trim();
//     b = Number(prompt("How would you rate it?", ""));
//     if (a !== "" && b !== null && a !== null && b !== "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("Done!");
//     } else {
//       console.log("Error");
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("You watched just few movies ");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("You are a classic spectator");
//   } else if (personalMovieDB.count <= 30) {
//     console.log("you are a movie buff");
//   } else {
//     console.log("Error");
//   }
// }

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

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privet);

// function writeYourGenres(){

//     for(let j = 1; j <= 3; j++){
//         let favoriteGenres = prompt("What is you favorite ganres?", "");
//         personalMovieDB.genres.push(`${favoriteGenres}`)
//     }

// }

// writeYourGenres();

// function writeYourGenres() {
//   for (let j = 1; j <= 3; j++) {
//     personalMovieDB.genres[i - 1] = prompt(
//       `What is you favorite ganres? ${i}`,
//       ""
//     );
//   }
// }

// writeYourGenres();

// console.log(personalMovieDB);
