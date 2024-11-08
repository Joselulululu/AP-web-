/*
Ejemplo de fichero con JavaScript
*/
function pulsar1(){
    document.getElementById( 'boton1').innerHTML= "Muy bien, lo has pulsado :)";
    document.getElementById('boton1').style.fontSize = "30 px" ;
    document.getElementById( 'boton1').style.background = "red";
    document.getElementById( 'boton1').style.padding = "30px";

}
function pulsar2(){
    var boton=document.getElementById('boton2')
    boton.innerHTML="Muy mal, lo has pulsado :(";
    boton.style.fontSize="30px";
    boton.style.backgroundColor="red";
    boton.style.padding="20px";
}