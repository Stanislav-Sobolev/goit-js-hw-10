import './css/styles.css';
import { fetchCountries } from './fetchCountries';
let debounce = require('lodash.debounce');

const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('input#search-box');

input.addEventListener('input', debounce(() => {
    console.log('input.value :>> ', input.value);
    if(input.value === "" || input.value === null){
        countryList.innerHTML = "";
        countryInfo.innerHTML = "";
        
    } else {
        fetchCountries(input.value.trim());
    }
    
}, DEBOUNCE_DELAY));






