
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 400
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);  

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.home__img');
sr.reveal(".home__data", { origin : "bottom"});

sr.reveal(".about__data", { origin : "left"});
sr.reveal(".about__img", { origin : "right"});

sr.reveal(".popular__card", {interval: 100});

sr.reveal(".recently__data", { origin : "left"});
sr.reveal(".recently__img", { origin : "right"});

sr.reveal('.newsletter');

sr.reveal('.footer')
