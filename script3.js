let jugadores = ("x", "o");

let botones = document.querySelectorAll(".botones3");

console.log(botones);

let marcadas = 0;

function validarGanador(jugador) {
  console.log(jugador);
for (let index = 0; index < botones.length; index++) {

 if ((bn0.innerHTML == jugador[index] && bn1.innerHTML == jugador[index] && bn2.innerHTML == jugador[index]) ||
 (bn3.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn5.innerHTML == jugador[index]) ||
 (bn6.innerHTML == jugador[index] && bn7.innerHTML == jugador[index] && bn8.innerHTML == jugador[index])) {
    turno.innerHTML="GANASTE"
 return alert(""+ jugador[index] + " " + "ha ganado");
 }
 
 if ((bn0.innerHTML == jugador[index] && bn3.innerHTML == jugador[index] && bn6.innerHTML == jugador[index]) ||
 (bn1.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn6.innerHTML == jugador[index]) ||
(bn2.innerHTML == jugador[index] && bn5.innerHTML == jugador[index] && bn8.innerHTML == jugador[index])) {
  turno.innerHTML="GANASTE"
 return alert(""+ jugador[index] + " " + "ha ganado");
}


if ((bn0.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn8.innerHTML == jugador[index]) ||
(bn2.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn6.innerHTML == jugador[index])) {
    turno.innerHTML="GANASTE"
 return alert(""+ jugador[index] + " " + "ha ganado");
}
}
    console.log(marcadas);
     for (let i = 0; i < botones.length; i++) {
         if (botones[i].innerHTML !== "") {
             marcadas++;
         }
     }
    
     if (marcadas === botones.length) {
         return alert("Empate");
     }
 }


let darClick = (e) => {
  //   si el  espacio en el los botones es igual a vacio marque una x
  if (e.currentTarget.innerHTML == "") {
    e.currentTarget.innerHTML = "x";
     turno.innerHTML="TURNO DE  ⭕"
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
       turno.innerHTML="TURNO DE   ❌"

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
