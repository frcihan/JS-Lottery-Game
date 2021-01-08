const buttons = document.querySelectorAll(".buttons .button");
const lottery_button = document.querySelector(".lottery");

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

numbers = Array.from({length: 49}, (_, i) => i + 1);
console.log("initial numbers:", numbers);

lottery_button.addEventListener("click", () => {
    shuffle(numbers);
    console.log("shuffled numbers:", numbers);
    
    selected_numbers = numbers.slice(0,6);
    console.log("selected numbers:", selected_numbers);

    sorted_numbers = selected_numbers.sort(function(a, b){return a - b})
    console.log("sorted_numbers:", sorted_numbers);

    let i = 0;
    buttons.forEach((btn) => {
        btn.textContent = sorted_numbers[i];
        i++;
    })
})