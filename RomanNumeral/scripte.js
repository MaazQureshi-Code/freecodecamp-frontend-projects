const input_user = document.querySelector(".number-input");
const btn = document.querySelector(".convert-btn");
const output = document.querySelector(".output");
const output_result = document.getElementById("output-container");

const checkUserInput = () => {
    let number = parseInt(input_user.value); // Convert input to a number

    if (input_user.value.trim() === "") { // Trim to avoid spaces being treated as input
        output.textContent = "Please enter a valid number";
        output.style.color = "red";
        return; // Stop execution here
    }

    if (isNaN(number)) { // Ensure input is a number
        output.textContent = "Please enter a valid number";
        output.style.color = "red";
        return;
    }

    if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.style.color = "red";
        return;
    }

    if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.style.color = "red";
        return;
    }

    // Convert number to Roman numeral
    let romanNumeral = roman_Converter(number);

    // Display result
    output.textContent = romanNumeral;
    output.style.color = "black";

    // Show output container
    output_result.classList.remove("hidden"); 
};


btn.addEventListener("click", checkUserInput);

// Roman Numeral Converter Function
const roman_Converter = (num) => {
    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";
    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }
    return result;
};
