function mostrar()
{
	/*
	-2 -5 3 8 0
	*/

	var contador;
	var respuesta;
	var numeroPositivos;
	var sumaNegativos;
	var sumaIngresado;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var cantidadPares;

	respuesta="si"
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadPares=0;
	
	while(respuesta!='no')
	{

		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos++;
			promedioNegativos=sumaNegativos/cantidadNegativos;
		}
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos++;
			promedioPositivos=sumaPositivos/cantidadPositivos;
			diferencia=sumaPositivos-sumaNegativos;
		}
		if(numeroIngresado==0)
		{
			cantidadCeros++;
		}
		if(numeroIngresado%2==0)
		{
			cantidadPares++;
		}


		respuesta=prompt("Ingrese no para salir");
	}
	console.log("La suma de los negativos es: " + sumaNegativos);
	console.log("La suma de los positivos es: " + sumaPositivos);
	console.log("La cantidad de negativos es: " + cantidadNegativos);
	console.log("La cantidad de positivos es: " + cantidadPositivos);
	console.log("La cantidad de ceros es: " + cantidadCeros);
	console.log("El promedio de positivos es: " + promedioPositivos);
	console.log("El promedio de negativos es: " + promedioNegativos);
	console.log("La diferencia entre positivos y negativos es: " + diferencia);
	console.log("La cantidad de pares es: " + cantidadPares);



}