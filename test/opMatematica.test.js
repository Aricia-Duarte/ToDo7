const Calc = require("../models/Calc.js")

/////////SOMAR/////////////////////////////////////////////////////////////////////////////

//Testando a operação Somar Numeros
test('Testando a operacao Somar Numeros',()=>{
    expect(Calc.somar(9,3).resultado).toBe(12)
})

test('Testando a operacao Somar com Letra. Valida se dará erro',()=>{
    expect(Calc.somar('a',3).resultado).toBe('Erro! O valor digitado na operação não é numero')
})

test('Testando a operacao Somar com Caracter Especial. Valida se dará erro',()=>{
    expect(Calc.somar(3,'*').resultado).toBe('Erro! O valor digitado na operação não é numero')
})

/////////SUBTRAIR/////////////////////////////////////////////////////////////////////////////
test('Testando a operacao Subtrair Numeros',()=>{
    expect(Calc.subtrair(5,3).resultado).toBe(2)
})

test('Testando a operacao Subtrair com Letra. Valida se dará erro',()=>{
    expect(Calc.subtrair('a',3).resultado).toBe('Erro! O valor digitado na operação não é numero')
})

test('Testando a operacao Subtrair com Caracter Especial. Valida se dará erro',()=>{
    expect(Calc.subtrair(5,'@').resultado).toBe('Erro! O valor digitado na operação não é numero')
})

/////////MULTIPLICAR/////////////////////////////////////////////////////////////////////////////
test('Testando a operacao Multiplicar Numeros',()=>{
    expect(Calc.multiplicar(5,3).resultado).toBe(15)
})

test('Testando a operacao Multiplicar com Letra. Valida se dará erro',()=>{
    expect(Calc.multiplicar('a',3).resultado).toBe('Erro! O valor digitado na operação não é numero')
})

test('Testando a operacao Multiplicar com Caracter Especial. Valida se dará erro',()=>{
    expect(Calc.multiplicar(3,'#').resultado).toBe('Erro! O valor digitado na operação não é numero')
})

/////////DIVIDIR/////////////////////////////////////////////////////////////////////////////
test('Testando a operacao Dividir Numeros',()=>{
    expect(Calc.dividir(8,2).resultado).toBe(4)
})

test('Testando a operacao Dividir com Letra. Valida se dará erro',()=>{
    expect(Calc.dividir('a',1).resultado).toBe('Erro! O valor digitado na operação não é numero')
})

test('Testando a operacao Dividir com divisor igual a zero. Valida se dará erro',()=>{
    expect(Calc.dividir(3,0).resultado).toBe('Erro! O valor digitado na operação não é numero')
})

test('Testando a operacao Dividir com Caracter Especial. Valida se dará erro',()=>{
    expect(Calc.dividir('$',2).resultado).toBe('Erro! O valor digitado na operação não é numero')
})

