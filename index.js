const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
require("dotenv").config();

//database
const connection = require("./database/db");
//porta para servidor
PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const Paciente = require("./model/Paciente");

connection
  .authenticate()
  .then(() => console.log("Banco conectado."))
  .catch((err) => {
    console.log(err + " falha ao conectar");
  });

app.get("/", (req, res) => {
  res.render("formulario");
});

app.post("/cadastro", async (req, res) => {
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

app.listen(PORT, () => {
  console.log("Server running..");
});
