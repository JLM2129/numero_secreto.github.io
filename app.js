
    let numeroSecreto = 0;
    let intentos = 0;
   
    let listaNumerosSortiados=[];
    let numeroMaximo = 100;
    let i = 0;
    

    function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return;
    }
                
    function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    isPrime(); 
    if (document.getElementById('valorUsuario').value == 0){
        alert("Por favor digita un numero"); 
        
    }else {
   
        intentos++
    
    if (numeroDeUsuario == numeroSecreto && intentos < 5 ) {
    
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?"intento":"intentos"}`);
    
    limpiarCaja(); 
    document.getElementById('intent').setAttribute("disabled", "disabled");
    document.getElementById('reiniciar').removeAttribute('disabled');

    }else if (numeroDeUsuario > numeroSecreto && isPrime() == false && intentos < 5 ){
    asignarTextoElemento('p',"El numero secreto es menor y compuesto"); 
    limpiarCaja();
    
    }else if (numeroDeUsuario > numeroSecreto && isPrime() == true && intentos < 5){
    asignarTextoElemento('p',"El numero secreto es menor y es primo");
    limpiarCaja();
    
    }else if (numeroDeUsuario < numeroSecreto && isPrime() == false && intentos < 5){
        asignarTextoElemento('p',"El numero secreto es mayor y compuesto"); 
        limpiarCaja(); 
        
    }else if (numeroDeUsuario < numeroSecreto && isPrime() == true && intentos < 5){
        asignarTextoElemento('p',"El numero secreto es mayor y es primo"); 
        limpiarCaja(); 
        
    }else if ( intentos >= 5 &&numeroDeUsuario != numeroSecreto ) {
        alert(`Lo siento, se te acabaron los intentos, el numero secreto era ${numeroSecreto}`); 
        limpiarCaja(); 
        document.getElementById('intent').setAttribute("disabled", "disabled");
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else  {
        document.getElementById('intent').setAttribute("disabled", "disabled");
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?"intento":"intentos"}`);
    
        limpiarCaja(); 
        
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } 
    console.log(numeroSecreto);
    console.log(document.getElementById('valorUsuario').value);

}
    
}


    

    function condicionesIniciales(){
        asignarTextoElemento('h1','Juego del número secreto');
        asignarTextoElemento('p',`Digita un número del uno al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 0;
    }


    function reiniciarJuego(){
        limpiarCaja();
        condicionesIniciales();
        document.querySelector('#reiniciar').setAttribute('disabled','true');
        document.getElementById('intent').removeAttribute('disabled');
    }
    
    function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
    
    }     

    function isPrime() {
        if (numeroSecreto < 2) {
            return false;
        }else {
        for (let i = 2; i <= Math.sqrt(numeroSecreto); i++) {
            if (numeroSecreto % i === 0) {
                return false;
            }
        }
    }
        return true;
        
    }
    
    
    

                
    function generarNumeroSecreto(){
            let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        
            if (listaNumerosSortiados.length==numeroMaximo){
            asignarTextoElemento('p','Ya se sortearon todos los números posibles');
            }else{
    if (listaNumerosSortiados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    } else{
        listaNumerosSortiados.push(numeroGenerado);
        return numeroGenerado;
    }

}
    }

    condicionesIniciales();
                