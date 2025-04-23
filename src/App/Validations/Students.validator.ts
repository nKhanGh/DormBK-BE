// import Joi from 'joi';

// const addressSchema = Joi.object({
//   commune: Joi.string().max(30).required(),
//   district: Joi.string().max(30).required(),
//   province: Joi.string().max(30).required(),
// });

// const emailSchema = Joi.object({
//   email: Joi.string().email().max(50).required(),
// });

// const phoneSchema = Joi.object({
//   phoneNumber: Joi.string().pattern(/^\d{10}$/).required().messages({
//     'string.pattern.base': 'Phone number must be exactly 10 digits',
//   }),
// });

// const peopleSchema = Joi.object({
//   SSN: Joi.string().length(8).required(),
//   Full_Name: Joi.string().max(20).required(),
//   Last_Name: Joi.string().max(20).required(),
//   Birthday: Joi.date().iso().required(),
//   Sex: Joi.string().valid('M', 'F').optional(),
//   Health_State: Joi.string().max(100).optional(),
//   Ethnic_Group: Joi.string().max(30).optional(),
// });

// const studentSchema = Joi.object({
//   studentId: Joi.string().length(8).required(),
//   hasHealthInsurance: Joi.boolean().required(),
//   studyStatus: Joi.string().max(20).optional(),
//   className: Joi.string().max(20).optional(),
//   faculty: Joi.string().max(50).optional(),
//   building_id: Joi.string().length(5).optional(),
//   room_id: Joi.string().length(5).optional(),
// });

// export const fullStudentCreateSchema = Joi.object({
//   student: studentSchema.required(),
//   people: peopleSchema.required(),
//   addresses: Joi.array().items(addressSchema).min(1).required(),
//   emails: Joi.array().items(emailSchema).min(1).required(),
//   phones: Joi.array().items(phoneSchema).min(1).required(),
// });
