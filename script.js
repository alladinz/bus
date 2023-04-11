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

for (var i = 0; i < assento2.length; i++) {
    assento2[i].addEventListener('click', function() {
        if (this.classList.contains('P00')) {
            this.classList.remove('P00');
            this.classList.add('marcado2');
            contador++;
        } else {
            this.classList.remove('marcado2');
            this.classList.add('P00');
            contador--;
        }
        document.getElementById('contador').innerHTML = contador;
    });
}*/

function Preencher(id){
    var div = document.getElementById(id);
    div.classList.toggle("vermelho");
}