window.sr = ScrollReveal({ reset: true });

sr.reveal('.containerMenu', { duration: 1000 });

sr.reveal('.titlediv', { duration: 3000 });

sr.reveal('.seta', { duration: 2000 });

sr.reveal('.containerSobreMim', { duration: 3000 });

sr.reveal('.oqeusei', { duration: 2000 });

sr.reveal('.containerbtnmenu:hover', { duration: 2000 });

sr.reveal('.containerbtnmenu.active', { duration: 2000 });



var btnClick = document.querySelector(".btnMenu");
var containerClick = document.querySelector(".containerbtnmenu");
btnClick.addEventListener('click', () => {
    btnClick.classList.toggle('active');
    containerClick.classList.toggle('active');
})