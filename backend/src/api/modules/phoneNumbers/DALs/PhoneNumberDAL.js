import { PhoneNumber } from '../models'

export async function search (searchKey) {
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

export async function create (data) {
  return await new PhoneNumber(data).save({ new: true })
}

export async function update (id, changes) {
  return await PhoneNumber.findByIdAndUpdate(id, changes)
}

export async function remove (id) {
  return await PhoneNumber.findByIdAndRemove(id)
}