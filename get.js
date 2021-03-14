const { info } = require("node:console");

$(document).ready(function () {


    var info = [];

    $('#form').submit(function (e) {
        e.preventDefault;
        var inputID = $('input[name="name"]').val();
        var inputSite = $('input[name="web"]').val();
    });

    function getItems() {
        $.ajax({
            type: 'GET',
            url: 'https://api.mercadolibre.com/sites/' + inputSite + '/search?seller_id=' + inputID,
            beforeSend: function (a) {
                a.setRequestHeader("Authentication", 'Authorization: Bearer $ACCESS_TOKEN') //deberia funcionar si ponen aqui las credenciales.
            },
            success: function (response) {
                $.each(response.data, function (index, elemento) {
                    info.push(['ID:', elemento.id, 'Titulo: ', elemento.tittle, 'Categoria: ', elemento.category_name, 'ID de Categoria: ', elemento.category_id]);
                });
            },
            error: function () {
                console.log('¡Ha ocurrido un error!');
            },
        });

    }



});

module.exports.info;