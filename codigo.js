//Varibles mla definidas
/*let triunfos = 0;
let perdidas = 0;*/

document.querySelectorAll(".imagen").forEach((e) => {
  e.addEventListener("click", opcion);
});


let ganadas = 0
let perdidas = 0

let puntajeJugador = document.getElementById('jugador')
let puntajePc = document.getElementById('pc')

function juego(escogidoJugador, escogidoPc) {

    let condicionParaGanar =
      (escogidoJugador == 3 && escogidoPc == 2) ||
      (escogidoJugador == 2 && escogidoPc == 1) ||
      (escogidoJugador == 1 && escogidoPc == 3);

    if (escogidoJugador == escogidoPc) {
      alert("Empate");
      //return alert("Empate");
    } else {
      if (condicionParaGanar) {
        alert("Ganaste") ;
        ganadas+= 1
        puntajeJugador.innerText=ganadas
        //return triunfos++;
      } else {
        alert("Perdiste");
        perdidas+= 1
        puntajePc.innerText=perdidas
      }
    }
    document.getElementById(
      "resultado"
    ).innerHTML = `<img src="img/${escogidoJugador}.png"><br><img src="img/${escogidoPc}.png">`;
  }

function opcion() {
let Jugador = 0;
let pc = 0;
  pc = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let id = this.id;
  switch (id) {
    case "piedra":
      Jugador = 1;
      juego(Jugador, pc);
      break;
    case "papel":
      Jugador = 2;
      juego(Jugador, pc);
      break;
    case "tijera":
      Jugador = 3;
      juego(Jugador, pc);
      break;
    default:
      alert("No valido"); 
      break;
  }
}



/* 
while (ganador) {
  Jugador = prompt("Ingresa 1 para Piedra 2 Para Papel o 3 para Tijera");
  pc = aleatorio(3, 1);
  eleccion();
  if (Jugador == 1 || Jugador == 2 || Jugador == 3) {
    alert("Jugador lanzo " + eleccion(Jugador));
    alert("PC lanzo " + eleccion(pc));
    juego(Jugador, pc);
    alert("resultado pc " + perdidas + " y Resultado Jugador " + triunfos);
  }

  ganador = triunfos < 3 && perdidas < 3;
} */

//alert("recarga para volver a Jugar");
