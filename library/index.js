// Burger menu

const menuBtn = document.querySelector('.burger__btn');
const menuMobile = document.querySelector('.header__list');
const body = document.body;
const navItem = menuMobile.querySelectorAll('.header__item');


menuBtn.addEventListener('click',()=> {
	body.classList.toggle('scroll--stop')
	menuBtn.classList.toggle('burger--transform');
	menuMobile.classList.toggle('burger--open');
});

navItem.forEach(element => {
	element.addEventListener("click",()=> {
		body.classList.remove('scroll--stop')
		menuBtn.classList.remove('burger--transform');
		menuMobile.classList.remove('burger--open');
	});
});

// Slider

const sliderLine = document.querySelector('.about__items'),
	leftButton = document.querySelector('.slider btn-left'),
	rightButton = document.querySelector('.slider__btn-right'),
	button = document.querySelectorAll('.carousel__button')

let position = 0,
	buttonIndex = 0

//Functions

const sliderRight = () => {
	if (position < (button.length-1) * 450) {
		position += 450
	} else {
		position = 0
	}
	sliderLine.style.left = -position +'px'
}

// Eventliseners

rightButton.addEventListener('click', sliderRight)



