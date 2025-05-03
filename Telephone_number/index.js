const userInput = document.getElementById("user-input");
const results_div = document.getElementById("results-div");
const btn1 = document.getElementById("check-btn");
const clearButtons = document.getElementById("clear-btn");

const validPhoneFormat = (input) => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(input);
};

const displayResult = () => {
    const input = userInput.value.trim();

    // Check if the input is empty
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    // Create a new paragraph element for the result
    const resultParagraph = document.createElement("p");

    // Validate the phone number
    if (validPhoneFormat(input)) {
        resultParagraph.textContent = `Valid US number: ${input}`;
        resultParagraph.style.color = "#4CAF50"; // Green color for valid
    } else {
        resultParagraph.textContent = `Invalid US number: ${input}`;
        resultParagraph.style.color = "#FF0000"; // Red color for invalid
    }

    // Append the new result to the results-div
    results_div.appendChild(resultParagraph);
};

// Event listener for check button
btn1.addEventListener("click", displayResult);

// Event listener for clear button
clearButtons.addEventListener("click", () => {
    results_div.innerHTML = ""; // Clear all results
    userInput.value = ""; // Clear the input field
});