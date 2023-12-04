const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const copyButton = document.querySelector("#js-copy");
copyButton.addEventListener('click', copyQuote);

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://horoscope-astrology.p.rapidapi.com/dailyphrase',
  headers: {
    'X-RapidAPI-Key': 'dacd983aefmsh99f3c970326e572p12841ejsn9f4f8a48891d',
    'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const [quote] = await response.json();
    displayQuote(quote);
  } 
    catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

function copyQuote() {
  const quoteText = document.querySelector("#js-quote-text");
  const quote = quoteText.textContent;
  navigator.clipboard.writeText(quote)
    .then(() => {
      alert(`Quote copied to clipboard: ${quote}`);
    })
    .catch(err => {
      console.error(', err);
    });
  }
  
  getQuote();