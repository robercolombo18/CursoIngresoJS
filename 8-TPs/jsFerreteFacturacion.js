/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno
    var preciodos
    var preciotres
    var suma

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;

    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);

    suma = preciouno + preciodos + preciotres;

    alert("La suma es " + suma);
	
}
function Promedio () 
{
    var preciouno
    var preciodos
    var preciotres
    var promedio

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;

    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);

    promedio= (preciouno+preciodos+preciotres)/3;

    alert ("El promedio es " + promedio);


	
}
function PrecioFinal () 
{
    var preciouno
    var preciodos
    var preciotres
    var preciofinal

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;

    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);

    preciofinal= (preciouno+preciodos+preciotres)+(preciouno+preciodos+preciotres)*0.21;

    alert("El precio final mas IVA es " + preciofinal);
	
}