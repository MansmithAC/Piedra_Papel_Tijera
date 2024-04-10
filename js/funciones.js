document.addEventListener("DOMContentLoaded", function () {
//ESCENARIO
    const escInicio = document.querySelector(".inicio");
    const escUsuarioElige = document.querySelector(".usuario_elige");
    const escComputadoraElige = document.querySelector(".computadora_elige");
    const escResultado = document.querySelector(".resultado");

//ELEMENTOS DEL DOM
    const btnIniciar = document.querySelector(".btn_iniciar");
    const btnPiedra = document.querySelector(".btn_piedra");
    const btnPapel = document.querySelector(".btn_papel");
    const btnTijera = document.querySelector(".btn_tijera");
    const txtEleccionComputador = document.querySelector(".eleccion_computador");
    const btnContinuar = document.querySelector(".btn_continuar");
    const txtResultado = document.querySelector(".resultado h1");
    const txtSubresultado = document.querySelector(".resultado h2");
    const contenedorComputadorElige = document.querySelector(".computadora_elige div");
    const btnReiniciar = document.querySelector(".btn_reiniciar");
    const animComputadorElige = document.querySelector(".computadora_elige div");

    //LOGICA
    let usuarioElige;
    let computadoraElige;
    let inicio;

    //INICIO
    escUsuarioElige.style.display= "none";
    escComputadoraElige.style.display="none";
    escResultado.style.display="none";

    //AL USAR BOTON INICIAR
    btnIniciar.addEventListener("click", function(){
        escUsuarioElige.style.display= "block";
        escInicio.style.display="none";
    });

    function eleccionUsuario(eleccion){
        if(eleccion == "piedra"){
            return eleccion;
        } else if(eleccion == "papel"){
            return eleccion;
        } else if(eleccion == "tijera"){
            return eleccion;
        }
    }
    function eleccionComputadora(){
        let elecC = Math.random();
        if(elecC < 0.3333333333333334){
            elecC = "piedra";
        } else if(elecC < 0.6666666666666666){
            elecC = "papel";
        } else {
            elecC = "tijera";
        }
        contenedorComputadorElige.classList.add(`animacion_${elecC}`);
        animComputadorElige.classList.add(`animacion_${elecC}`); 
        return elecC;   	
    }
    function resultado(u, c){
        if((u=="piedra" && c=="papel")||(u=="papel" && c=="tijera")||(u=="tijera" && c=="piedra")){
            txtResultado.innerHTML = "el usuario pierde:";
            txtSubresultado.innerHTML = `El usuario eligio ${u} y la computadora eligio ${c}`;
        }else if((u=="piedra" && c=="tijera")||(u=="papel" && c=="piedra")||(u=="tijera" && c=="papel")){
            txtResultado.innerHTML = "El usuario gana:";
            txtSubresultado.innerHTML = `El usuario eligio ${u} y la computadora eligio ${c}`;
        }else if((u=="piedra" && c=="piedra")||(u=="papel" && c=="papel")||(u=="tijera" && c=="tijera")){
            txtResultado.innerHTML = "Empate:";
            txtSubresultado.innerHTML = `El usuario eligio ${u} y la computadora eligio ${c}`;
        }

    }
    
    btnPiedra.addEventListener("click", function(){
       usuarioElige = eleccionUsuario("piedra");
       if(escUsuarioElige.style.display = "block"){
           escUsuarioElige.style.display= "none";
           escComputadoraElige.style.display="block";
           computadoraElige = eleccionComputadora();
           txtEleccionComputador.innerHTML = computadoraElige;
       } 
    });

    btnPapel.addEventListener("click", function(){
        usuarioElige = eleccionUsuario("papel");
        if(escUsuarioElige.style.display = "block"){
            escUsuarioElige.style.display= "none";
            escComputadoraElige.style.display="block";
            computadoraElige = eleccionComputadora();
            txtEleccionComputador.innerHTML = computadoraElige;
        } 
    });

    btnTijera.addEventListener("click", function(){
        usuarioElige = eleccionUsuario("tijera");
        if(escUsuarioElige.style.display = "block"){
            escUsuarioElige.style.display= "none";
            escComputadoraElige.style.display="block";
            computadoraElige = eleccionComputadora();
            txtEleccionComputador.innerHTML = computadoraElige;
        } 
    });

    btnContinuar.addEventListener("click", function(){
        if(escComputadoraElige.style.display = "block"){
        escUsuarioElige.style.display= "none";
        escComputadoraElige.style.display="none";
        escResultado.style.display="block";
        }  
        resultado(usuarioElige, computadoraElige);
    });

    btnReiniciar.addEventListener("click", function(){
        escComputadoraElige.style.display="none";
        escResultado.style.display="none";
        escUsuarioElige.style.display= "block";
        animComputadorElige.removeAttribute("class");
    });
    
});
