function findFactors() {
    const input = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = '';

    if (!input) {
        resultDiv.innerHTML = "Please enter a number.";
        return;
    }

    const num = parseInt(input);

    if (isNaN(num)) {
        resultDiv.innerHTML = "Please enter a valid integer.";
        return;
    }

    if (num === 0) {
        resultDiv.innerHTML = "The infinite sea of numbers are all factors of zero.";
        return;
    }

    const isNegative = num < 0;
    const absNum = Math.abs(num);

    let positiveFactors = [];
    let negativeFactors = [];

    for (let i = 1; i <= Math.sqrt(absNum); i++) {
        if (absNum % i === 0) {
            positiveFactors.push(i);
            if (i !== absNum / i) {
                positiveFactors.push(absNum / i);
            }
            if (isNegative) {
                negativeFactors.push(-i);
                if (i !== absNum / i) {
                    negativeFactors.push(-(absNum / i));
                }
            }
        }
    }

    let resultText = `<b>Factors of ${num}:</b> ${positiveFactors.join(", ")}`;

    if (isNegative) {
        resultText += `<br><br><b>Negative factors:</b> ${negativeFactors.join(", ")}`;
    }

    const totalFactors = positiveFactors.length + negativeFactors.length;

    resultText += `<br><br><b>Total number of factors:</b> ${totalFactors}`;

    resultDiv.innerHTML = resultText;
}

document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        findFactors();
    }
});
