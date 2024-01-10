let navbar = document.querySelector ('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.backgroundColor = 'rgb(243, 243, 242)';
        navbar.style.boxShadow = "none";
    }
});



// Get references to the button and input text
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const countSpan = document.getElementById('count');

// Initalize a counter variable
let count = 1;

// Add a click event listener to the plus button
plusButton.addEventListener("click", () => {

    // Increment the count
    count++;

    // Update the text inside the count input
    countSpan.textContent = count; 
} );

// Add a click event listener to the minus button
minusButton.addEventListener("click", () => {
    // Decrement the count variable but prevent from going below 1
    if (count > 1) {
        count--;
    
    }
    // Update the text inside the count input
    countSpan.textContent = count; 
})
