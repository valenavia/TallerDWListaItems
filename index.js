let datosIngresados = document.getElementById("inputText");
let datosLocal = [];

const boton = document.getElementById("buttonText");

boton.addEventListener("click", evento => 
{
    datosLocal.push(datosIngresados.value);
    localStorage.setItem("datos",JSON.stringify(datosLocal));
});