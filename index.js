const express = require("express");
const app = express();

require("dotenv").config();

//router

const router = require('./routes/routes')

//database
const connection = require("./database/db");
//porta para servidor
PORT = process.env.PORT;

app.use(express.static(__dirname +'/static'))

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

app.use('/', router)


app.listen(PORT, () => {
  console.log("Server running..");
});
