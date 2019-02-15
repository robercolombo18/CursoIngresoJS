
function mostrar()
{
    var mascotauno
    var mascotados
    var pesomascotauno
    var pesomascotados
    var pesototal

    mascotauno=prompt("Ingrese el nombre de la primer mascota.");
    mascotados=prompt("Ingrese el nombre de la segunda mascota.");

    pesomascotauno=prompt("Ingrese el peso de la primer mascota.");
    pesomascotados=prompt("Ingrese el peso de la segunda mascota.");

    pesomascotauno=parseInt(pesomascotauno);
    pesomascotados=parseInt(pesomascotados);
    pesototal=parseInt(pesototal);

    pesototal=pesomascotauno+pesomascotados;

    alert("Tenes dos mascotas " + mascotauno + " y " + mascotados + " , que pesan " + pesomascotauno + " y " + pesomascotados + " , la suma de los kilos es " + pesototal);

}
