const assert = require('chai').assert;
const app = require('../201603047');

// Results


describe('App', function(){

    describe('BubbleSort()', function() {
        let array = [5,4,3,2,1,85,98,100,50];
        it('Devuelve un Arreglo Ordenado', function () {
            assert.isArray(app.BubbleSort(array));
        });
        let arrayOrder = [1,2,3,4,5,50,85,98,100];
        it('Arreglo Ordenado', function () {
            assert.deepEqual(app.BubbleSort(array), arrayOrder);
        });
    });

    describe('ConverterYearsToSeconds()', function () {
        it('10 Años = 13140000 Segundos', function () {
            assert.equal(app.ConverterYearsToSeconds(10), 315360000);
        });
    });

    describe('ConverterWordToCodeMorse()', function(){
        it('Hola = .... --- .-.. .-', function(){
            assert.equal(app.ConverterWordToCodeMorse('Hola'), ' .... --- .-.. .-');
        });
    });

    describe('ConvertBinarioToDecimal', function(){
        it('10000010 = 130', function(){
            assert.equal(app.ConvertBinarioToDecimal('10000010'), 130);
        });

    });

    describe('VerifyNumbre()', function(){
        it('5425 = true', function(){
            assert.equal(app.VerifyNumber(5424), true);
        });
    });
});

  

