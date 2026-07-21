import { toNumber } from '../../utils/helpers'
import { Users } from './model'

export const getUsers = async (req, res) => {
  try {
    const docs = await Users.find().limit(toNumber(req.query.limit, 40)).skip(toNumber(req.query.offset, 0)).exec()
    res.status(200).json({ data: docs })
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}
