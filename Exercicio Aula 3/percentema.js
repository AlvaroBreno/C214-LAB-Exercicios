const validate = require('validate.js');
const percentemaConstraint = require('./validate');

const Percentemais = {
    percentema(num1, num2){
        const validatepercentema= validate({num1,num2}, percentemaConstraint.percentemaConstraint);
        console.log("Validate", validatepercentema);
        if(validatepercentema !== undefined){
            return 'Error';
        }
        var r1 = num1*(1 + (num2/100));
        return r1;
    }
}

module.exports = Percentemais;