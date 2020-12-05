const genreRef= document.querySelector(".info");
const button = document.getElementById("info");

button.addEventListener("click", function(e){
    e.preventDefault();
    searchInfo();
})

function searchInfo() {
    button.setAttribute("disabled","");
    const url = "https://api.themoviedb.org/3/movie/264660?api_key=83fb7a5701722d68bbdd02fc13473692&language=en-US";
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            infoLijst(data)
            button.removeAttribute("disabled");
        })
        .catch(error=>console.log(error));
}

function infoLijst(info){
    console.log(info)
    genreRef.innerHTML =
        `
        <div class="informatie">
            <img src="https://image.tmdb.org/t/p/w500/${info.poster_path}">
            <h3>${info.title}</h3>
            <p>budget: ${info.budget} dollar</p>
            <p>${info.overview}</p>
        </div>
        `
        
}