const countryDataEl = document.getElementById('country-data');

const clearCountryData = () => {
  countryDataEl.innerHTML = '';
}

const displayCountryData = country => {
  const countryNameEl = document.createElement('h3');
  countryNameEl.innerHTML = country.name;
  const countryNativeEl = document.createElement('h4');
  countryNativeEl.innerHTML = country.nativeName;
  const countryCapitalEl = document.createElement('p');
  countryCapitalEl.innerHTML = `Capital: ${country.capital}`
  const countryPopEl = document.createElement('p');
  countryPopEl.innerHTML = `Population: ${country.population}`

  countryDataEl.appendChild(countryNameEl);
  countryDataEl.appendChild(countryNativeEl);
  countryDataEl.appendChild(countryCapitalEl);
  countryDataEl.appendChild(countryPopEl);
}

window.addEventListener('load', event => {
  console.log('㊋ estonia-ajax: DOM is ready to AJAXX! ㊋');
  document.getElementById('find-country').addEventListener('click', event => {
    event.preventDefault();
    const searchCountry = document.getElementById('input-box').value;
    axios.get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then( response => {
        const country = response.data[0];
        clearCountryData();
        displayCountryData( country );
        console.log( country.nativeName, country.capital, country.population );
      })
      .catch( error => { console.error( error ); });
  });
});
