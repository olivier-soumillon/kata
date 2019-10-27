import {body, param} from 'express-validator'

function isPhoneNumber (value) {
  return true
}

export const createPhoneNumber = [
  body('firstName').trim().not().isEmpty(),
  body('lastName').trim().not().isEmpty(),
  body('phoneNumber').custom(isPhoneNumber)
]

export const updatePhoneNumber = [
  param('phoneNumberID'),
  body('firstName').trim().not().isEmpty(),
  body('lastName').trim().not().isEmpty(),
  body('phoneNumber').custom(isPhoneNumber)
]

export const deletePhoneNumber = [
  param('phoneNumberID')
]