import mongoose from 'mongoose'
import 'dotenv/config'

const { MONGODB_URI } = process.env

export const db = (() => {
  mongoose.connect(MONGODB_URI as string)

  return mongoose.connection
})()
