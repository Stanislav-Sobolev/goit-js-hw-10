import { Notify } from 'notiflix/build/notiflix-notify-aio';

const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

function fetchCountries(name) {
  
fetch(`https://restcountries.com/v3.1/name/${name}`)
.then((res) => res.json())
.then((status) => {
    
    if(status.status === 404){
        Notify.failure("Oops, there is no country with that name");
    }

    return status;   
}) 
.then((result) => {
    
    if(result.length > 10){
        Notify.info(
            "Too many matches found. Please enter a more specific name."
            );
    } else {
        
        let allCountries = result.map((country) => {
            return `<li><img src="${country.flags.svg}" width="20" height="auto" 
                    style="margin-right:5px" alt="${country.name.common}">${country.name.common}</li>`
            }).join("");
        
        countryList.classList.remove("big-size-text");
        countryInfo.innerHTML = "";

        if(result.length === 1){
            countryList.classList.add("big-size-text");
            
            const moreInfo = result.map((country) => {
                return `<li class="more-info">
                <p><b>Capital: </b>${country.capital}</p>
                <p><b>Population: </b>${country.population}</p></li>
                <p><b>Lenguages: </b>${Object.values(country.languages)}</p></li>`
            }).join("");
            
            countryInfo.innerHTML = moreInfo;

        }     

    countryList.innerHTML = allCountries;
        
    }
    }).catch((error) => {
        countryList.innerHTML = "";
        console.log("Это блок Catch!", error)
    })

}

export { fetchCountries };