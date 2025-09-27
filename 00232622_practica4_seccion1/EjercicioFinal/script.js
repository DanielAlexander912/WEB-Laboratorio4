function problemasSemana(dia) {
    let respuesta = "";
    switch (dia) {
        case "Lunes":
        case "lunes":
            respuesta = "Actividad: Atender un cliente especifico.";
            break;
        case "Martes":
        case "martes":
            respuesta = "Actividad: Visitar una agencia fuera de la ciudad.";
            break;
        case "Miercoles":
        case "miercoles":
        case "Miércoles":
        case "miércoles":
            respuesta = "Actividad: Llevar a mi hija al ballet (balé).";
            break;
        case "Jueves":
        case "jueves":
            respuesta = "Actividad: Priorizar entregas de desarrollo.";
            break;
        case "Viernes":
        case "viernes":
            respuesta = "Actividad: Atender problemas de manera remota.";
            break;
        case "Sabado":
        case "sabado":
        case "Sábado":
        case "sábado":
            respuesta = "Actividad: Hacer lo que mi esposa quiera.";
            break;
        case "Domingo":
        case "domingo":
            respuesta = "No hay actividades por resolver este dia.";
            break;
        default:
            respuesta = "El dia ingresado no es valido.";
            break;
    }
    return respuesta;
}

document.addEventListener("DOMContentLoaded", () => {
    const elementMensajeDia = document.querySelector("#mensaje_dia");
    const elementMensajeRecordatorio = document.querySelector("#mensaje_recordatorio");
    const elementMensaje = document.querySelector("#mensaje");
    
    function crearMensaje() {
        let dia = document.querySelector("#dia").value;
        let recodatorio = document.querySelector("#recordatorio").value;

        elementMensajeDia.innerHTML = dia;
        elementMensaje.innerHTML = problemasSemana(dia);
        elementMensajeRecordatorio.innerHTML = recodatorio;
    }

    document.querySelector("#boton").onclick = crearMensaje;
});