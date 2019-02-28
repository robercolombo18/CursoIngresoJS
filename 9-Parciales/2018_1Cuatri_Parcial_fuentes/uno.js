
function mostrar()
{
    var largo;
    var ancho;
    var suma;
    var mensaje;

    largo=prompt("ingrese el largo ");
    ancho=prompt("ingrese el ancho");
    
    
    largo=parseInt(largo);
    ancho=parseInt(ancho);

    suma=largo*2 + ancho*2;

    mensaje= "La suma es: " + suma;

    alert(mensaje);


}
