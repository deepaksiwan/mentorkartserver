const models = require('../models');
const Validator = require('fastest-validator');

const v = new Validator();

// @desc create a organisation
// @route POST /organisation
exports.addOrganisation = (req, res) => {
  // console.log(req.body.email);
  const schema = {
    org_name: { type: 'string', optional: false },
    org_address: { type: 'string', optional: false },
    full_name: { type: 'string', optional: false },
    email: { type: 'string', optional: false },
    phone: { type: 'string', optional: false },
    message: { type: 'string', optional: false },
    designation: { type: 'string', optional: false },
  };
  const organisation = {
    org_name: req.body.orgName,
    org_address: req.body.address,
    full_name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    designation: req.body.designation,
  };
  console.log(req.body);

  const validationResponse = v.validate(organisation, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: validationResponse,
    });
  }
  
  models.Organisation.create(organisation)
    .then((result) => {
      res.status(201).json({
        message: 'Organisation created successfully',
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
