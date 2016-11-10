//Parametros de entrada de ejecucion del programa "process.argv.length"
for (let i = 0; i < process.argv.length; i++) {
    console.log("Parametro: " + i + " - " + process.argv[i]);
    if (process.argv[i] == "S") { console.log("vamos a salir del programa"); }
}