
document.addEventListener("DOMContentLoaded", () => {
  SetUp();
});

function SetUp(){
  fetch("http://localhost:3000/api/company")
    .then((response) => response.json()).then((response) => {
      const responseA = response["0"];
      let title= document.getElementById('Title');
      let logo = document.querySelector("#logo");
      let description = document.querySelector("#banner-content");
      let gallery = document.querySelector("#gallery");
      let services = document.querySelector("#services");
      let footer = document.querySelector("#footer");

      title.innerText =  responseA["title"];
      logo.src = responseA["url"];
      description.innerText = responseA["description"];

      responseA["products"].forEach((e) => {
        let newCard = CreateCardProducts(e["url"], e["id"]);

        gallery.append(newCard);
      });

      responseA["services"].forEach((e) => {
        let newCard = CreateCardServices(e["url"], e["title"], e["content"], e["id"]);

        services.append(newCard);
      })

      responseA["footerItems"].forEach((content) => {
        let newElement = document.createElement("p");
        newElement.innerText = content["itemContent"];
        footer.append(newElement);
      });



      console.log(response);
    } )

    function CreateCardProducts(imageSource,id) {
      let newCard = document.createElement("div");
      newCard.classList.add("img-object");
  
      let imageElement = document.createElement("img");
      imageElement.classList.add("img-object-image");
      imageElement.src = imageSource;
  
      newCard.append(imageElement);

      let footer = document.createElement("h3");
      newCard.classList.add("img-object-text");
      footer.innerText = id;

      newCard.append(footer);
  
      return newCard;
    }

    function CreateCardServices(imageSource, header, content, id) {
      let newCard = document.createElement("div");
  
      newCard.classList.add("service-card");
  
      let imageElement = document.createElement("img");
      imageElement.classList.add("service-card-image");
      imageElement.src = imageSource;
  
      newCard.append(imageElement);
  
      let textWrapper = document.createElement("div");
      textWrapper.classList.add("service-card-text-wrapper");
  
      newCard.append(textWrapper);
  
      let headerElement = document.createElement("h4");
      headerElement.innerText = header;
  
      textWrapper.append(headerElement);
  
      let contentElement = document.createElement("p");
      contentElement.innerText = content;
  
      textWrapper.append(contentElement);

      let footer = document.createElement("h3");
      newCard.classList.add("service-card-text-wrapper");
      footer.innerText = id;

      newCard.append(footer);
  
  
      return newCard;
    }
}





  const putCompany = () =>{
    let inputValue = document.getElementById("nombre").value; 
    document.getElementById("valueInput").innerHTML = inputValue; 

    fetch("http://localhost:3000/api/company/1", {
      method: 'PUT',
      body: JSON.stringify({
      title : inputValue
    })
  })
  }

  const deleteCompany = () =>{
    let inputValue = document.getElementById("idDelete").value; 
    document.getElementById("valueInput").innerHTML.charAt = inputValue; 
    let url = "http://localhost:3000/api/company/"

    fetch(url + inputValue, {
      method: 'delete',
    })
  }

  const deleteProduct = () =>{
    let inputValue = document.getElementById("idDeleteProduct").value; 
    document.getElementById("valueInput").innerHTML.charAt = inputValue; 
    let url = "http://localhost:3000/api/product/"

    fetch(url + inputValue, {
      method: 'delete',
    })
  }

  const deleteService = () =>{
    let inputValue = document.getElementById("idDeleteService").value; 
    document.getElementById("valueInput").innerHTML.charAt = inputValue; 
    let url = "http://localhost:3000/api/service/"

    fetch(url + inputValue, {
      method: 'delete',
    })
  }

