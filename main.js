function sayUsername(){
    const username = "Игорь";
    const myArray = ["молнии", "радик", "мышь", "семечки"];
    alert(myArray);
    //alert(username + 2 ** 8);   
    console.log(document.title);
    console.log(document.lastModified);
    console.log(document.domain);
    console.log(document.URL);
}
class ShopCard extends HTMLElement{
    constructor(){
        super();
        const card =  `                <div class="card">
        <img src="https://ir.ozone.ru/s3/multimedia-1-s/c1000/7002145720.jpg" alt="мышка" style="width:100%">
        <div class="container">
        <h4 id="ananas"><b>Заголовок</b></h4>
        <p>Описание</p>
        </div>
    </div>`;
    this.innerHTML = card;
    }

}
customElements.define("shop-card", ShopCard);
const apiUrl = "https://061bfab40f4e453d.mokky.dev/products"


function getCardsDataFromApi(block){

    fetch(apiUrl).then(response => 
        {if (!response.ok) {
        throw new Error(
          "Network response was not ok " + response.statusText
        );
      }
      console.log(response.status);

      return response.json();
    }).then(data => {
        data.forEach(element => {
            const card =  `                <div class="card">
            <img src="${element.imageUrl}" alt="мышка" style="width:100%">
            <div class="container">
            <h4 id="ananas"><b>${element.title}</b></h4>
            <p>${element.description}</p>
            </div>
        </div>`;
        block.innerHTML += card;
        });
    });
}
