const genreRef= document.querySelector(".trending");
const button = document.getElementById("trending");

button.addEventListener("click", function(e){
    e.preventDefault();
    searchTrending();
})

function searchTrending() {
    button.setAttribute("disabled","");
    const url = "https://api.themoviedb.org/3/trending/person/week?api_key=83fb7a5701722d68bbdd02fc13473692";
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            genresLijst(data.results)
            button.removeAttribute("disabled");
        })
        .catch(error=>console.log(error));
}

function genresLijst(people){
    genreRef.innerHTML = people
        .map(
            person=>`
            <div class="person">
                <img src="https://image.tmdb.org/t/p/w500/${person.profile_path}">
                <p>${person.name}</p>
            </div>
            `
        ).join("")
}