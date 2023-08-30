let data = document.getElementById("data");
let datosGuardados = JSON.parse(localStorage.getItem("datos"));

document.addEventListener("DOMContentLoaded", eventito => 
{
    datosGuardados.forEach((array) =>
    {
        const cosasAAgregar = `<li>${array}</li>`
        data.innerHTML+=cosasAAgregar;
    });
});