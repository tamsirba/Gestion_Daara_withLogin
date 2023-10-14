const express = require("express");
const mysql = require('mysql');
const cors = require ('cors');

const app = express();
app.use (cors());
app.use (express.json());

const db =  mysql.createConnection({

    host : "localhost",
    user :"root",
    password :"",
    database :"signup"
})
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login `nom`, `email`,`password` VALUES (?)";
    const VALUES = [
        req.body.nom,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [VALUES], (err, data) => {
        if(err){
            return res.json("erreur");
         }
            return res.json(data);
    })
})
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? `password`= ? ";
    const VALUES = [
        
    ]
    db.query(sql, [req.body.email, req.body.password],
        (err, data) => {
        if(err){
            return res.json("erreur");
         } if(data.lenght > 0) {
            return res.json(succes);
         } else 
            return res.json(echec);
           
    })
})
app.listen(8081, ()=> { 

    console.log("Port d'Ecoute");
   
})
