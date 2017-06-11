

$('h1').each(function(){
    $(this).attr('data-heading', $(this).text()); });

/*var links = document.querySelectorAll('#lista li');

var galeria = document.querySelector('#galeria');

var img = [
    ['cajam01.jpg', 'cajam02.jpg','cajam03.jpg','cajam04.jpg','cajam05.jpg','cajam06.jpg'],
    ['cajaba.jpg', 'cajamarca.jpg']
];*/


/*
for (var i = 0; i < links.length; i++) {
    agregarEvento(i);
}

function agregarEvento(i) {
    links[i].addEventListener('click', function () {
        recargar(i);
    }, false);
}

function recargar(i) {
    var listaImag = imag[i];

    while (galeria.firstChild) {
        galeria.removeChild(galeria.firstChild);
    }

    for (var j = 0; j < listaImag.length; j++) {
        var src = listaImag[j];

        var img = document.createElement('img');
        img.src = 'img/' + src;

        galeria.appendChild(img);
    }
}*/
