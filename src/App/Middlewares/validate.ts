// import { Request, Response, NextFunction, RequestHandler } from "express";
// import Joi from "joi";

// export const validateRequest = (schema: Joi.ObjectSchema): RequestHandler => {
//   return (req, res, next): void => {
//     const { error } = schema.validate(req.body, { abortEarly: false });

//     if (error) {
//       res.status(400).json({
//         message: "Validation failed",
//         details: error.details.map((detail) => detail.message),
//       });
//       return;
//     }
//     next(); 
//   };
// };
