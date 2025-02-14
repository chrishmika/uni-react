import express, { json } from "express";
import { createConnection } from 'mysql2'
import cors from 'cors';
const server=  express();
server.use(json())
server.use(cors())

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products'
});

db.connect((err)=>{err?console.log(err):console.log('db connected');});


server.get('/api/products', (req,res)=>{
    const query = 'select * from productdetails';
    db.query(query,(err,result)=>{
        console.log(result);
        res.json(result)
    })
})

server.get('/api/products/:id', (req,res)=>{
    const param = req.params;
    console.log(param);
    const query = `select * from productdetails where id = ${param.id}`;
    db.query(query,(err,result)=>{
        console.log(result);
        res.json(result)
    })
})

server.listen(8000,(err)=>{err ?console.log("err"):console.log('connected to server');});