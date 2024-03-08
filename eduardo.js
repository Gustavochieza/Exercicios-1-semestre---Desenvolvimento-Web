function showmedia(){
    let numeros = document.getElementById("mediainput").value;
    numlist = numeros.split(',');
    a = media(parseFloat(numlist[0]), parseFloat(numlist[1]), parseFloat(numlist[2]));
    document.getElementById('resultado').innerHTML = `A média é ${a.toFixed(2)}`;
}
function media(a, b, c){
    return ((a + b + c)/3)
}
function limpar(){
    const spans = document.querySelectorAll('.resultados');
    const inputs = document.querySelectorAll('.input');
    for (let i = 0; i < spans.length; i++){
        spans[i].innerHTML = null;
    }
    for (let j = 0; j < inputs.length; j++){
        inputs[j].value = null;
    }
}

function calcretangulo(a, b){
    let retresult = [a*b, (a*2+b*2)]
    return retresult
}
function showretangulo(){
    let retangulo = document.getElementById("retanguloinput").value;
    retlist = retangulo.split(',');
    b = calcretangulo(parseFloat(retlist[0]), parseFloat(retlist[1]));
    document.getElementById('resultadoretangulo').innerHTML = `A área é ${b[0]} e o perímetro é ${b[1]}`;
}

function calctemp(a){
    return (5 * (a-32) / 9)
} 

function showtemp(){
    let temp = document.getElementById("tempinput").value;
    document.getElementById('resultadotemp').innerHTML = `${temp}°F correspondem a ${calctemp(temp).toFixed(2)}°C`;
}

function calcpond(a, b){
    return ((a + (2 * b))/3)
} 

function showpond(){
    let pond = document.getElementById("pondinput").value;
    pondlist = pond.split(",")
    str = calcpond(parseFloat(pondlist[0]), parseFloat(pondlist[1]))
    document.getElementById('resultadopond').innerHTML = `A média ponderada é: ${str.toFixed(2)}`;
}

function calcimc(a, b){
    return (b / (a * a))
} 

function showimc(){
    let imc = document.getElementById("imcinput").value;
    imclist = imc.split(",")
    str = calcimc(parseFloat(imclist[0]), parseFloat(imclist[1]))
    document.getElementById('resultadoimc').innerHTML = `O IMC é: ${str.toFixed(2)}`;
}

function calcmoeda(a){
    return (a * 0.85)
} 

function showmoeda(){
    let moeda = document.getElementById("moedainput").value;
    document.getElementById('resultadomoeda').innerHTML = `${moeda} dólares equivalem a ${calcmoeda(moeda).toFixed(2)} dinheiros`;
}

function calcdesconto(a, b){
    return (a - (a * (b/100)))
} 

function showdesconto(){
    let desconto = document.getElementById("descontoinput").value;
    descontolist = desconto.split(",")
    str = calcdesconto(parseFloat(descontolist[0]), parseFloat(descontolist[1]))
    document.getElementById('resultadodesconto').innerHTML = `O preço final com desconto é: ${str.toFixed(2)}R$`;
}
