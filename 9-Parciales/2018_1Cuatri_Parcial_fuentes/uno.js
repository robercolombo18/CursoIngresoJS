
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho=prompt("Ingrese ancho");
    largo=prompt("Ingrese largo");

    ancho=parseInt(ancho);
    largo=parseInt(largo);

    perimetro=ancho*2+largo*2

    alert("El perimetro es " + perimetro)


}
