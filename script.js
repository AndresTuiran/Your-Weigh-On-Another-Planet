
var text_m = document.getElementById("text_m");
var button_m = document.getElementById("button_m");
var text_j = document.getElementById("text_j");
var button_j = document.getElementById("button_j");
var text_s = document.getElementById("text_s");
var button_s = document.getElementById("button_s");
var help = document.getElementById('help');
var info = document.getElementById("info");


button_m.addEventListener('click', peso_planetas_m);
button_j.addEventListener('click', peso_planetas_j);
button_s.addEventListener('click', peso_planetas_s);
help.addEventListener('click', help_command);
info.addEventListener('click', Information);


var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.44

function peso_planetas_m(){
    var usuario = parseInt(text_m.value);
    var peso = parseInt(usuario);
    peso_final = peso * g_marte / g_tierra;
    peso_final = parseInt(peso_final);
    if ( peso_final > 0){
        alert('Tu peso en Marte es ' + peso_final + ' Kilos' );
    }
    else if (!peso_final){
        alert('Digite un caracter valido' );
    }
    

}
function peso_planetas_j(){
    var usuario = parseInt(text_j.value);
    var peso = parseInt(usuario);
    peso_final = peso * g_jupiter / g_tierra;
    peso_final = parseInt(peso_final);
    if ( peso_final > 0){
        alert('Tu peso en Jupiter es ' + peso_final + ' Kilos' );
    }
    else if (!peso_final){
        alert('Digite un caracter valido' );
    }
    

}
function peso_planetas_s(){
    var usuario = parseInt(text_s.value);
    var peso = parseInt(usuario);
    peso_final = peso * g_saturno / g_tierra;
    peso_final = parseInt(peso_final);
    if ( peso_final > 0){
        alert('Tu peso en Saturno es ' + peso_final + ' Kilos' );
    }
    else if (!peso_final){
        alert('Digite un caracter valido' );
    }
}

function help_command()
{
    alert('Para usar la pagina sigue estos pasos:\n'  + '-Digita tu peso en kilos en los campos de texto\n' + '-Presiona el boton go\n' + '-Se te notificara tu peso en el planeta indicado');
}


function Information(){
    alert('Pagina creada por Andrés Tuiran');
}

function open() {
    document.getElementById('alert').style.display="block";
}

