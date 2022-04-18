import axios from 'axios';

const countries = document.getElementById('countries')

async function fetchCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all')

        const countryList =  result.data.map((countries) => {
            return `
                <div class="bundle">
                    <div class="horizontal">
                        <li><img class="flag" src="${countries.flag}" alt="flag"></li>
                        <li class="name">${countries.name}</li>
                    </div>
                        <li>Has a population of ${countries.population} people</li>
                </div>
                    `;
        });

        countries.innerHTML = `${countryList.join('')}`;

        console.log(result.data);
    } catch(e) {
        console.error(e);
    }
}

fetchCountries();



