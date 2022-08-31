import { Types } from 'mongoose'

export type Country = {
  country_name: string
  country_code: string
  country_first_order_id: Types.ObjectId
}
