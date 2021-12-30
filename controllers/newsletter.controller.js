const models = require('../models');
const Validator = require('fastest-validator');
//var Validator = require("email-validator");
//import {EmailValidator} from 'email-validator';
//EmailValidator.validate("test@email.com");

//const v = new EmailValidation();
//const v = new Validator();
const v = new Validator();

// @desc create a newsletter
// @route POST /newsletter
exports.addNewsletter = (req, res) => {
  const schema = {
    email: { type: 'string', optional: false },
  };
  console.log
  const newsletter = {
    email: req.body.email,
  };


  models.Newsletter.findOne({ where: { email: req.body.email } }).then(
    (result) => {
      if (result) {
        res.status(409).json({
          message: 'Email already registered',
        });
      } else {
        const validationResponse = v.validate(newsletter, schema);      
        if (!validationResponse) {
          return res.status(400).json({
            message: 'Validation failed',
            data: validationResponse,
            
          });
        
        }
     

        models.Newsletter.create(newsletter)
          .then((result) => {
            res.status(201).json({
              message: 'Newsletter created successfully',
              data: result,
            });
          })
          console.log(result)
          .catch((error) => {
            res.status(500).json({
              message: 'Something went wrong',
              data: error,
            });
          });
          
      }
    }
  );
};
