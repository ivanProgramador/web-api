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



module.exports = {
     selectCostumers,
     selectCostumer,
     insertCostumer
}