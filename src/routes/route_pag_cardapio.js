


const express = require("express");
const ControleDosTacos = require("../controllers/controllerTaco");
const router=express.Router()

// aqui é para colocar as rotas todas tem que ser "/"
router.get("/",ControleDosTacos.index);

module.exports= router;