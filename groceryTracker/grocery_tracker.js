let firstGrocery;
let secondGrocery;
let thirdGrocery;

function groceryTracker()
{
    firstGrocery = parseFloat(document.getElementById('firstGrocery').value);
    secondGrocery = parseFloat(document.getElementById('secondGrocery').value);
    thirdGrocery = parseFloat(document.getElementById('thirdGrocery').value);

    let TotalAmount = firstGrocery + secondGrocery + thirdGrocery;

    document.getElementById('result').innerText = `The total amount is: ${TotalAmount}`;
}