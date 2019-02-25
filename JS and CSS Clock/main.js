/* eslint-disable no-param-reassign */
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelectorAll(".hand");
// const hand = document.querySelectorAll(".hand");
function setDate() {
    const now = new Date(); // create a date object and store it in a variable

    const seconds = now.getSeconds(); // retrieve seconds from the date object
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();// retrieve minutes from the date object
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();// retrieve hours from the date object
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (secondsDegrees === 90) {
        hand.forEach((item) => { item.style.transition = "none"; });
    } else {
        hand.forEach((item) => { item.style.transition = ""; });
    }
}
setInterval(setDate, 1000); // runs a function for a predefined amount of time (in miliseconds)
