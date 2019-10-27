import { PhoneNumber } from '../models'

export const findByID = async (phoneNumberID) => await PhoneNumber.findById(phoneNumberID)

export const search = async (searchKey) => {
  return await PhoneNumber.aggregate( [{
    $match: {
      $or: [
        { lastName: { $regex: searchKey, $options: 'i' } },
        { firstName: { $regex: searchKey, $options: 'i' } },
        { phoneNumber: { $regex: searchKey, $options: 'i' } }
      ]
    }
  }])
}

export const create = async (data) => await new PhoneNumber(data).save({ new: true })

export const update = async (id, changes) => await PhoneNumber.findByIdAndUpdate(id, changes)

export const remove = async (id) => await PhoneNumber.findByIdAndRemove(id)
