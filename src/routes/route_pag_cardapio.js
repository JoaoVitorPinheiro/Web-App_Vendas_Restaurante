
const express = require("express");
const ControleDosTacos = require("../controllers/controllerTaco");
const ControleDosBurrito=require("../controllers/controllerBurrito");
const ControleDosExperimentos=require("../controllers/controllerExperimentos");
const router=express.Router()

// aqui é para colocar as rotas todas tem que ser "/"

router.get("/",ControleDosTacos.index);
router.get("/",ControleDosBurrito.index);
router.get("/",ControleDosExperimentos.index);





module.exports= router;