const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");
const spnText = document.querySelector(".about p");


const txt = `Dopiero zaczynam przygode z programowaniem -załuje, że dopiero teraz- ponieważ
nie wiedziałem, że aż tak bardzo mi się to spodoba.
Dlatego tez szukam pierwszej pracy/stażu jako Junior front-end developer na terenie Krakowa.
Główną wiedzę czerpie z kursów internetowych. Należe do osób, które cenią sobie pracowitość oraz sumienność,
a za cel narzucają sobie dążenie do ciągłego samorozwoju.`

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");
})

let indexText = 0;
const time = 50;

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++
    if (indexText === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time)