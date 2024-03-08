const dotenv=require("dotenv")

dotenv.config()

const express = require("express");
const app= express();
const port=3000;
const routeCardapio= require("./src/routes/route_pag_cardapio");
const conectarComOBancoDeDado= require("./src/shared/services/configDB");
app.use(express.json());
app.set("view engine","ejs");
app.use(express.static("public"));
conectarComOBancoDeDado();

// a rota da pagina você coloca aqui em /cardapio para mostrar já no route_pag_cardapio só coloca /
app.use("/cardapio", routeCardapio);


app.listen(port, (error) => {
    const statusMessage = error ? `Servidor não iniciado: ${error}` :`Servidor iniciado com sucesso na porta ${port}`;
    console.log(statusMessage);
});


