const first = document.querySelector('.first');
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

setTimeout(() => {
    first.classList.add("show");
    first.classList.remove("hidden");
}, 1000);
setTimeout(() => {
    second.classList.remove("hide");
    first.classList.add("hide");
}, 3000);


setTimeout(() => {
    second.classList.add("show");
    second.classList.remove("hidden");
}, 4000);
setTimeout(() => {
    third.classList.remove("hide");
    second.classList.add("hide");
}, 7000);


setTimeout(() => {
    third.classList.add("show");
    third.classList.remove("hidden");
}, 8000);
setTimeout(() => {
    fourth.classList.remove("hide");
    third.classList.add("hide");
}, 11000);


setTimeout(() => {
    fourth.classList.add("show");
    fourth.classList.remove("hidden");
}, 12000);
setTimeout(() => {
    fifth.classList.remove("hide");
    fourth.classList.add("hide");
}, 17000);

setTimeout(() => {
    fifth.classList.add("show");
    fifth.classList.remove("hidden");   
}, 18000);

setTimeout(() => {
    window.location.href = "./puzzle.html";
}, 24000);
