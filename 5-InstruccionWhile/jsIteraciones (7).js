function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var respuesta;

	acumulador=0;
	contador=0;
	respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador++;
		console.log("Cantidad de numeros ingresados: " + contador);
		console.log("Acumulador: " + acumulador);

		respuesta=confirm("Deseas continuar?");
	
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}