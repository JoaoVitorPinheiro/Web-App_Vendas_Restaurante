// aqui vai ser toda a regra de negocio 

class ControleDosTacos {
    index(req, res) {
        res.send("<h1>olá</h1>")
    }

    show(req, res) {
        // Lógica para mostrar um taco específico
    }

    store(req, res) {
        // Lógica para adicionar um novo taco
    }

    update(req, res) {
        // Lógica para atualizar um taco existente
    }

    delete(req, res) {
        // Lógica para excluir um taco
    }
}

module.exports = new ControleDosTacos();