function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;

    numeroUno=prompt("Ingrese el primer numero.");
    numeroUno=parseInt(numeroUno);

    numeroDos=prompt("Ingrese el segundo numero.");
    numeroDos=parseInt(numeroDos);

    suma=numeroUno+numeroDos;

    if(numeroUno==numeroDos)
    {
        alert(numeroUno + "" + numeroDos);
    }
    else
    {
        if(numeroUno>numeroDos)
        {
            alert(numeroUno-numeroDos);
        }
        else
        {
            alert(suma);
        }

        if(suma>10)
        {
            alert("La suma es " + suma + " y superó el 10.");
        }
    }

}
