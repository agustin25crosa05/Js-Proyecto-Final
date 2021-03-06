var productos = [
  {
    "productId":1,
    "productName":"CAMISETA TITULAR SELECCIÓN ARGENTINA",
    "productImage":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg",
    "productStock":81,
    "productPrice":"23488.67",
    "productSalePrice":"23488.67",
    "rating":4
 },
 {
    "productId":2,
    "productName":"CAMISETA LOCAL OFICIAL BOCA JUNIORS 20/21",
    "productImage":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/91b393d848ba4ef3be5fac9a017df1a9_9366/Camiseta_Local_Oficial_Boca_Juniors_20-21_Azul_GI4683_01_laydown.jpg",
    "productStock":66,
    "productPrice":"42992.62",
    "productSalePrice":"20636.46",
    "rating":2
 },
 {
    "productId":3,
    "productName":"REMERA FREELIFT BADGE OF SPORT ESTAMPADA",
    "productImage":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/73b1885ae8494e3bbba9a93c01188f93_9366/Remera_FreeLift_Badge_of_Sport_Estampada_Negro_DU0902_01_laydown.jpg",
    "productStock":58,
    "productPrice":"26956.67",
    "productSalePrice":"26956.67",
    "rating":4
 },
 {
    "productId":4,
    "productName":"REMERA RUN",
    "productImage":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fcca9583c2ef46a49c7eaa4800fbbf5a_9366/Remera_Run_Verde_DW9685_01_laydown.jpg",
    "productStock":74,
    "productPrice":"32827.45",
    "productSalePrice":"32827.45",
    "rating":2
 },
 {
 "productId":5,
 "productName":"REMERA CAMPEON 19",
 "productImage":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/09e578a4e3cf49cc95ada8d5016683ca_9366/Remera_Campeon_19_Verde_DP6811_01_laydown.jpg",
 "productStock":58,
 "productPrice":"26956.67",
 "productSalePrice":"26956.67",
 "rating":4
 }
];

const keyLocalStorage = "productos";

//Guardar en memoria la lista de productos
if (localStorage.getItem("productos")==null)
localStorage.setItem(keyLocalStorage,JSON.stringify(productos));

var userStore = new UserStore("Diego");
cargaProdutos();