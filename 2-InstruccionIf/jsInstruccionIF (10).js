function mostrar()
{
	var numerorandom

	numerorandom=parseInt(numerorandom);
	
	numerorandom=Math.floor(Math.random()*10)+1;

	if(numerorandom>=9){
		alert("Excelente");
	}
	else{
		if(numerorandom>=4){
			alert("Aprobó")
		}
		else{
			alert("Vamos, la proxima se puede");
		}
	
	}
}