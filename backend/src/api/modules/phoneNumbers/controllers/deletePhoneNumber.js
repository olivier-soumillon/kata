import { PhoneNumberDAL } from '../DALs'

export default async (req, res) => {
  try {
    const deletedPhoneNumber = await PhoneNumberDAL.remove(req.params.phoneNumberID)
    return res.send(deletedPhoneNumber)
  } catch (error) {
    return res.status(500).send(error)
  }
}