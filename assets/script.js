const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bannerImg = document.querySelector(".banner-img");
let dotsBlock = document.querySelector(".dots");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let counter = 0;

slides.forEach((_, elem) => {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	if (elem === 0) dot.classList.add("dot_selected");
	dot.dataset.elem = elem;
	dotsBlock.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

const updateBannerAndDots = () => {
    let temp = "./assets/images/slideshow/"+slides[counter].image;
	
    bannerImg.src = temp;

    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[counter].classList.add("dot_selected");
};

arrowLeft.addEventListener('click', ()=>{
	counter--;
	if(counter==-1)
		counter = slides.length - 1;
	counter %= slides.length;
    updateBannerAndDots();
});

arrowRight.addEventListener('click', ()=>{
	counter++;
	counter %= slides.length;
    updateBannerAndDots();
});


dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        counter = parseInt(e.target.dataset.elem); // Retrieve the index from data-index attribute
        updateBannerAndDots();
    });
});
