

const https = require('https');
const fs = require('fs');

var site_id = "MLA";
var seller_id = 179571326;


/*
Para re utilizarlo, basta con modificar el site_id y el seller_id, esto lo podría hacer el usuario desde un form
o se puede modificar un poquito dandole valores x y como parametros de función. siendo x e y el site_id y seller_id.
*/


https.get('https://api.mercadolibre.com/sites/' + site_id + '/search?seller_id=' + seller_id, (resp) => {
    let data = '';


    resp.on('data', (chunk) => {
        data += chunk;
    });

    //En esta variable, almaceno strings con la información de cada item como elementos de un array. 
    var thelog = [];

    resp.on('end', () => {
        results = JSON.parse(data).results;
        results.forEach(function (result) {
            let id = result.id;
            let title = result.title;
            let categoryId = result.category_id;
            let categoryName;
            /*  
            En la petición del item, no figura su categoría, pero si su category_id. Por lo que intenté hacer otra petición.
            Pero con ese category_id para tomar el nombre. Lo logré, pero tuve problemas para almacenar el nombre en una variable.
            */


            function getCategoryName(categoryId){}
            https.get('https://api.mercadolibre.com/categories/' + categoryId, (resp2) => {
                let data2 = '';
              
                resp2.on('data', (chunk) => {
                    data2 += chunk;
                });

                resp2.on('end', () => {
                    console.log(JSON.parse(data2).name);
                    categoryName = JSON.parse(data2).name;

                    
                    /*
                    Acá podemos comprobar que aparece el nombre de cada categoría en orden por consola.
                    Intente alojarlo en la variable categoryName, pero solo es visible dentro de esta petición. 
                    */
                  


                });
               
                
            });
      




            thelog.push('ID: ' + id + '. Title : ' + title + '. CategoryID: ' + categoryId + '. Category Name: ' + 'categoryname' + '.');

        });

        //Acá convertimos el array en un string para que sea alojable en el archivo .txt
        var txt = JSON.stringify(thelog);
    


        //creación del archivo .txt
        fs.appendFile('log.txt', txt, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

    });




}).on("error", (err) => {
    console.log("Error: " + err.message);
});






