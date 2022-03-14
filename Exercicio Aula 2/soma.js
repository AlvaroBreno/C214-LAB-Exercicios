const validate = require('validate.js');
const somaConstraint = require('./validate');

const Soma = {
    soma(num1,num2){
        const validateSoma = validate({num1,num2}, multiConstraint.multiConstraint);
        console.log("Validate", validateSoma);
        if(validateSoma !== undefined){
            return 'Error';
        }
        var r = num1 + num2;
        return r;
    }

}
module.exports = Soma;