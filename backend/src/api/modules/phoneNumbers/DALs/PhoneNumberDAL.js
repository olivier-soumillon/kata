import { PhoneNumber } from '../models'

export async function findById (id) {
  return await PhoneNumber.findById(id)
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