const express = require('express')
const bcrypt = require("bcrypt");

const router = express.Router()
const Paciente = require('../model/Paciente');


router.get("/", (req, res) => {
    res.render("formulario");
  });





router.post("/cadastro", async (req, res) => {
    var senha = req.body.senha
    if (senha) {
      try{
           var password = await bcrypt.hash(senha, 10);
      }catch (error) {
          console.error("Erro ao criar hash da senha: " + error);
          return res.status(500).send("Erro ao criar hash da senha.");
        }
     
    }
  
    try{
        await Paciente.create({
  
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      CPF: req.body.cpf,
      nascimento: req.body.nascimento,
      senha: password
    })
      .then(() => console.log("Paciente criado."))
      .then(()=>  res.redirect('/'))
      .catch((err) => {
        console.log("Erro ao criaar novo paciente. " + err);
      });
    }catch(err){
      console.log(err + " erro ao criar paciente. ") 
    }
   
  });


  module.exports = router;