const validate = require('validate.js');
const percente_qtdConstraint = require('./validate');

const Percente_qtd = {
    percente_qtd(num1,num2){
        const validatePercenteqtd = validate({num1,num2}, percente_qtdConstraint.percente_qtdConstraint);
        console.log("Validate", validatePercenteqtd);
        if(validatePercenteqtd !== undefined){
        }  
        var r3 = num1 * (num2/100);
        return r3;
    }
}
module.exports = Percente_qtd;