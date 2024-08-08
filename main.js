function tocarSom (idElementoAudio){
  
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++){

 const tecla = listaDeTeclas[contador];
 const instrumento = tecla.classList[1];
 const idAudio = `#som_${instrumento}`;

 
  tecla.onclick = function(){
    tocarSom(idAudio)
  };
  
  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
 
}