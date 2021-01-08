const buttons = document.querySelectorAll(".buttons .button");
const lottery_button = document.querySelector(".lottery");

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

numbers = Array.from({length: 49}, (_, i) => i + 1);
console.log(numbers);

lottery_button.addEventListener("click", () => {

})