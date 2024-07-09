document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distanceInput = document.getElementById('distance').value.replace(',', '.');
    const distance = parseFloat(distanceInput);
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);
    
    if (isNaN(distance) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        document.getElementById('result').innerText = 'Por favor, introduce valores válidos.';
        return;
    }

    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    const paceSeconds = totalSeconds / distance;
    
    const paceMinutes = Math.floor(paceSeconds / 60);
    const remainingSeconds = Math.floor(paceSeconds % 60);
    
    document.getElementById('result').innerText = `Ritmo medio: ${paceMinutes}:${remainingSeconds} min/km`;
});

function setDistance(value) {
    document.getElementById('distance').value = value;
}
