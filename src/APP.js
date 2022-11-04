const express = require('express');
const router = require("./routes/OpMatematicaRoutes.js");
const app = express();

app.use(express.json());
app.use(router);
const port = process.env.port3000;
console.log("servidor executando");

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

