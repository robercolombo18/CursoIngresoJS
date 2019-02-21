function mostrar()
{ 
    var laHora = document.getElementById('hora').value;
    var mensaje

    laHora=parseInt(laHora);

    switch(laHora)
    {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje="Es de mañana.";
        break;

        default:
            mensaje="No es de mañana";
        break;

    }

    alert(mensaje);


}