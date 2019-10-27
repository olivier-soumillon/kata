import { PhoneNumberDAL } from '../DALs'

export default async (req, res) => {
  try {
    const phoneNumber = await PhoneNumberDAL.findByID(req.params.phoneNumberID)
    return res.send(phoneNumber)
  } catch (error) {
    return res.status(500).send(error)
  }
}