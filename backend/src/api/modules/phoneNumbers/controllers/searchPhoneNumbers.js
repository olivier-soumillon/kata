import { PhoneNumberDAL } from '../DALs'

export default async (req, res) => {
  try {
    const phoneNumbers = await PhoneNumberDAL.search(req.query.searchKey)
    return res.send(phoneNumbers)
  } catch (error) {
    return res.status(500).send(error)
  }
}