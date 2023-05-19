window.onload = function() {
    var numeroElemento = document.getElementById('numero');
    var numeroInicial = parseInt(numeroElemento.innerHTML);

    var numeroElementoDos = document.getElementById('numeroDos');
    var numeroInicialDos = parseInt(numeroElemento.innerHTML);

    var numeroElementoTres = document.getElementById('numeroTres');
    var numeroInicialTres = parseInt(numeroElemento.innerHTML);

    var numeroElementoValor = document.getElementById('valor');
    var numeroInicialValor = parseInt(numeroElemento.innerHTML);

    var valorFinalUno = 58; // El valor final al que deseas llegar
    var valorFinalDos = 50; // El valor final al que deseas llegar
    var valorFinalTres = 301; // El valor final al que deseas llegar
    var intervalo = setInterval(function() {
    numeroInicial++;
    numeroElemento.innerHTML = numeroInicial;
    if (numeroInicial === valorFinalUno) {
    clearInterval(intervalo);
    }
    }, 20); // Intervalo de tiempo en milisegundos (en este caso, 100ms)

    var intervaloDos = setInterval(function() {
        numeroInicialDos++;
        numeroElementoDos.innerHTML = numeroInicialDos;
        if (numeroInicialDos === valorFinalDos) {
        clearInterval(intervaloDos);
        }
        }, 20); // Intervalo de tiempo en milisegundos (en este caso, 100ms)
        var intervaloTres = setInterval(function() {
        numeroInicialTres++;
        numeroElementoTres.innerHTML = numeroInicialTres;
    
        if (numeroInicialTres === valorFinalTres) {
        clearInterval(intervaloTres);
        }
      }, 3); // Intervalo de tiempo en milisegundos (en este caso, 100ms)
};
