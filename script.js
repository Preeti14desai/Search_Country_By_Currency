async function searchCountries() {
    const currencyInput = document.getElementById('currencyInput').value.toUpperCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    try {
        const response = await fetch(`https://restcountries.com/v3.1/currency/${currencyInput}`);
        const data = await response.json();

        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No countries found for the given currency.</p>';
            return;
        }

        data.forEach(country => {
            const flagImageUrl = `https://flagsapi.com/${country.cca2}/flat/64.png`;

            const countryElement = document.createElement('div');
            countryElement.innerHTML = `<p>${country.name.common}</p><img src="${flagImageUrl}" alt="${country.name.common} Flag">`;
            resultsContainer.appendChild(countryElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
}

function getFlagCode(countryName) {
    
    const flagCodes = {
        
    };

    return flagCodes[countryName] || 'unknown';
}
