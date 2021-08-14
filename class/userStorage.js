class UserStore{
constructor(pName){
    this.product=[];
    this.nombre=pName;
};

setProduct (pId) {

//buscar producto en la variable global:
let productList = JSON.parse(
    localStorage.getItem(keyLocalStorage)
    );
let currentProduct = productList.find((p)=> p.productId === pId);

//disminuimos el stock
currentProduct.productStock -= 1;
//volvemos a guardar en el local storage
localStorage.setItem(keyLocalStorage,JSON.stringify(productList));

    let productItem = new ProductItem(currentProduct.productId, 1);

if (this.product.find((p)=>p.id === productItem.id) === undefined)
    this.product.push(productItem);
else this.product.find((p) => p.id === productItem.id).quantity +=1;
};
};