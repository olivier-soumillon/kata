import {validationResult} from 'express-validator'

function validationHandler (req, res, next) {
  try {
    validationResult(req).throw()
    return next()
  } catch (errors) {
    console.log(errors.mapped())
    return res.status(500).send(errors.mapped())
  }
}

export default (validation) => [
  validation,
  validationHandler
]