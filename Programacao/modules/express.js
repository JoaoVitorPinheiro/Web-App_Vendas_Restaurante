const express = require("express");
const itemModel = require("../src/models/item.model");
const path =require('path');
const app = express()

app.use(express.json())

app.set("view engine", "ejs")
app.set("views", "Programacao/src/views")

app.use('/public', express.static('public'));

app.get("/views/carrinho", async (req, res) => {
    res.render("carrinho")
})

app.get("/views/home", async (req, res) => {
    res.render("home")
})

app.get("/api-main", async (req, res) => {
    try {
        const items = await itemModel.find({});

        res.status(200).json(items);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/api-main/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const item = await itemModel.findById(id);

        return res.status(200).json(item);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/api-main", async (req, res) => {
    try {
        const item = await itemModel.create(req.body);

        res.status(201).json(item);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.patch("/api-main/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const item = await itemModel.findByIdAndUpdate(id, req.body, {new: true});

        return res.status(200).json(item);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete("/api-main/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const item = await itemModel.findByIdAndRemove(id);

        return res.status(200).json(item);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`))