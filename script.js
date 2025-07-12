
window.onload = function () {
    document.getElementById("calendario-content").innerText = calendario.join("\n");
    document.getElementById("actividades-content").innerText = actividades.join("\n");
    document.getElementById("hoteles-content").innerText = hoteles.join("\n");
    document.getElementById("vuelos-content").innerText = vuelos.join("\n");
    document.getElementById("info-content").innerText = info.join("\n");
    document.getElementById("meteo-content").innerText = meteo.join("\n");
};
