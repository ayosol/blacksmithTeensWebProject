//Function Expression to select element
const selectElement = (s) => document.querySelector(s);
//Open the meu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
//Close the meu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});