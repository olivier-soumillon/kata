import { PhoneNumberDAL } from '../DALs'

export default async (req, res) => {
  try {
    const changes = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    }

    const newPhoneNumber = await PhoneNumberDAL.create(changes)
    return res.send(newPhoneNumber)
  } catch (error) {
    return res.status(500).send(error)
  }
}