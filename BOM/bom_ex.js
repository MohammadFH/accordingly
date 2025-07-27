const alertButton = document.getElementById('alertButton');
const openWindowButton = document.getElementById('openWindowButton');
const navigateBackButton = document.getElementById('navigateBackButton');
const changeURLButton = document.getElementById('changeURLButton');

alertButton.addEventListener("click" , () => {window.alert("Hello , this is an alert!");});

openWindowButton.addEventListener("click" , () => {window.open('https://example.com' , '_blank');});

navigateBackButton.addEventListener("click" , () => {
    history.back(); //Navigate back one page is user's  browsing history
});

changeURLButton.addEventListener("click" , () => {
location.href = 'https://example.com'; //Redirect the user to new URL
});



