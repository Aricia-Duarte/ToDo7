const OpMatematica= require("../controller/opMatematicas");
const Router=require("express")
const router= Router();

 router
 .get('/somar', OpMatematica.somar)
 .get('/subtrair', OpMatematica.subtrair)
 .get('/multiplicar', OpMatematica.multiplicar)
 .get('/dividir', OpMatematica.dividir)

 module.exports=router;