let creador;
let ayudador;

creador = document.createElement("div");
creador.id = "principal";
document.body.appendChild(creador);

ayudador = creador;

creador = document.createElement("h1");
creador.innerText = "EncuentraTuAula";
creador.classList.add("titulo");

ayudador.appendChild(creador);

creador = document.createElement("button");
creador.id = "pantalla-completa-btn";
ayudador.appendChild(creador);
ayudador = creador;
creador = document.createElement("img");
creador.id = "pantalla-completa-img";
creador.src = "../statics/media/abrir.png";
ayudador.appendChild(creador);


ayudador.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      // Entrar en pantalla completa
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari y Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer y Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Salir de pantalla completa
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });

ayudador = document.getElementById("principal");