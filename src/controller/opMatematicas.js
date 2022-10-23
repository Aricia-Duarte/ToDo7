const Calc=require('../Models/Calc.js')

class OpMatematica{
    static somar (req,res){
        let vlr1 = Object.values(req.query)[0]
        let vlr2 = Object.values(req.query)[1]

        try{
            res.status(200).json(Calc.somar(vlr1,vlr2));
        }catch(erro) {
            res.status(400).json({'Erro':erro.message});
        }
    }
        static subtrair (req,res){
            let vlr1 = Object.values(req.query)[0]
            let vlr2 = Object.values(req.query)[1]
    
            try{
                res.status(200).json(Calc.subtrair(vlr1,vlr2));
            }catch(erro){
                res.status(400).json({'Erro': erro.message});
            }
        }    
        static multiplicar (req,res){
            let vlr1 = Object.values(req.query)[0]
            let vlr2 = Object.values(req.query)[1]
    
            try{
                res.status(200).json(Calc.multiplicar(vlr1,vlr2));
            }catch(erro){
                res.status(400).json({'Erro': erro.message});
            }
        }

        static dividir (req,res){
            let vlr1 = Object.values(req.query)[0]
            let vlr2 = Object.values(req.query)[1]
    
            try{
                res.status(200).json(Calc.dividir(vlr1,vlr2));
            }catch(erro){
                res.status(400).json({'Erro': erro.message});
            }
        }
        
    }
module.exports=OpMatematica;