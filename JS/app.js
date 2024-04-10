import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

var message="";
inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        message +=input.target;
         
    });
});
var url = "whatsapp://send?text="+encodeURIComponent(message)+"&phone=+51922045005"
window.open(url);
 



