const accessKey = 'KIFJow7qbNoe-AkxlJEvCpyN_Fk1j59jxpd96PLD0hU';

const search = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');
const resultsSearch = document.querySelector('.results')

let getData = '';
let page = 1;

// Поиск картинок
async function searchImages (){
    getData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?query=${getData}
    &page=${page}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

        if(page === 1) {
            resultsSearch.innerHTML = '';
        } 
   
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add ('results__search');
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.description;

        imageWrapper.appendChild(image);
        resultsSearch.appendChild(imageWrapper);
    });

}

search.addEventListener('submit',(event) => {
    event.preventDefault();
    page = 1;
    searchImages();

});

