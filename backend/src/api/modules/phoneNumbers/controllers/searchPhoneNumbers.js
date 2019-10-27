import { PhoneNumberDAL } from '../DALs'

export default async (req, res) => {
  try {
    return res.send(true)
  } catch (error) {
    return res.status(500).send(error)
  }
}