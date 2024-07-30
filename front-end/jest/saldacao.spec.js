const saudacao = require('./saldacao')

describe('Teste para saudação', () => {
    test('Deverá retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')

        expect(olaMaria).toBe('Olá, Maria')
        expect(olaMaria).toContain(',') //verifica se algum elemento existe 
        expect(true).toBeTruthy() //só passa se for true
        expect(false).toBeFalsy() //só passa se for falso
        expect([1,2,3,4,5]).toHaveLength(5) //verifica quantos elementos tem no array
    })
})