function mostrar()
{
    var letra;
    var numero;
    var respuesta;
    var cantidadNumerosPar;
    var cantidadNumerosImpar;
    var cantidadCeros;
    var promedioPositivos;
    var sumaPositivos;
    var cantidadPositivos;
    var sumaNegativos;
    var bandera;
    var numeroMinimo;
    var numeroMaximo;
    var letraMaxima;
    var letraMinima;

    respuesta=true;
    cantidadNumerosPar=0;
    cantidadNumerosImpar=0;
    cantidadCeros=0;
    sumaPositivos=0;
    cantidadPositivos=0;
    sumaNegativos=0;
    bandera=0;


    while(respuesta==true)
    {
        letra=prompt("Ingrese una letra.");
        
        numero=prompt("Ingrese un numero entre -100 y 100.");
        numero=parseInt(numero);

        while(!(numero>=-100 && numero<=100))
        {
            numero=prompt("Ingrese un numero valido.")
        }

        if(numero%2==0)
        {
            cantidadNumerosPar++;
        }
        else
        {
            cantidadNumerosImpar++;
        }

        if(numero==0)
        {
            cantidadCeros++;
        }

        if(numero>0)
        {
            sumaPositivos=sumaPositivos+numero;
            cantidadPositivos++;
        }

        promedioPositivos=sumaPositivos/cantidadPositivos;


        if(numero<0)
        {
            sumaNegativos=sumaNegativos+numero;
        }



        if(bandera==0)
        {
            numeroMaximo=numero;
            numeroMinimo=numero;
            bandera=1;
        }
        else
        {
            if(numero>numeroMaximo)
            {
                numeroMaximo=numero;
                letraMaxima=letra;
            }
            
            if(numero<numeroMinimo)
            {
                numeroMinimo=numero;
                letraMinima=letra;
            }
        }






        respuesta=confirm("Deseas continuar?");
    }

    alert("Cantidad de numeros pares: " + cantidadNumerosPar + ". Cantidad de numeros impares: " + cantidadNumerosImpar + ". Cantidad de ceros: " + cantidadCeros + ". Promedio de positivos: " + promedioPositivos + ". Suma de negativos: " + sumaNegativos + ". Numero minimo ingresado: " + numeroMinimo + "con la letra: " + letraMinima +". Numero maximo ingresado: " + numeroMaximo + " con la letra: " + letraMaxima);
 
}
