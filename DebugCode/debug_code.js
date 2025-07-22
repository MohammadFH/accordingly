function performOperation()
{
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let op = document.getElementById('operation').value;

    if(!isNaN(num1) && !isNaN(num2))
    {

        let result;

        switch(op)
        {
            case "addition": result = Addition(num1 , num2);
            break;
            case "subtract": result = Subtract(num1 , num2);
            break;
            case "multiply": result = Multiply(num1 , num2);
            break;
            case "division": if(num2 === 0) { alert("cannot division by zero, please choose valid choices"); return; }
                            else{result = Division(num1 , num2);}
        }

        displayResult(result);
        
    }
    else
    {
        displayResult("Please enter a valid numbers");
    }
}

function Addition(a , b)
{
    return a+ b;
}

function Subtract(a , b)
{
    return a-b;
}

function Multiply(a , b)
{
    debugger;

    return a*b;
}

function Division(a , b)
{
    return a/b;
}

function displayResult(result)
{
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}