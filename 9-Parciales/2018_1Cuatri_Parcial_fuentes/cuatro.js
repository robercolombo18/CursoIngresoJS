function mostrar()
{
    var numerouno;
    var numerodos;
    var suma;

    numerouno=prompt("Ingresar el primer numero");
    numerodos=prompt("Ingresar el segundo numero");

    numerouno=parseInt(numerouno);
    numerodos=parseInt(numerodos);

    suma=numerouno+numerodos;

    if(numerouno==numerodos)
    {
        alert(numerouno + "" + numerodos);
    }
    else
    {
        if(numerouno>numerodos)
        {
            alert(numerouno-numerodos);
        }
        else
        {
            alert(suma);

            if(suma>10)
            {
                alert("La suma es " + suma + " y superó el 10.");
            }
            else
            {
                
            }
        }
    }

}
