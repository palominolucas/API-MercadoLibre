const { info } = require("node:console");

$(document).ready(function () {


    var info = [];



    $.ajax({
        type: 'GET',
        url: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326',
        beforeSend: function (a) {
            a.setRequestHeader("Authentication", 'Authorization: Bearer $ACCESS_TOKEN') //deberia funcionar si ponen aqui las credenciales.
        },
        success: function (response) {
            $.each(response.data, function (index, elemento) {
                info.push(['ID:', elemento.id, 'Titulo: ', elemento.tittle, 'Categoria: ' , elemento.category_name, 'ID de Categoria: ', elemento.category_id]);
            });
        },
        error: function () {
            console.log('¡Ha ocurrido un error!');
        },
    });





});

module.exports.info;