
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
        let newCard = CreateCardProducts(e["url"]);

        gallery.append(newCard);
      });

      responseA["services"].forEach((e) => {
        let newCard = CreateCardServices(e["url"], e["title"], e["content"]);

        services.append(newCard);
      })

      responseA["footerItems"].forEach((content) => {
        let newElement = document.createElement("p");
        newElement.innerText = content["itemContent"];
        footer.append(newElement);
      });



      console.log(response);
    } )

    function CreateCardProducts(imageSource) {
      let newCard = document.createElement("div");
      newCard.classList.add("img-object");
  
      let imageElement = document.createElement("img");
      imageElement.classList.add("img-object-image");
      imageElement.src = imageSource;
  
      newCard.append(imageElement);
  
      return newCard;
    }

    function CreateCardServices(imageSource, header, content) {
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
  
  
      return newCard;
    }
}





  const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML = inputValue; 
  }