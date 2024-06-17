
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(tempInput)) {
        document.getElementById('result').textContent = 'Please enter a valid number';
        return;
    }

    switch (unit) {
        case 'celsius':
            celsius = tempInput;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = tempInput;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            kelvin = tempInput;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    document.getElementById('result').textContent = 
        `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
}
