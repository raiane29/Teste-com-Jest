const ConversordeTemperatura = require('./index')

describe('Teste de conversão de temperaturas', ()=> {
    test('Verifica a temperatura de celsius foi para fahrenheit', ()=> {
        expect(ConversordeTemperatura(89.6)).toBe(89.6)
   })
})
