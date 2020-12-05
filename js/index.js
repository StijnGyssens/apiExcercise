// https://www.themoviedb.org/
// https://developers.themoviedb.org/3/getting-started

// kolom 1 => knop => lijst met alle genres
// kolom 2 => knop => trending personen hun foto's van de laatste week
// kolom 3 => knop => alle info tonen van de film "ex-machina" (misschien heb je de id nodig om de detail van deze film te kunnen opvragen)




const ulRef = document.querySelector(".movieGrid");
const formRef = document.querySelector("form");
const searchField = document.getElementById("searchString");
const loader = document.getElementById("loading");
const searchStringResult = document.querySelector("h2");
const submitButton = document.getElementById("submitBtn");

formRef.addEventListener("submit", function(e) {
  e.preventDefault();
  if (searchField.value) {
    searchField.classList.remove("error");
    searchForMovie(searchField.value);
  } else {
    searchField.classList.add("error");
  }
});

function searchForMovie(str) {
  submitButton.setAttribute("disabled", "");
  loader.classList.remove("hidden");
  ulRef.classList.add("hidden");
  searchStringResult.classList.add("hidden");
  const url = `https://api.themoviedb.org/3/search/movie?api_key=83fb7a5701722d68bbdd02fc13473692&language=en-US&query=${str}&page=1&include_adult=false`;
  fetch(url)
    .then((responseObject) => {
      return responseObject.json();
    })
    .then((jsonData) => {
      genereerLijst(jsonData.results);
      loader.classList.add("hidden");
      ulRef.classList.remove("hidden");
      searchStringResult.querySelector("span").innerHTML = searchField.value;
      searchStringResult.classList.remove("hidden");
      searchField.value = "";
      submitButton.removeAttribute("disabled");
    })
    .catch((errorObject) => {
      console.log(errorObject);
    });
}

function genereerLijst(movies) {
  console.log(movies)
  ulRef.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            <p>${movie.original_title}</p>
        </div>
    `
    )
    .join("");
}
