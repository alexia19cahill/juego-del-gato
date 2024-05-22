
let  botones2 = document.querySelectorAll(".botones2");
let jugador = "X";

for (let i = 0; i < botones2.length; i++) {
  botones2[i].addEventListener("click", function () {

  if (botones2[i].innerHTML == "") {
    botones2[i].innerHTML = (jugador  == "O" )? "O" : "X";
     jugador=(jugador  == "O" )? "X" : "O";

  

    
  }
    
  });
    
}




let botonIniciar = document.querySelector("button")

botonIniciar.addEventListener("click" , function () {
    
 for (let i = 0; i < botones2.length; i ++) {

    botones2[i].innerHTML = "";
   
 }

})



 function validarGanador(jugador) {
     console.log(jugador);
 for (let index = 0; index < botones2.length; index++) {
 


    if (bn0.innerHTML == jugador && bn1.innerHTML == jugador && bn2.innerHTML == jugador) {
        return alert ("ganaste",jugador);

    }
    

    if (bn3.innerHTML == jugador && bn4.innerHTML == jugador && bn5.innerHTML == jugador) {
        return alert ("ganaste",jugador);
      
        
     }
       if (bn6.innerHTML == jugador && bn7.innerHTML == jugador && bn8.innerHTML == jugador) {
         return alert ("ganaste",jugador);
        
    }
    
    if (bn0.innerHTML == jugador && bn3.innerHTML == jugador && bn6.innerHTML == jugador) {
         return alert ("ganaste",jugador);

     }
    

     if (bn1.innerHTML == jugador && bn4.innerHTML == jugador && bn6.innerHTML == jugador) {
        return alert ("ganaste",jugador);
      
        
     }
       if (bn2.innerHTML == jugador && bn5.innerHTML == jugador && bn8.innerHTML == jugador) {
         return alert ("ganaste",jugador);
        
     }


      if (bn0.innerHTML == jugador && bn4.innerHTML == jugador && bn8.innerHTML == jugador) {
         return alert ("ganaste",jugador);

    }
    

     if (bn2.innerHTML == jugador && bn4.innerHTML == jugador && bn6.innerHTML == jugador) {
         return alert ("ganaste",jugador);
      
        
     }
    
 }


 }





