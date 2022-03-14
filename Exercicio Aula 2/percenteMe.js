const validate = require('validate.js');
const percentemeConstraint = require('./validate');

const Percentemenos = {
    percenteMe(num1,num2){
        const validatePercentemenos = validate({num1,num2}, percentemeConstraint.percentemeConstraint);
        console.log("Validate", validatePercentemenos);
        if(validatePercentemenos !== undefined){
            return 'Error';
        }
        var r2 = num1*(1 - (num2/100));
        return r2;
    }
}
module.exports = Percentemenos;