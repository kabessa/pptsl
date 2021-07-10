var scoreUser = 0;
var scoreMakina = 0;

var nick = prompt("Player nick:");

document.getElementById("nick").textContent = nick;

function jogo() {

    var maquina = aleatorio("mao-maquina");
    var player = aleatorio("mao-jogador");

    // Se o usuário pontuar
    if(maquina == player){
        console.log("empate");
    } else if (maquina == 1 && player == 3){
        scoreUser++;
    } else if(maquina == 3 && player == 5){
        scoreUser++;
    } else if(maquina == 2 && player == 5){
        scoreUser++;
    } else if(maquina == 4 && player == 2){
        scoreUser++;
    } else if(maquina == 1 && player == 4){
        scoreUser++;
    } else if(maquina == 5 && player == 1){
        scoreUser++;
    } else if(maquina == 2 && player == 1){
        scoreUser++;
    } else if(maquina == 4 && player == 3){
        scoreUser++;
    } else if(maquina == 5 && player == 4){
        scoreUser++;
    } else if(maquina == 3 && player == 2){
        scoreUser++;
    } 
    // Se a máquina pontuar
    else if (maquina == 3 && player == 1){
        scoreMakina++;
    } else if(maquina == 5 && player == 3){
        scoreMakina++;
    } else if(maquina == 5 && player == 2){
        scoreMakina++;
    } else if(maquina == 2 && player == 4){
        scoreMakina++;
    } else if(maquina == 4 && player == 1){
        scoreMakina++;
    } else if(maquina == 1 && player == 5){
        scoreMakina++;
    } else if(maquina == 1 && player == 2){
        scoreMakina++;
    } else if(maquina == 3 && player == 4){
        scoreMakina++;
    } else if(maquina == 4 && player == 5){
        scoreMakina++;
    } else if(maquina == 2 && player == 3){
        scoreMakina++;
    } 

    document.getElementById("score-player").textContent = scoreUser;
    document.getElementById("score-maquina").textContent = scoreMakina;
}

function aleatorio(elemento){
    
    var sorteio = Math.floor(Math.random() * 5 + 1);

    switch (sorteio) {
        case 1:
            document.getElementById(elemento).src = "img/pedra.png";
            break;
        case 2:
            document.getElementById(elemento).src = "img/lagarto.png";
            break;
        case 3:
            document.getElementById(elemento).src = "img/papel.png";
            break;
        case 4:
            document.getElementById(elemento).src = "img/spock.png";
            break;
        case 5:
            document.getElementById(elemento).src = "img/tesoura.png";
            break;
        default:
            break;
    }

    return sorteio;

}
