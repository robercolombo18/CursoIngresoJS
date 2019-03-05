
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;


    largo=prompt("ingrese el valor del largo del rectangulo.").value;
    largo=parseInt(largo);

    amcho=prompt("ingrese el valor del ancho del rectangulo.").value;
    ancho=parseInt(ancho);

    perimetro=ancho*2 + largo*2
    alert("el perimetro del rectangulo es:" perimetro);

}
