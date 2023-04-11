/*var contador = 0;

var assento1 = document.querySelectorAll('.P00');
var assento2 = document.querySelectorAll('.P01');

for (var i = 0; i < assento1.length; i++) {
    assento1[i].addEventListener('click', function() {
        if (this.classList.contains('P00')) {
            this.classList.remove('P00');
            this.classList.add('marcado1');
            contador++;
        } else {
            this.classList.remove('marcado1');
            this.classList.add('P00');
            contador--;
        }
        document.getElementById('contador').innerHTML = contador;
    });
}

/*function Preencher(meu_id){
    var div = document.getElementById(meu_id);
    div.classList.toggle("vermelho");

    if (div.classList.contains('vermelho')){
        contador++;
    } else{
        contador--;
    }
    document.getElementById('contador').innerHTML = 'Assentos selecionados: ' + contador;
}*/

var contador = 0;

function Limpar(){

    for(linha= 0; linha<=5; linha++){
    
        for(coluna=0; coluna <=3; coluna++){
    
            meu_id = "P" + linha + coluna;

            document.getElementById(meu_id).style.backgroundColor = "green";
        }
    }
}

function Preencher(meu_id){
    
    if(document.getElementById(meu_id).style.backgroundColor == "green"){
        document.getElementById(meu_id).style.backgroundColor = "red"
        contador++;
    } else{
        document.getElementById(meu_id).style.backgroundColor = "green"
        contador--;
    }
    document.getElementById('contador').innerHTML = 'Assentos selecionados: ' + contador;
}