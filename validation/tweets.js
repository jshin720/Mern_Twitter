const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateTweetInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, {min: 5, max: 250})) {
    errors.text = 'Tweet has to be more than 5 and less then 250 chars'
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text is required"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }


}