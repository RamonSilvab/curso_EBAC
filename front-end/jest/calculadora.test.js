const calc = require('./calculadora')


describe('Teste para a calculadora', () => {
    test('somar 2 e 2 deve resultar em 4', () => {
        const minhaSoma =  calc.soma(2, 3)
    
        expect(minhaSoma).toBe(5)
    })
    
    test('multiplicar 3 e 3 deve resultar em 9', () => {
        const minhaMultiplicacao =  calc.mutiplicacao(3, 3)
    
        expect(minhaMultiplicacao).toBe(9) //igual 
        expect(minhaMultiplicacao).toBeGreaterThan(6) // maior que
    })
})
