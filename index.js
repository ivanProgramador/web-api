
const db = require("./db");
const express  = require("express");
const app = express();


app.use(express.json());

app.post("/clientes",(request,response)=>{
    const customer = request.body;
    db.insertCostumer(customer);
    response.sendStatus(201); 

});

app.get("/cliente/:id",(request,response)=>{
    const id = parseInt(request.params.id);
    response.json(db.selectCostumer(id));
});

app.get("/clientes",(request,response)=>{
    response.json(db.selectCostumers());
});

app.listen(3000,()=>{
    console.log('app is runing');
});