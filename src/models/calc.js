class Calc{
    
    static testVALOR(vlr1, vlr2){
        if(Number(vlr1)&&Number(vlr2)){
            return true
        }else{
            return false
        }
    }

    static somar(vlr1, vlr2){
        if(this.testVALOR(vlr1,vlr2)===true){
            return{
                vlr2: Number(vlr1),
                vlr1: Number(vlr2),
                resultado: Number(vlr1)+Number(vlr2)
            }
        }
        else{
            return{
                resultado: 'Erro! O valor digitado na operação não é numero'
            
            }
        }
    };

    static subtrair(vlr1, vlr2){
        if(this.testVALOR(vlr1,vlr2)===true){
            return{
                vlr2: Number(vlr1),
                vlr1: Number(vlr2),
                resultado: Number(vlr1)-Number(vlr2)
            }
        }
        else{
            return{
                resultado: 'Erro! O valor digitado na operação não é numero'
                        
            }
        }
    };
        

    static multiplicar(vlr1, vlr2){
        if(this.testVALOR(vlr1,vlr2)===true){
            return{
                vlr2: Number(vlr1),
                vlr1: Number(vlr2),
                resultado: Number(vlr1)*Number(vlr2)
            }
        }
        else{
            return{
                resultado: 'Erro! O valor digitado na operação não é numero'
            }
        }
    };
                            
    static dividir(vlr1, vlr2){
        if(this.testVALOR(vlr1,vlr2)===true){
            
                return{
                    vlr2: Number(vlr1),
                    vlr1: Number(vlr2),
                    resultado: Number(vlr1)/Number(vlr2)
            }
        }
        else{
            return{
                resultado: 'Erro! O valor digitado na operação não é numero'
            }
        }
    };
}
module.exports=Calc;
