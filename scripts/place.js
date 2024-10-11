document.addEventListener('DOMContentLoaded', () => {
    const currentyear = document.querySelector('#currentyear');
    const today = new Date();

    currentyear.innerHTML = `&copy;<span class='highlight'>${today.getFullYear()}🌺 Jerjes Mariluz Caciano 🌺 Lima</span>`;

    const  lastModifiedDate = new Date(document.lastModified);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDate = lastModifiedDate.toLocaleString('en-US', options);

    document.getElementById('lastModified').textContent = `last Modification: ${formattedDate}`;

    function calculateWindChill(temperature, windSpeed) {

        if (temperature <= 10 && windSpeed > 4.8) {
            let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
            return windChill.toFixed(2)
        } else if (temperature <= 50 && windSpeed > 3) {
            let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
            return windChill.toFixed(2);
        } else {
            return 'N/A';
        }
    }

    const temperature = 5;
    const windSpeed = 5;
    const windChillResult =  calculateWindChill(temperature, windSpeed);

    const windChillElement = document.querySelector('.section-2 ul li:nth-child(4)');
    windChillElement.textContent = `WIND CHILL: ${windChillResult}°C`
});