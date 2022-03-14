const validate = require('validate.js');
const multiConstraint = require('./validate');

const Multiplicacao = {
    multi (num1, num2){
        const validateM = validate({num1,num2}, multiConstraint.multiConstraint);
        console.log("Validate", validateM);
        if(validateM !== undefined){
            return 'Error';
        }
        var r = num1 * num2;
        return r;
    }
}
module.exports = Multiplicacao;