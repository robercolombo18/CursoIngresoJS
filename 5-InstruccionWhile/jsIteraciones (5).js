function mostrar()
{

    var sexo;

    while(!(sexo=="f" || sexo=="m"))
    {
        sexo=prompt("Ingrese (f) para femenino, o (m) para masculino.");
        
    }





    document.getElementById('Sexo').value=sexo;

}