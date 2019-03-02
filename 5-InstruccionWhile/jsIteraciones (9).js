function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var bandera;
	var numeroMinimo;
	var numeroMaximo;

	respuesta=true;
	bandera=0;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);

		if(bandera==0)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			bandera=1;
		}
		else
		{
			if(numeroMaximo<numeroIngresado)
			{
				numeroMaximo=numeroIngresado;
			}
			
			if(numeroMinimo>numeroIngresado)
			{
				numeroMinimo=numeroIngresado;
			}

		}

		console.log("Maximo: " + numeroMaximo);
		console.log("Minimo: " + numeroMinimo);


		respuesta=confirm("Deseas continuar?");
	}

	document.getElementById("maximo").value=numeroMaximo;
	document.getElementById("minimo").value=numeroMinimo;

}