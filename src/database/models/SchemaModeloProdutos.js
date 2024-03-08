const mongoose=require("mongoose");

const {Schema}=mongoose;

const ModeloProduto = new Schema({
    Img: {
        type: String,
        required: false
    },
    Nome: {
        type: String,
        required: true
    },
    Descricao: {
        type: String,
        required: true
    },
    Preco: {
        type: Number,
        required: true,
        min: 0 
    },
    Quantidade: {
        type: Number,
        required: true,
        default: 0 
    },
    Categoria: {
        type: String,
        required: true
    }
},{ collection: 'produtos' });


const produtoModelo=mongoose.model("ModeloProduto",ModeloProduto)

module.exports={
    produtoModelo,
    ModeloProduto,
}