let series = require('./series');

window.onload = function() {
    document.getElementsByTagName('input')[0].value = series.titulo;
    document.getElementsByTagName('input')[1].value = series.descricao;
    document.getElementsByTagName('input')[2].value = series.url;
    let ul = document.querySelector('ul');
    let submit = document.querySelector('input[type=submit]');

    function novaSerie() {
        let titulo = document.getElementsByTagName('input')[0].value;
        let descricao = document.getElementsByTagName('input')[1].value;
        let url = document.getElementsByTagName('input')[2].value;

        series.titulo = titulo;
        series.descricao = descricao;
        series.url = url;

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(series.titulo));
        li.appendChild(document.createTextNode(series.descricao));
        li.appendChild(document.createTextNode(series.url));

        ul.appendChild(li);
    }

    function adiciona (evento) {
        if (evento.key === 'Enter') {
            novaSerie();
        }
    }

    submit.addEventListener('click', novaSerie);
    submit.addEventListener('keypress', adiciona);
    submit.addEventListener('ontouchend', novaSerie);

}




