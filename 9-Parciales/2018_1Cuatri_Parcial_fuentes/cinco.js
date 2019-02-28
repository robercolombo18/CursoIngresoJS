function mostrar()
{
    var planeta;
    var mensaje;

    planeta=prompt("Ingresa un planeta del sistema solar");

    switch(planeta)
    {
        case "mercurio":
            mensaje="Acá hace mas calor!";
        break;
        
        case "tierra":
            mensaje="Acá vivimos!";
        break;

        case "saturno":
            mensaje="Acá hace mas frio!";
        break;

        case "pluton":
            mensaje="Acá hace mucho mas frio!";
        break;

        default:
            mensaje="No es un planeta valido";
        break;



    }




    alert(mensaje);

}
