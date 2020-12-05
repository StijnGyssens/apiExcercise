const genreRef= document.querySelector(".genres");
const button = document.getElementById("genres");

button.addEventListener("click", function(e){
    e.preventDefault();
    searchGenres();
})

function searchGenres() {
    button.setAttribute("disabled","");
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=83fb7a5701722d68bbdd02fc13473692&language=en-US";
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            genresLijst(data.genres)
            button.removeAttribute("disabled");
        })
        .catch(error=>console.log(error));
}

function genresLijst(genres){
    genreRef.innerHTML = genres
        .map(
            (genre)=>`
            <li class="genre">
                <p>${genre.name}</p>
            </li>
            `
        ).join("")
}