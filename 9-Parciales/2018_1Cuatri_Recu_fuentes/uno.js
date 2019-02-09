
function mostrar()
{
    var base;
    var altura;
    var superficie;
    var perimetro;

    base=prompt("Ingrese base");
    altura=prompt("Ingrese altura");

    base=parseInt(base);
    altura=parseInt(altura);

    superficie=(base*altura)/2;
    perimetro=(base+altura);

    alert("La superficie es " + superficie + "y el perimetro es " + perimetro);

}
