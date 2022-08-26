
// *******************************************************DUMMY DATA*************************************************************

moviesData = [{
    id: "id_" + Math.random().toString(16).toUpperCase().slice(2),
    title: "1. The Shawshank Redemption (1994)",
    image: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
    rating: 5


},

{
    id: "id_" + Math.random().toString(16).toUpperCase().slice(2),
    title: "2. Laal Sigh Chadda",
    image: "https://i.ytimg.com/vi/6Tg5BLRmTcg/maxresdefault.jpg",
    rating: 4


},

{
    id: "id_" + Math.random().toString(16).toUpperCase().slice(2),
    title: "3. brahmastra",
    image: "https://images.news18.com/ibnlive/uploads/2022/06/anuritta-jha-1.jpg",
    rating: 3
},

{
    id: "id_" + Math.random().toString(16).toUpperCase().slice(2),
    title: "4. The Dark",
    image: "https://flxt.tmsimg.com/assets/p14652182_b1t_v8_aa.jpg",
    rating: 3
},

{
    id: "id_" + Math.random().toString(16).toUpperCase().slice(2),
    title: "5. interstellar",
    image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 3
}
]





//*****************************************************COD FOR */



const addMovieModal0 = document.getElementById("add-modal");
const addMovieModal1 = document.querySelector("#add-modal");
const addMovieModal2 = document.body.children[1];

// console.log("addMovieModal0", addMovieModal0);
// console.log("addMovieModal1", addMovieModal1);
// console.log("addMovieModal2", addMovieModal2);

console.log(moviesData)
//change the bg of modal class
const backDrop = document.getElementById("backdrop")
// const backDrop1 = document.body.firstElementChild

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton1 = document.querySelector('header').lastElementChild;
// console.log("startAddMovieButton", startAddMovieButton)
const movies = [];
const userInputs = addMovieModal0.querySelectorAll('input');
console.log("inputs", userInputs)

const entryTextSection = document.getElementById('entry-text');

//delete movie modal dialog confirmation
const deletMovieModal = document.getElementById('delete-modal')
const closeMovieDeletionModal = () => {
    toggleBackDrop();
    deletMovieModal.classList.remove('visible')
}
const deleteMovie = (movieId) => {
    let movieIndex = 0;

    for (const movie of movies) {

        if (movie.id === movieId) {
            break;
        }
        movieIndex++;

    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);//this method can alsp be used
    closeMovieDeletionModal()

}


const deleteMovieHandler = (id) => {

    deletMovieModal.classList.add('visible')
    toggleBackDrop()
    const cancelDeleteBtn = deletMovieModal.querySelector('.btn--passive')
    let confirmDeleteBtn = deletMovieModal.querySelector('.btn--danger')
    //removing previous listners
    cancelDeleteBtn.removeEventListener('click', closeMovieDeletionModal)
    confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true))
    confirmDeleteBtn = deletMovieModal.querySelector('.btn--danger')
    //delete movie confirmation
    cancelDeleteBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeleteBtn.addEventListener('click', deleteMovie.bind(null, id));

}
const renderNewMovieElement = (id, title, image, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
            <img src="${image}" alt="${title}">
    </div>

    <div class="movie-element__info">

            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
    <div/>

    

    `;

    const listRoot = document.getElementById("movie-list");
    listRoot.appendChild(newMovieElement);
    newMovieElement.addEventListener('click', () => deleteMovieHandler(id))
}

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block"
    } else {
        entryTextSection.style.display = "none"
    }
}
const toggleBackDrop = () => {
    backDrop.classList.toggle("visible")
}

const closeMovieModal = () => {
    addMovieModal0.classList.remove('visible')
    toggleBackDrop()
    clearMovieInput();

}
const showMovieModal = () => {
    console.log("clicked");
    addMovieModal0.classList.add("visible");
    toggleBackDrop();

}

const backDropHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput()
}

const addMovieHandler = () => {

    const titlevalue = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    const movieId = getId();
    if (titlevalue.trim() === '' || imageUrl.trim() === '' || ratingValue === '' ||
        ratingValue < 1 || ratingValue > 5) {

        alert("invalid value");
        return;
    }

    const newMovie = {
        id: movieId,
        title: titlevalue,
        image: imageUrl,
        rating: ratingValue
    }

    movies.push(newMovie);
    console.log("movie", newMovie);
    clearMovieInput();
    closeMovieModal();
    updateUI();
    backDrop.classList.remove("visible")
    renderNewMovieElement(movieId, titlevalue, imageUrl, ratingValue)

}


const fillMoviesData = () => {

    console.log("fillMovieData Function Has been called");
    moviesData.forEach((M) => movies.push(M))
    clearMovieInput();
    closeMovieModal();
    toggleBackDrop();
    updateUI();
    console.log(movies);
    movies.forEach(film => {

        renderNewMovieElement(film.id, film.title, film.image, film.rating);
        console.log(film.title)

    });
    toggleBackDrop();
}

const clearMovieInput = () => {
    for (const inputs of userInputs) {
        inputs.value = '';
    }
}

let cancelButton = addMovieModal0.querySelector('.btn--passive');
let addButton = cancelButton.nextElementSibling;
let fillDataBtn = addButton.nextElementSibling;

console.log(cancelButton)
console.log(addButton)
console.log(fillDataBtn)

cancelButton.addEventListener('click', closeMovieModal)
startAddMovieButton.addEventListener('click', showMovieModal);
backDrop.addEventListener('click', backDropHandler)
addButton.addEventListener('click', addMovieHandler)
fillDataBtn.addEventListener('click', () => fillMoviesData())



const getId = () => {
    return "id_" + Math.random().toString(16).toUpperCase().slice(2)
}








