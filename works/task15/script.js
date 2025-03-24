//function to generate random number
function generateRandomNumber() {
    const min = +document.getElementById("min").value;
    const max = +document.getElementById("max").value;
    if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById("output").innerText = "Invalid input!";
    } else {
    document.getElementById("output").innerText = "Random number is: " +
    (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    }
    // Hide the content after 5 seconds
    setTimeout(() => {
    document.getElementById("content_div").style.display = 'none';
    }, 5000);
    // Show the content again after 15 seconds (10 seconds after the hide)
    setTimeout(() => {
    document.getElementById("content_div").style.display = 'block';
    }, 15000);
    