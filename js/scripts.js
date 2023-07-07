function convertFC(temp) {
    return ((temp - 32) * 5 / 9).toFixed(2);
}

const tempF = parseInt(prompt("what is ur temp"));

window.alert("ur temp is " + convertFC(tempF) + "celsius.")