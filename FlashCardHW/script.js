const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const card = document.getElementById("card-content");

    if (card) {
        if(card.textContent = showingTerm ){
            card.textContent = flashcards[currentIndex].term;
        }
        else{
            card.textContent = flashcards[currentIndex].definition;
        }
    }

}


// The rest of the code you will write is apart of event listeners


// Toggle between term and definition
document.getElementById("card-content").addEventListener("click", () => {
    showingTerm = !showingTerm;
    displayCard();
});

// Move to the next card
document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
});

// Move to the previous card
document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
});

document.getElementById("add-card-btn").addEventListener("click",() => {
    const newTerm = document.getElementById("new-term").value.trim();
    const newDefinition = document.getElementById("new-definition").value.trim();

    if (newTerm && newDefinition) {
        flashcards.push({ term: newTerm, definition: newDefinition });

        document.getElementById("new-term").value = "";
        document.getElementById("new-definition").value = "";

        showingTerm = true;
        displayCard();
    } 
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
