// Function to append a character to the display
function appendCharacter(character) {
    document.getElementById('display').value += character;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
