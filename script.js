let jugador = ("x" , "o")

let jugadorO = "O"
let jugadorX = "x"
let jugadoractivo = jugadorO 
// esto contiene todos los botones 
let  botones = document.querySelectorAll(".botones");

console.log(botones);




// se valida el ganador usando if se valida que los tres campos tengan el mismo valor y si es asi se mostrara un alert
// se compara con el  jugador index para saber que valor se va a validar
function validarGanador(jugador) {
     console.log(jugador);
 for (let index = 0; index < botones.length; index++) {
    //  validar horizontal
    if ((bn0.innerHTML == jugador[index] && bn1.innerHTML == jugador[index] && bn2.innerHTML == jugador[index]) ||
    (bn3.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn5.innerHTML == jugador[index]) ||
    (bn6.innerHTML == jugador[index] && bn7.innerHTML == jugador[index] && bn8.innerHTML == jugador[index])) {
         turno.innerHTML="GANASTE"
    return alert(""+ jugador[index] + " " + "ha ganado");
    }
    // validar ganes verticales
    if ((bn0.innerHTML == jugador[index] && bn3.innerHTML == jugador[index] && bn6.innerHTML == jugador[index]) ||
    (bn1.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn6.innerHTML == jugador[index]) ||
   (bn2.innerHTML == jugador[index] && bn5.innerHTML == jugador[index] && bn8.innerHTML == jugador[index])) {
     turno.innerHTML="GANASTE"
    return alert(""+ jugador[index] + " " + "ha ganado");
   }

//   validar ganes diagonales
   if ((bn0.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn8.innerHTML == jugador[index]) ||
   (bn2.innerHTML == jugador[index] && bn4.innerHTML == jugador[index] && bn6.innerHTML == jugador[index])) {
    turno.innerHTML="GANASTE"
    return alert(""+ jugador[index] + " " + "ha ganado");
   }
   }


//    validar empate
    let marcadas = 0;
        for (let i = 0; i < botones.length; i++) {
            if (botones[i].innerHTML !== "") {
                marcadas++;
            }
        }  
        console.log(botones.length);
          console.log(marcadas);
          console.log(marcadas === botones.length);
        if (marcadas === botones.length) {
            return alert("Empate");
        

        }

      
    }
    
 



let darClick =  (e) =>  {

  
//   si el  espacio en el los botones es igual a vacio marque una x
    if (e.currentTarget.innerHTML == "") {
        e.currentTarget.innerHTML = "x"
        // se llama el p por medio del nombre del id
        turno.innerHTML="TURNO DE  ⭕"
        validarGanador("x")

    //  setTimeout se utilizo para dar tiempo al resultuda en este caso se le
    // dio 1000 que es igual a un segundo  antes de  marcar en cualquier espacio
    setTimeout(() => {
      computadora()
    }, 1000);
    }
   


    
}


  
function computadora() {
   
//    se crea un ciclo en cual va a recorrer hasta encontrar un espacio en el cual meterse
      
    let bandera = true
    let cont = 0; 
    while (bandera) {
        cont++
        // se implementa el math floor para que tome y redondea al entero inferior mas proximo
        // el math ramdom crea un valor aleatorio es este caso se le indico que el max es 9
        //  y se crea un if en el cual va a validar si hay espacios en blanco para que marque o
         posicion = Math.floor(Math.random() * 9)
         if (botones[posicion].innerHTML == "") {
            botones[posicion].innerHTML = "O";
             turno.innerHTML="TURNO DE LA  ❌"

            // se hace el break para que termine el bucle, ciclo o for
           bandera = false
        }else if (cont == 9) {
            bandera = false
        }
        
       
           console.log(cont);
        
    }
   
      validarGanador("O")
    
}


for (let index = 0; index < botones.length; index++) {
  
    botones[index].addEventListener("click", darClick );

 
}





// se creo un for el cual recorre todos los espacios y se implimenta un evento en el cual al darclick se empieza de nuevo

let botonIniciar = document.querySelector("button")

botonIniciar.addEventListener("click" , function () {
    
 for (let index = 0; index < botones.length; index++) {

    botones[index].innerHTML = "";
   
 }

})