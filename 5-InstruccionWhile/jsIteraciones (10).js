function mostrar()
{
	var numero;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta=true;
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;

	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero.");
		numero=parseInt(numero);

		if(numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
		}

		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
		}

		if(numero>0)
		{
			cantidadPositivos++;
		}

		if(numero<0)
		{
			cantidadNegativos++;
		}

		if(numero==0)
		{
			cantidadCeros++;
		}

		if(numero%2==0)
		{
			cantidadPares++;
		}

		if(numero>0)
		{
			promedioPositivos=sumaPositivos/cantidadPositivos;
		}

		if(numero<0)
		{
			promedioNegativos=sumaNegativos/cantidadNegativos;
		}

		diferencia=sumaPositivos-sumaNegativos;


		respuesta=confirm("Deseas continuar?");
	}


	console.log("Suma de negativos: " + sumaNegativos);
	console.log("Suma positivos: " + sumaPositivos);
	console.log("Cantidad de positivos: " + cantidadPositivos);
	console.log("Cantidad de negativos: " + cantidadNegativos);
	console.log("Cantidad de ceros: " + cantidadCeros);
	console.log("Cantidad de pares: " + cantidadPares);
	console.log("Promedio de positivos: " + promedioPositivos);
	console.log("Promedio de negativos: " + promedioNegativos);
	console.log("Diferencia entre positivos y negativos: " + diferencia);

}