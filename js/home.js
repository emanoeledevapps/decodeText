var inputEntrada = document.querySelector('.input-entrada');
var btnCripto = document.querySelector('#btn-cripto');
var btnDescripto = document.querySelector('#btn-descripto');
var areaResultado = document.querySelector('#area-resultado');
var resultadoVazio = document.querySelector('.area-resultado-vazio');
var areaResultadoOK = document.querySelector('.area-resultado-ok');
var btnCopy = document.querySelector('.btn-copiar');

areaResultadoOK.style.display = 'none';
resultadoVazio.style.display = 'flex';

function criptografar(){
    var input = inputEntrada.value.toLowerCase();
    var array = [];
    array = input.split(' ');

    var textCripto = '';

    for(var i = 0; i < array.length; i++){
        cripto = array[i].replace('e','enter').replace('i','imes').replace('a', 'ai').replace('o', 'ober').replace('u', 'ufat')
        textCripto = textCripto + ' ' + cripto
    }

    areaResultado.textContent = textCripto;
    areaResultadoOK.style.display = 'flex';
    resultadoVazio.style.display = 'none';
}

function descriptografar(){
    var input = inputEntrada.value.toLowerCase();
    var array = [];
    array = input.split(' ');

    var textDescripto = '';

    for(var i = 0; i < array.length; i++){
        descripto = array[i].replace('enter', 'e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u')
        textDescripto = textDescripto + ' ' + descripto
    }

    areaResultado.textContent = textDescripto;
    areaResultadoOK.style.display = 'flex';
    resultadoVazio.style.display = 'none';
}

function copy(){
    var copyText = document.querySelector('#area-resultado');
    copyText.select();
    document.execCommand('copy');
}

btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);
btnCopy.addEventListener('click', copy);