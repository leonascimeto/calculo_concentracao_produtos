let sodaBranco = 40.0;
let sodaPT = 20.0;
let peroxidoBranco = 80.0;
let peroxidoPT = 30.0;



function calcular(){
    let realSoda = 0.00;
    let realPeroxido = 0.00;
    
    let diferencialSoda = 0.00;
    let diferencialPeroxido = 0.00;

    let valorSoda = document.getElementById("soda");
    let valorPeroxido = document.getElementById("peroxido");

    let sodaPadrao = document.getElementById("padrao-soda").innerHTML;
    let peroxidoPadrao = document.getElementById("padrao-peroxido").innerHTML;

    realSoda = (valorSoda.value * 0.95 * 1.14).toFixed(2);
    realPeroxido = (valorPeroxido.value * 0.95 * 1.43).toFixed(2); 

    diferencialSoda = (realSoda/sodaPadrao)*100-100;
    diferencialPeroxido = (realPeroxido/peroxidoPadrao)*100-100;

    let tbSoda = document.getElementById("real-soda");
    let tbSodaDiferencial = document.getElementById("diferencial-soda");

    let tbPeroxido = document.getElementById("real-peroxido");
    let tbPeroxidoDiferencial = document.getElementById("diferencial-peroxido");

    tbPeroxido.innerHTML = realPeroxido;
    tbPeroxidoDiferencial.innerHTML = diferencialPeroxido.toFixed(2);

    tbSoda.innerHTML = realSoda;
    tbSodaDiferencial.innerHTML = diferencialSoda.toFixed(2);
}

function formatarInputSoda() {
    let elemento = document.getElementById('soda');
    let valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{1})$/g, ".$1");


    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}

function formatarInputPeroxido() {
    let elemento = document.getElementById('peroxido');
    let valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{1})$/g, ".$1");


    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}

function preencherTabela(){
    let radios = document.getElementsByName("concentracao");
    let radioSelecionado;
        for (let index = 0; index < radios.length; index++) {
            if(radios[index].checked == true){
            radioSelecionado = radios[index].value;
            }
        }    

    if(radioSelecionado == "pt"){
        document.getElementById("padrao-soda").innerHTML = sodaPT.toFixed(2);
        document.getElementById("padrao-peroxido").innerHTML = peroxidoPT.toFixed(2);
        console.log(sodaPT);
    }else{
        document.getElementById("padrao-soda").innerHTML = sodaBranco.toFixed(2);
        document.getElementById("padrao-peroxido").innerHTML = peroxidoBranco.toFixed(2);
    }
}