 let container = document.getElementById('container')
 let terminput = document.getElementById('termo')

 

 function changecolor () {
    let rgbcolorgenerator = () => {  
        let first = Math.floor(Math.random() * 256)
        let second = Math.floor(Math.random() * 256)
        let third = Math.floor(Math.random() * 256)
    
        let rgb = ` rgb(${first},${second},${third})`
        return (rgb)
    
    }

  document.body.style.backgroundColor = rgbcolorgenerator()
 }

 




let originalCountriesData = [...countries_data]; // Create a copy of the original array
let isAscending = true; // Initialize isAscending

function sortCountriesByPopulation() {
  if (isAscending) {
    countries_data.sort((a, b) => a.population - b.population);
  } else {
    countries_data.sort((a, b) => b.population - a.population);
  }

  isAscending = !isAscending;
  rerendercountries();
}

function resetCountriesOrder() {
  countries_data = [...originalCountriesData];
  isAscending = true;
  rerendercountries();
}

function resetcolor () {
    document.body.style.backgroundColor = "#83677b"
}


 
      for ( let country of countries_data) {
        let div = document.createElement('div');
        let divcontent = document.createElement('div');
        let name = document.createElement('span');
        let capital = document.createElement('span');
        let population = document.createElement('span');
        let languages = document.createElement('span')
    
        name.textContent = country.name;
        capital.textContent = country.capital;
        population.textContent = country.population;
        languages.textContent= country.languages
    
        divcontent.appendChild(name);
        divcontent.appendChild(capital);
        divcontent.appendChild(population);
        divcontent.appendChild(languages);
    
     let divFlag = document.createElement('div');
    let flag = document.createElement('img');
    flag.src = country.flag;
    divFlag.appendChild(flag);
    div.appendChild(divFlag);
    
    div.appendChild(divcontent);
    container.appendChild(div); }



 
 let filteredcountries = []
 let oneCountries =[]
 let twoCountries = []
 let threeCountries =[]

 function rerendercountries() {

   container.innerHTML= ''

 for (let country of countries_data) {
    let div = document.createElement('div');
    let divcontent = document.createElement('div');
    let name = document.createElement('span');
    let capital = document.createElement('span');
    let population = document.createElement('span');
    let languages = document.createElement('span')

    name.textContent = country.name;
    capital.textContent = country.capital;
    population.textContent = country.population;
    languages.textcontent = country.languages;

    divcontent.appendChild(name);
    divcontent.appendChild(capital);
    divcontent.appendChild(population);
    divcontent.appendChild(languages);

 let divFlag = document.createElement('div');
let flag = document.createElement('img');
flag.src = country.flag;
divFlag.appendChild(flag);
div.appendChild(divFlag);

div.appendChild(divcontent);
container.appendChild(div);



} }


terminput.addEventListener('input', ()=> {
    
    filteredcountries = countries_data.filter((country) => country.name.toLowerCase().includes(terminput.value.toLowerCase())   );
  

    rendercountries();
})





  function rendercountries() {
  container.innerHTML= ''

  for (const country of filteredcountries) {
    let div = document.createElement('div');
    let divcontent = document.createElement('div');
    let name = document.createElement('span');
    let capital = document.createElement('span');
    let population = document.createElement('span');
    let languages = document.createElement('span')

    name.textContent = country.name;
    capital.textContent = country.capital;
    population.textContent = country.population;
    languages.textContent = country.languages

    divcontent.appendChild(name);
    divcontent.appendChild(capital);
    divcontent.appendChild(population);
    divcontent.appendChild(languages);

 let divFlag = document.createElement('div');
let flag = document.createElement('img');
flag.src = country.flag;
divFlag.appendChild(flag);
div.appendChild(divFlag);

div.appendChild(divcontent);
container.appendChild(div);

} }
















