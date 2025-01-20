
const db = require("./db");
const express  = require("express");
const app = express();


app.use(express.json());



app.post("/clientes",(request,response)=>{
    const customer = request.body;
    db.insertCostumer(customer);
    response.sendStatus(201); 
});

app.patch("/clientes/:id",(request,response)=>{
     const id = parseInt(request.params.id);
     const costumer = request.body;
     db.updateCostumer(id,costumer);
     response.sendStatus(200);
});

app.delete("/clientes/:id",(request,response)=>{
    const id = parseInt(request.params.id);
    db.deleteCostumer(id);  
    response.sendStatus(200);   

})




app.get("/clientes",(request,response)=>{
    response.json(db.selectCostumers());
});

app.get("/cliente/:id",(request,response)=>{
    const id = parseInt(request.params.id);
    response.json(db.selectCostumer(id));
});




app.listen(3000,()=>{
    console.log('app is runing');
});