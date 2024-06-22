// Write your code here!
// Select the <main> element with the id 'main'
let mainElement = document.getElementById('main');

// Check if the element exists before trying to remove it
if (mainElement) {
    mainElement.remove();
}

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Angela is the champion';

