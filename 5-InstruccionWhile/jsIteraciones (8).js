function mostrar()
{
	var positivos;
	var negativos;
	var respuesta;
	var numero;

	respuesta=true;
	positivos=0;
	negativos=1;

	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero>0)
		{
			positivos=positivos+numero;
		}

		if(numero<0)
		{
			negativos=negativos*numero;
		}



		respuesta=confirm("Desea continuar?");
	}

	document.getElementById("suma").value=positivos;
	document.getElementById("producto").value=negativos;

}