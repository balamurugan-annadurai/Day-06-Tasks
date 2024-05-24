class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(array){
        let newArray = [];
        for(let i in array){
           if(array[i]["rating"] == "PG"){
             newArray.push(array[i]);
           }
        }
        return newArray;
    }
}

let movie1 = new Movie("Casino Royale","Eon Productions","PG13");
let movie2 = new Movie("Varisu","xyz");
let movie3 = new Movie("Leo","abc","PG")

let movies = [movie1,movie2,movie3];
let ratedPgMovies = Movie.getPG(movies);
console.log(ratedPgMovies);

