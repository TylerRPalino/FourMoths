const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");

window.addEventListener("wheel", (e) => {

    e.preventDefault();

    const scrollAmount = e.deltaY;

    row1.scrollLeft += scrollAmount;
    row2.scrollLeft -= scrollAmount;
    row3.scrollLeft += scrollAmount;

}, { passive: false });