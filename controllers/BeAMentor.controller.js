const models = require('../models');
const Validator = require('fastest-validator');

const v = new Validator();
exports.addBeAMentor = (req, res) => {
  const schema = {

    full_name: { type: "string", optional: false },
    email: { type: "string", optional: false },
    mobile_number: { type: "string", optional: false },
    gender: { type: "string", optional: false },
    linked_in: { type: "string", optional: false },
    dob: { type: "string", optional: false },
    full_address: { type: "string", optional: false },
    interests: { type: "string", optional: false },
    whom_to_mentor: { type: "string", optional: false },
    industry: { type: "string", optional: false },
    other_industry: { type: "string", optional: false },
    first_pref: { type: "string", optional: false },
    second_pref: { type: "string", optional: false },
    third_pref: { type: "string", optional: false },
    designation: { type: "string", optional: false },
    bio: { type: "string", optional: false },
    get_to_know: { type: "string", optional: false },
    othergetToKnow: { type: "string", optional: false },
    grad_college: { type: "string", optional: false },
    grad_degree: { type: "string", optional: false },
    grad_year: { type: "string", optional: false },
    post_grad_college: { type: "string", optional: false },
    post_grad_degree: { type: "string", optional: false },
    post_grad_year: { type: "string", optional: false },
  };
  console.log(req.body);
  const BeAMentor = {
    full_name: req.body.full_name,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    gender: req.body.gender,
    linked_in: req.body.linked_in,
    dob: req.body.dob,
    full_address: req.body.full_address,
    interests: req.body.interests,
    whom_to_mentor: req.body.whom_to_mentor,
    industry: req.body.industry,
    other_industry: req.body.other_industry,
    first_pref: req.body.first_pref,
    second_pref: req.body.second_pref,
    third_pref: req.body.third_pref,
    designation: req.body.designation,
    bio: req.body.bio,
    get_to_know: req.body.get_to_know,
    othergetToKnow: req.body.othergetToKnow,
    grad_college: req.body.grad_college,
    grad_degree: req.body.grad_degree,
    grad_year: req.body.grad_year,
    post_grad_college: req.body.post_grad_college,
    post_grad_degree: req.body.post_grad_degree,
   post_grad_year: req.body.post_grad_year,
  };

 const validationResponse = v.validate(BeAMentor, schema);

  if (!validationResponse) {
    console.log(validationResponse);
    return res.status(400).json({
      message: 'Validation failed',
      errors: validationResponse,
    });
  }

  models.BeAMentor.create(BeAMentor)
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'be-a-mentor created successfully',
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
