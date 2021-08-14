var user1 = "agustin";
var password1 = "crosa";

const logIn = () => {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let accesoPermitido = document.querySelector("#accesoPermitido");


    if(user1 == user && password == password1){
        accesoPermitido.className="text-success";
        accesoPermitido.innerHTML=`Bienvenido a Visco Market ${user1}`;

        setTimeout(()=>{
            window.location.replace('index.html');
        },3000);

    }else{
        accesoPermitido.className="text-danger";
        accesoPermitido.innerHTML="Usuario o contraseña incorrecta";
        setTimeout(()=>{
            window.location='./login.html';
        },3000);
    }
};

/*
setTimeout(()=>{
    window.location.replace('https://crosa23.github.io/Proyecto-Final/inicio/home.html');
},3000);
*/