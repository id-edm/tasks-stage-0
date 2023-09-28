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



// Срывающийся header 

const header = document.querySelector('.header');
const defaultOffset = 100; // для исчезновнения header

let lastScroll = 0;

// Определяем позицию скрола

const scrollPosition = () =>  window.scrollY || document.documentElement.scrollTop;
const containHide= () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //прокручиваем вниз
    header.classList.add('hide');
    } 
    else if (scrollPosition() < lastScroll && containHide()) {
    //прокручиваем вверх
    header.classList.remove('hide');
    }
    
    lastScroll = scrollPosition();
})

// Крестик очишающий запросы в инпуте

function clearSearch() {
    document.getElementById('search_id').value = '';
  }

// Курсор в поле ввода

function setFocus() {
    document.getElementById('search_id').focus();
}



