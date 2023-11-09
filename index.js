const moviesContainer =document.getElementById("moviesContainer");
const URL = "https://654c32a177200d6ba8589ba4.mockapi.io/";
function getAll(){
    fetch(URL + 'movies',{
      method:"GET",
      headers:{"content-type":"application/json"},  
    } )
    .then (res=>res.json())
    .then(movies=>renderMovies(movies));

}
function getOne (){
    const randomId=Math.floor(Math.random()*20+1);
    fetch(URL+randomId,{
        method:"get",
    })
    .then(res=>res.json())
    .then(product=>renderOne(product));
}
function renderMovies(movies){
    for(const movie of movies){
        const movieCard=document.createElement("article");
        const movieData=`
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}"/>
        <p>${movie.year}</p>
        <p>${movie.director}</p>
        <p>${movie.genre}</p>
        <p>rating:${movie.rate}
        `;
        movieCard.innerHTML=movieData;
        moviesContainer.appendChild(movieCard);

    }
}