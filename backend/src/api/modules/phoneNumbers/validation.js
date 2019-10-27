import {body, param, query} from 'express-validator'
import { isPhoneNumber } from '../../utils'

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

export const searchPhoneNumber = [
  query('searchKey').trim().not().isEmpty()
]