const costumers = [{
    id:1,
    nome:"Luiz",
    idade:35,
    uf:"RS"
}];

function selectCostumers(){
    return costumers;
}

function selectCostumer(id){
    return costumers.find(c => c.id === id);
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