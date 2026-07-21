import { toNumber } from '../../utils/helpers'
import { Users } from './model'

export const getUsers = async (req, res) => {
  try {
    const limit = toNumber(req.query.limit, 40)
    const offset = toNumber(req.query.offset, 0)
    const docs = await Users.find().limit(limit).skip(offset).exec()
    res.status(200).json({ data: docs })
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}
