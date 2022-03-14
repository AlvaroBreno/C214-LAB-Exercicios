const validate = require('validate.js');
const subConstraint = require('./validate');

const Subtracao = {
    sub (num1, num2){
        const validateSub = validate({num1,num2}, subConstraint.subConstraint);
        console.log("Validate", validateSub);
        if(validateSub !== undefined){
            return 'Error';
        }
        var r = num1 - num2;
        return r;
    }
}
module.exports = Subtracao;