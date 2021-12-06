const Validator = require("validator");
const validText = require("./valid-text");
 

module.exports = function validateRegisterInput(data) { // should pass in data but if throw errors take out data param
  let errors = {};

  data.handle = validText(data.handle) ? data.handle : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password = validText(data.password2) ? data.password2 : "";
 
  if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = "must be more than 2 and less than 30 chars"
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "handle is required"
  }
  
  if (Validator.isEmpty(data.email)) {
    // console.log('test and thanks you ')
    errors.email = "email is required"
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "email is invalid"
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password is required"
  }


 if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isLength(data.password, data.password2)) {
    errors.password2 = "password must match";
  }

  return {
    errors,
    isValid : Object.keys(errors).length === 0
  }
}