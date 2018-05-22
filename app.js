window.addEventListener('load', event => {
  console.log('㊋ estonia-ajax: DOM is ready to AJAXX! ㊋');
  document.getElementById('find-country').addEventListener('click', event => {
    event.preventDefault();
    const searchCountry = document.getElementById('input-box').value;
    axios.get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then( response => {
        const country = response.data[0];
        console.log( country.nativeName, country.capital, country.population );
      })
      .catch( error => { console.error( error ); });
  });
});
