
let count = 1;

function render() {
    let pokemonGallery = document.getElementById('pokemon');
    pokemonGallery.innerHTML = `<img id="pokemonGalleryImg" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;

}

let previous = document.getElementById('previous');
let next = document.getElementById('next');

previous.onclick = function() {
    if (count > 1) {
        count = count - 1;
        render();
    }
}

next.onclick = function() {
    if (count < 650) {
        count = count + 1;
        render();
    }
}

render();