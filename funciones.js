function buscarInfo(){

    var opcion = document.getElementById("opcion").value;
    var mensaje;

    switch(opcion)
    {
        case "obra":
            mensaje = "Trabajamos con: Apross, OSDE, Medife, Galeno, Swiss Medical, Ommit y Sancor Salud.";
            break;
        case "urgencias":
            mensaje = "Guardias de 24hs";
            break;
        case "rayos":
            mensaje = "Se atiende por orden de llegada, sin turno y se entrega en el momento";
            break;
        case "prof":
            mensaje = "En la clínica trabajan: Dra. Anabella Rossi (endodoncista), Dra. Luciana Romero (odontopediatra), Dra. Jannet Cubas (protesista) y Dr. Rechia Jorge (cirujano)";
            break;
        default:
            mensaje = "Error";
            break;
    }

    document.getElementById("respuesta").innerHTML = mensaje;
}

function insertarImagen(opcion){
    var contenedor1 = document.getElementById("img1");
    var contenedor2 = document.getElementById("img2");
    var contenedor3 = document.getElementById("img3");
    var contenedor4 = document.getElementById("img4");

    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
    var img3 = document.createElement('img');
    var img4 = document.createElement('img');

    var prev1 = contenedor1.querySelector('img');
    var prev2 = contenedor2.querySelector('img');
    var prev3 = contenedor3.querySelector('img');
    var prev4 = contenedor4.querySelector('img');

    var limpiar = contenedor1.querySelector('p');
    var equipo = false;

    if(limpiar){
        contenedor1.removeChild(limpiar);
    }
    if(prev1)
    {
        contenedor1.removeChild(prev1);
    }
    if(prev2)
    {
        contenedor2.removeChild(prev2);
    }
    if(prev3)
    {
        contenedor3.removeChild(prev3);
    }
    if(prev4)
    {
        contenedor4.removeChild(prev4);
    }

    switch(opcion){
        case "clinica":
            img1.src = "img/Clinica1.jpeg";
            img2.src = "img/Clinica2.jpeg";
            img3.src = "img/Clinica3.jpeg";
            img4.src = "img/Clinica4.jpeg";

            break;
        case "tratamientos":
            img1.src = "img/tratamientos1.jpeg";
            img2.src = "img/tratamientos2.jpeg";
            img3.src = "img/tratamientos3.jpeg";
            img4.src = "img/tratamientos4.jpeg";

            break;
        case "equipo":
            img1.src = "img/equipo1.jpeg";
            img2.src = "img/equipo2.jpeg";
            equipo = true;

            break;
    }

    img1.style.width = '100%';
    img1.style.height = '100%';
    img1.alt = 'imagen1.jpeg';
    contenedor1.appendChild(img1);

    img2.style.width = '100%';
    img2.style.height = '100%';
    img2.alt = 'imagen2.jpeg';
    contenedor2.appendChild(img2);

    if(!equipo){
        img3.style.width = '100%';
        img3.style.height = '100%';
        img3.alt = 'imagen3.jpeg';
        contenedor3.appendChild(img3);

        img4.style.width = '100%';
        img4.style.height = '100%';
        img4.alt = 'imagen4.jpeg';
        contenedor4.appendChild(img4);
    }

}

function formularioContacto(){

var nombre = document.getElementById("nombre").value;
var mail = document.getElementById("mail").value;
var tel = document.getElementById("tel").value;
var edad = document.getElementById("edad").value;
var hombre = document.getElementById("hombre").checked;
var mujer = document.getElementById("mujer").checked;
var otro = document.getElementById("otro").checked;


edad = parseInt(edad);

var alerta = "Revise por favor su: ";
var alertar = false;
var telefono = true;

var contenedor = document.getElementById("respuesta");

if(nombre === "")
{
    alerta = alerta + "nombre y apellido, ";
    alertar = true;
}
if(isNaN(edad) || edad < 18 || edad > 140){
    alerta = alerta + "edad, ";
    alertar = true;   
}
if(mail === ""){
    alerta = alerta + "mail, ";
    alertar = true;
}
if((mujer && hombre) || (hombre && otro) || (mujer && otro) || !(hombre || mujer || otro)){
    alerta = alerta + "sexo.";
    alertar = true;
}
if(tel === ""){
    telefono = false;
}

if(alertar){
    alert(alerta);
    contenedor.innerHTML = alerta;

}else{

    var mensaje = "Gracias, nos comunicaremos con usted, ";

    if(hombre){
        mensaje = mensaje + "señor ";
    }else if(mujer){
        mensaje = mensaje + "señora "
    }
    
    mensaje = mensaje + nombre + ", mediante nuestro correo electrónico de contacto bocanova@gmail.com, a su dirección de correo electrónico " + mail;
    
    if(telefono){
        mensaje = mensaje + " o a su teléfono " + tel + " mediante nuestro núero de teléfono 351 111-2222."
    }else{
        mensaje = mensaje + ".";
    }
    
    contenedor.innerHTML = mensaje;
}
}

function limpiar(){
    
document.getElementById("opcion").value = "";
document.getElementById("nombre").value = "";
document.getElementById("mail").value = "";
document.getElementById("tel").value = "";
document.getElementById("edad").value = "";
document.getElementById("hombre").checked = 0;
document.getElementById("mujer").checked = 0;
document.getElementById("otro").checked = 0;
document.getElementById("respuesta").innerHTML = "";

}
