const models = require('../models');
const Validator = require('fastest-validator');

const v = new Validator();

// @desc create a campus
// @route POST /campus
exports.addCampus = (req, res) => {
  const schema = {
    campus_name: { type: 'string', optional: false },
    campus_address: { type: 'string', optional: false },
    full_name: { type: 'string', optional: false },
    email: { type: 'string', optional: false },
    phone: { type: 'string', optional: false },
    message: { type: 'string', optional: false },
    designation: { type: 'string', optional: false },
  };
  //console.log(req.body);
  const campus = {
    campus_name: req.body.orgName,
    campus_address: req.body.address,
    full_name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    designation: req.body.designation,
  };

  const validationResponse = v.validate(campus, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: validationResponse,
    });
  }

  models.Campus.create(campus)
    .then((result) => {
      res.status(201).json({
        message: 'Campus created successfully',
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};
