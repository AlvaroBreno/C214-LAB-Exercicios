const validate = require('validate.js');
const divisaoConstraint = require('./validate');

const Divisao = {
    divisao (num1, num2){
        const validateDiv = validate({num1,num2}, divisaoConstraint.divisaoConstraint);
        console.log("Validate", validateDiv);
        if(validateDiv !== undefined){
            return 'Error';
        }
        var r = num1 / num2;
        return r;
    }
}
module.exports = Divisao;