/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato
	dato=prompt("Ingrese nombre");
	document.getElementById("elNombre").value=dato;
	console.log;
	console.info;
	console.error;
	alert(dato);
}