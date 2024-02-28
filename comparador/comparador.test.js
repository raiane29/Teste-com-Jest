const ComparaSenhas = require('./index')

describe('Teste de Compara Senhas', ()=> {
    test('Verifica se a senha é igual', ()=> {
        expect(ComparaSenhas(senhaFinal)).toBe(senhaFinal)
   })
})
