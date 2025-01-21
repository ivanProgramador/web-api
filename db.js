const mysql = require("mysql2/promise");

const conexão = "mysql://root:1234@localhost:3306/crud";

/*
 Um poll de coenxão e como se fosse um gestor automático 
 sem ele eu teria de abrir a conexão fazer a consulta e depois fechar 
 usando o poll ele faz isso sozinho
 

*/
const client = mysql.createPool(conexão); 


 async function selectCostumers(){

    // a aopração query retorna um array de resultados por isso estou acessando so a posição 0
    const results = await client.query("SELECT * FROM cliente;");
    return results[0];
}

async function selectCostumer(id){
    
    const results = await client.query("SELECT * FROM cliente WHERE id =?;",[id]);
    return results[0]; 
}

function insertCostumer(customer){
    costumers.push(customer);
}

function updateCostumer(id,costumerData){
    const costumer = costumers.find(c => c.id);

    if(!costumer) return;

    costumer.nome = costumerData.nome;
    costumer.idade = costumerData.idade;
    costumer.uf = costumerData.uf;
   
}

function deleteCostumer(id){

    const index = costumers.findIndex(c => c.id === id);

    costumers.splice(index,1);

}



module.exports = {
     selectCostumers,
     selectCostumer,
     insertCostumer,
     updateCostumer,
     deleteCostumer
}