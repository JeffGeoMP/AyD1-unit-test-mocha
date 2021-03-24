module.exports = {
    BubbleSort: function (array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i; j++) {
                if(array[j] > array[j +1]){
                    aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux
                }
            }
        }
        return array;
    },    
    ConverterYearsToSeconds: function (Years) {
        return Years * 365 * 24 * 60 * 60;
    },
    ConverterWordToCodeMorse: function (Word){
        Word = Word.toLowerCase();
        let CodeMorse = '';
        for (let index = 0; index < Word.length; index++) {
            let char = Word.charAt(index);
    
            switch (char) {
                case 'a':
                    CodeMorse = CodeMorse + ' ' + '.-';
                    break;
                
                case 'b':
                    CodeMorse = CodeMorse + ' ' + '-....';
                    break;
                
                case 'c':
                    CodeMorse = CodeMorse + ' ' + '-.-.';
                    break;
    
                case 'd':
                    CodeMorse = CodeMorse + ' ' + '-..';
                    break;
                
                case 'e':
                    CodeMorse = CodeMorse + ' ' + '.';
                    break;
                
                case 'f':
                    CodeMorse = CodeMorse + ' ' + '..-.';
                    break;
                    
                case 'g':
                    CodeMorse = CodeMorse + ' ' + '--.';
                    break;
                
                case 'h':
                    CodeMorse = CodeMorse + ' ' + '....';
                    break;
                
                case 'i':
                    CodeMorse = CodeMorse + ' ' + '..';
                    break;
                    
                case 'j':
                    CodeMorse = CodeMorse + ' ' + '.---';
                    break;
                
                case 'k':
                    CodeMorse = CodeMorse + ' ' + '-.-';
                    break;
                
                case 'l':
                    CodeMorse = CodeMorse + ' ' + '.-..';
                    break;
                
                case 'm':
                    CodeMorse = CodeMorse + ' ' + '--';
                    break;
                
                case 'n':
                    CodeMorse = CodeMorse + ' ' + '-.';
                    break;
                
                case 'o':
                    CodeMorse = CodeMorse + ' ' + '---';
                    break;
                    
                case 'p':
                    CodeMorse = CodeMorse + ' ' + '.--.';
                    break;
                
                case 'q':
                    CodeMorse = CodeMorse + ' ' + '--.-';
                    break;
                
                case 'r':
                    CodeMorse = CodeMorse + ' ' + '.-.';
                    break;
            
                case 's':
                    CodeMorse = CodeMorse + ' ' + '...';
                    break;
                
                case 't':
                    CodeMorse = CodeMorse + ' ' + '-';
                    break;
                
                case 'u':
                    CodeMorse = CodeMorse + ' ' + '..-';
                    break;
    
                case 'v':
                    CodeMorse = CodeMorse + ' ' + '...-';
                    break;
                
                case 'w':
                    CodeMorse = CodeMorse + ' ' + '.--';
                    break;
                
                case 'x':
                    CodeMorse = CodeMorse + ' ' + '-..-';
                    break;
                    
                case 'y':
                    CodeMorse = CodeMorse + ' ' + '-.--';
                    break;
                
                case 'z':
                    CodeMorse = CodeMorse + ' ' + '--..';
                    break;
                
                default:
                    break;
            }
        }
        return CodeMorse;
    },
    ConvertBinarioToDecimal: function(Binary) {
        let DecimalForm = 0;
        let Increment = 1;
        for (let index = Binary.length - 1; index >= 0; index--) {
            if(Binary.charAt(index)==1){
                DecimalForm = DecimalForm + Increment;
                Increment = Increment + Increment;
            }else{
                Increment = Increment + Increment;
            }
            
        }
        return DecimalForm;
    },
    VerifyNumber: function(Var) {
        if(!isNaN(Var)){
            return true;
        }
        return false;
    }
}