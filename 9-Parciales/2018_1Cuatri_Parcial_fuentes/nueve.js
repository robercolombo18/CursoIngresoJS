function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var cantidadTemperaturasPares;
    var bandera;
    var pesoMaximo;
    var pesoMinimo;
    var marcaPesado;
    var cantidadProductosMenosCero;
    var sumaPesos;
    var cantidadPesos;

    respuesta=true;
    cantidadTemperaturasPares=0;
    bandera=0;
    cantidadProductosMenosCero=0;
    sumaPesos=0;
    cantidadPesos=0;

    while(respuesta==true)
    {
        marca=prompt("Ingrese la marca del producto.");



        peso=prompt("Ingrese el peso del producto entre 1 y 100.");
        peso=parseInt(peso);

        while(!(peso>=1 && peso<=100))
        {
            peso=prompt("Ingrese un peso valido.");
        }



        temperatura=prompt("Ingrese la temperatura de almacenamiento entre -30 y 30.");
        temperatura=parseInt(temperatura);

        while(!(temperatura>=-30 && temperatura<=30))
        {
            temperatura=prompt("Ingrese una temperatura valida.");
        }

        //---------------PUNTO A-----------------//

        if(temperatura%2==0)
        {
            cantidadTemperaturasPares++;
        }

        //----------------PUNTO B---------------//

        if(bandera==0)
        {
            pesoMaximo=peso;
            pesoMinimo=peso;
            bandera=1;
        }
        else
        {
            if(peso>pesoMaximo)
            {
                pesoMaximo=peso;
                
                if(marca=="pepito")
                {
                    marcaPesado="pepito";
                }
            }
    
            if(peso<pesoMinimo)
            {
                pesoMinimo=peso;
            }

        }



        //-------------------PUNTO C----------------//

        if(temperatura<0)
        {
            cantidadProductosMenosCero++;
        }


        //-------------------PUNTO D-----------------//

        if(peso>=1 && peso<=100)
        {
            sumaPesos=sumaPesos+peso;
            cantidadPesos++;
        }




        promedioPeso=sumaPesos/cantidadPesos;

        respuesta=confirm("Deseas continuar?");
    }

    alert("Cantidad de temperaturas pares: " + cantidadTemperaturasPares + " . Marca del producto mas pesado: " + marcaPesado + " . Cantidad de productos a menos de 0°C: " + cantidadProductosMenosCero + " . Promedio de pesos: " + promedioPeso + " . Peso maximo: " + pesoMaximo + " . Peso minimo: " + pesoMinimo);

}
