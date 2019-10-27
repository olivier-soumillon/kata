import { PhoneNumberDAL } from '../DALs'

export default async (req, res) => {
  try {
    const changes = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    }

    const updatedPhoneNumber = await PhoneNumberDAL.update(req.params.phoneNumberID, changes)
    return res.send(updatedPhoneNumber)
  } catch (error) {
    return res.status(500).send(error)
  }
}