let testText = "The quick brown fox jumps over the lazy dog.";
let startTime , endTime;

function startTest()
{
    // Set the test text
    document.getElementById('inputText').value = testText;

    // Reset result and timer
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    // Change text button and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest()
{
    endTime = new Date().getTime();

    //Disable user input
    document.getElementById('userInput').readOnly=true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById('userInput').value;

    //Split the text using regular expression (/\s+/) to count words correctly

    var typedWords = userTypedText.split(/\s+/).filter(function(word)
{
    return word !== "";
}).length;

    var wpm = 0; //Default value

    if(timeElapsed !== 0 && !isNaN(typedWords))
    {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the result
    var outputDiv = document.getElementById('output');

    outputDiv.innerHTML = "<h2>Typing Test Result</h2>" + 
    "<p>Total Length: " + userTypedText.length + "</p>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + "seconds</p>" + 
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById('btn');
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}