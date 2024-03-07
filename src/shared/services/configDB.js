const mongoose =require("mongoose");

async function main(){
    try {
        await mongoose.connect(
         
            `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@test.ccci9fv.mongodb.net/?retryWrites=true&w=majority&appName=test`
            )
            console.log("conectado ao banco");
        
    } catch (error) {
        console.log(`Erro:${error}`);
    }
}

module.exports=main;