//LogIn
var acceso = []
$.get("./db.json", function (users) {
    logueo = users;
});
//Datos traidos desde archivo json


const cargaProdutos = () => {
let listaProducto ="";
let productList = JSON.parse(localStorage.getItem(keyLocalStorage));

  productList.forEach( (p) => listaProducto += `
    <div id="${p.productId}" class="card d-inline-flex p-6" style="width: 18rem;">
  <img src="${p.productImage}" class="card-img-top" alt="${p.productName}">
  <div class="card-body">
    <h5 class="card-title">${p.productName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Stock:${p.productStock}</li>
    <li class="list-group-item">Precio:${p.productPrice} </li>
    <li class="list-group-item">Oferta:${p.productSalePrice} </li>
  </ul>
  <div class="card-body">
    <button onclick="Comprar(${p.productId})" type="button" class="btn btn-dark">Buy!</button>
  </div>
</div>` );


    $("#details").html(listaProducto);
};



  const cargaCarta = () =>{
    var vistaCarta ="";
    userStore.product.forEach(
      (p)=>(vistaCarta += `<h1>${p.id}-${p.quantity}</h1>`)
    )
    $(`#summary`).html(vistaCarta);
  };