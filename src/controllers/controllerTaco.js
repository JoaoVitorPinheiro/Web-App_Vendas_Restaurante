const Taco= require("../database/models/SchemaModeloProdutos")
// aqui vai ser toda a regra de negocio 

class ControleDosTacos {
    async list (req, res) {
        
       
    }

    async show(req, res) {
        try{

        }catch{

        }
        // Lógica para mostrar um taco específico
    }

    async store(req, res) {
            try{

                const taco={
                    Img: req.body.img, 
                    Nome: req.body.Nome,
                    Descricao:req.body.Descricao,
                    Preco:req.body.Preco,
                    Quantidade: req.body.Quantidade,
                    Categoria:req.body.Categoria
                    
                }
    
                const response =await Taco.produtoModelo.create(taco)
                res.json({response,msg:"produto criado"});
            }
            catch(error){
                console.error(error);
                res.status(500).json({ msg: "Erro ao criar produto" });
            }
        // Lógica para adicionar um novo taco
    }

    async update(req, res) {
        try{

        }catch{

        }
        // Lógica para atualizar um taco existente
    }

    async delete(req, res) {

        try{

        }catch{

        }
        // Lógica para excluir um taco
    }

}

module.exports = new ControleDosTacos();