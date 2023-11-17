const services = document.querySelector("#services");

fetch("http://localhost:3000/api/company/1")
  .then((response) => response.json()).then((company) => {
    let title= document.getElementById('title');

    title.innerText =  company["name"]


  } )