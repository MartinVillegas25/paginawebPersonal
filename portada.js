//efecto maquina de escribir portada//

let text = document.getElementById("portada");
let str = text.innerHTML;

text.innerHTML = "";

let velocidad = 100;
let i = 0;

function maqEscribir() {
    if(i < str.length) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(maqEscribir, velocidad);
    }
}

setTimeout(maqEscribir, velocidad);

/* pagina de español a ingles */
let check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
   let id= check.checked;
   if(id==true){
       location.href="en/index.html"
   } else{
       location.href="../index.html"
   }
}

//validacion formulario

let nombre = document.querySelector(`#nombre`);
let correo = document.querySelector(`#correo`);
let mensaje= document.querySelector(`#mensaje`);
let formulario = document.querySelector(`#form`);

function enviarFormulario(event){
    event.preventDefault()
if(nombre.value === null || nombre.value === ''){
    alert("Debes completar el nombre");
}
if(mensaje.value=== null || mensaje.value=== ''){
    alert("Debes colocar un mensaje");    
}
if(correo.value===null || correo.value ===''){
    alert("debes colocar un mail");
}
mensajeEnviado()

}

document.querySelector(`#enviarForm`).addEventListener(`click`, enviarFormulario);


//mensaje de formulario enviado

async function mensajeEnviado(){
    const form = new FormData(formulario);
    const response = await fetch(formulario.action,{
        method: formulario.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        formulario.reset()
        alert("El formulario ha sido enviado correctamente, te escribire pronto"); 
    }
   
}