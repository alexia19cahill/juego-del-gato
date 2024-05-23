let jugadores = ("x", "o");

let botones = document.querySelectorAll(".botones3");

console.log(botones);

let marcadas = 0;

function validarGanador(jugador) {
  console.log(jugador);
  for (let index = 0; index < botones.length; index++) {
    if (
      bn0.innerHTML == jugador &&
      bn1.innerHTML == jugador &&
      bn2.innerHTML == jugador
    ) {
      return alert("ganaste", jugador);
    }

    if (
      bn3.innerHTML == jugador &&
      bn4.innerHTML == jugador &&
      bn5.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
    }
    if (
      bn6.innerHTML == jugador &&
      bn7.innerHTML == jugador &&
      bn8.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
    }

    if (
      bn0.innerHTML == jugador &&
      bn3.innerHTML == jugador &&
      bn6.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
    }

    if (
      bn1.innerHTML == jugador &&
      bn4.innerHTML == jugador &&
      bn6.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
      console.log(marcadas === botones.length);
    }
    if (
      bn2.innerHTML == jugador &&
      bn5.innerHTML == jugador &&
      bn8.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
    }

    if (
      bn0.innerHTML == jugador &&
      bn4.innerHTML == jugador &&
      bn8.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
    }

    if (
      bn2.innerHTML == jugador &&
      bn4.innerHTML == jugador &&
      bn6.innerHTML == jugador
    ) {
      return alert("ganaste", +jugador);
    }

    // Verificar si hay empate
    for (let i = 0; i < botones.length; i++) {
      if (botones[i].innerHTML !== "") {
        console.log(marcadas);
        marcadas++;
      }
    }
    // Si todas las celdas están marcadas y no hay ganador, es un empate
    if (marcadas === botones.length) {
      return alert("Empate");
    }
  }
}

{
}

let darClick = (e) => {
  //   si el  espacio en el los botones es igual a vacio marque una x
  if (e.currentTarget.innerHTML == "") {
    e.currentTarget.innerHTML = "x";
  }
  validarGanador("x");

  //  setTimeout se utilizo para dar tiempo al resultuda en este caso se le
  // dio 1000 que es igual a un segundo  antes de  marcar en cualquier espacio
  setTimeout(() => {
    computadora();
  }, 1000);
};

function computadora() {
  //    se crea un for que hace un ciclo en cual va a recorrer hasta 15 veces para encontrar un espacio en el cual meterse

  let bandera = true;
  let cont = 0;
  while (bandera) {
    cont++;
    // se implementa el math floor para que tome y redondea al entero inferior mas proximo
    // el math ramdom crea un valor aleatorio es este caso se le indico que el max es 9
    //  y se crea un if en el cual va a validar si hay espacios en blanco para que marque o
    posicion = Math.floor(Math.random() * 9);
    if (botones[posicion].innerHTML == "") {
      botones[posicion].innerHTML = "O";

      // se hace el break para que termine el bucle, ciclo o for
      bandera = false;
    } else if (cont == 9) {
      bandera = false;
    }

    console.log(cont);
  }

  validarGanador("O");
}

for (let index = 0; index < botones.length; index++) {
  botones[index].addEventListener("click", darClick);
}

let botonIniciar = document.querySelector("button");

botonIniciar.addEventListener("click", function () {
  for (let index = 0; index < botones.length; index++) {
    botones[index].innerHTML = "";
  }
});
