function allCountry(){
    let country = "https://restcountries.com/v3.1/all"
    fetch(country)
.then(response => response.json())
.then(data => {
    let card = ""
    data.map((element)=>{
        card +=`<div class="country">
            <img id= "images" src="${element.flags.png}">
            <p id="content" class="name" > ${element.name.common}</p>
            <p id="content" class="text" > Capital: ${element.capital}</p>
            <p id="content" class="text" >Region: ${element.region}</p>
            <p id="content" class="text" >Population: ${element.population}</p>
            </div>
        `
    })
        
    document.querySelector(".cards").innerHTML = card
})
}

window.onload = allCountry();


function select(){
    let Filter = document.getElementById("filter").value

const country = `https://restcountries.com/v3.1/region/${Filter}`
fetch(country)
.then(response => response.json())
.then(data => {
    let card = ""
    data.map((element)=>{
        card +=`<div class="country">
            <img id= "images" src="${element.flags.png}">
            <p id="content" class="name" > ${element.name.common}</p>
            <p id="content" class="text" > Capital: ${element.capital}</p>
            <p id="content" class="text" >Region: ${element.region}</p>
            <p id="content" class="text" >Population: ${element.population}</p>
            </div>
        `
    })
        
    document.querySelector(".cards").innerHTML = card
})
}

document.getElementById("filter").addEventListener("change", select)



function search(){
    let search = document.getElementById("searchBar").value

    if(search.length > 0){

const country = `https://restcountries.com/v3.1/name/${search}`
fetch(country)
.then(response => response.json())
.then(data => {
    let card = ""
    data.map((element)=>{
        card +=`<div class="country">
            <img id= "images" src="${element.flags.png}">
            <p id="content" class="name" > ${element.name.common}</p>
            <p id="content" class="text" > Capital: ${element.capital}</p>
            <p id="content" class="text" >Region: ${element.region}</p>
            <p id="content" class="text" >Population: ${element.population}</p>
            </div>
        `
    })
        
    document.querySelector(".cards").innerHTML = card
})
.catch(error => {
    console.error(error)
})
}
else{
    if(search === ""){allCountry()}
}}

document.getElementById("searchBar").addEventListener("keyup",search)