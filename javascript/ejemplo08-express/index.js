var express = require('express');
var app = express();
function evaluaElVerboHttp(request, response) {
    response.send("Ruta: " + request.originalUrl + " verbo: " + request.method);
}
app.get("/",
    (request, response) => {
        console.log("Acceso a la ruta ", request.path);
        response.send("Respuesta recibida");
    });


app.post("/", evaluaElVerboHttp);
app.put("/", evaluaElVerboHttp);
app.delete("/", evaluaElVerboHttp);
app.all("/paratodos", evaluaElVerboHttp);
app.all("/inicio/*/fin", evaluaElVerboHttp);
app.all("/clientes/:idCliente/facturas/:idFactura",
    (request, response) => {
        response.send("Resultados: \n\tCliente: " + request.params.idCliente +
            "\n\tFactura: " + request.params.idFactura
            + "\n\tJSON: " + JSON.stringify(request.params));
        //Envia el dato en formato json
        //response.json(request.params);
        //Descarga un fichero que le indiquemos
        //response.download('./imagen.png');
    });
app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension)
});
function funcionIntermedia(request, response, next) {
    console.log("Ejecutado a las  " + new Date());
    //response.send("Fin");
    next();
}
app.get("/concatenado",
    funcionIntermedia,

    (request, response) => {
        response.send("Enviado");
    });

app.route("/rutaconjunta")
    .get(evaluaElVerboHttp)
    .post(evaluaElVerboHttp)
    .put(evaluaElVerboHttp)
    .delete(evaluaElVerboHttp);

var router = express.Router();
router.use(funcionIntermedia);
router.get("/conrouter", evaluaElVerboHttp);
router.post("/conrouterPost", evaluaElVerboHttp);
router.put("/conrouterPut", evaluaElVerboHttp);
router.delete("/conrouterDelete", evaluaElVerboHttp);

app.use("/cosacuca", router);


var routerRest = express.Router();
routerRest.route("/coches")
    .get((request, response) => {
        response.json([{ _id: 1, marca: "opel", modelo: "corsa" },
        { _id: 2, marca: "audi", modelo: "a4" },
        { _id: 3, marca: "mazda", modelo: "5" }])
    })
    .post((request, response) => {
        //Recoger la informacion del body para crear un nuevo coche
        /*request.body.marca
        request.body.modelo*/
        response.json({ message: "correcto" });
    });

routerRest.route("/coches/:alias")
    .get((request, response) => {
        //TODO: Obtener el coche a partir de su idCoche
        response.json({ _id: 1, marca: "opel", modelo: "corsa" });
    })
    .delete((request, response) => {
        //TODO: Eliminar el coche a partir de su idCoche
        response.json({ message: "eliminado" });
    })
    .put((request, response) => {
        //TODO: Modificar el coche a partir de su idCoche
        response.json({ message: "actualizado" });
    });

app.use("/concesionario", routerRest);

app.listen(8080);
console.log("Servidor iniciado")


