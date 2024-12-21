
const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const quantity = document.querySelector("#quantity");
let count = 0;

// manage decrement
decrement.addEventListener('click', () => {
    const current_qunatity = (parseInt(quantity.innerText));
    if(current_qunatity >= 1){
        quantity.innerText = current_qunatity - 1;
    }
})
// manage increment
increment.addEventListener('click', () => {
    const current_qunatity = (parseInt(quantity.innerText));
    quantity.innerText = current_qunatity + 1;
})