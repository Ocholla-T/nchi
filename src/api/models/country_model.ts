import { model, Schema } from 'mongoose'

const Country_Schema = new Schema({
  country_name: {
    type: String,
    required: [true, 'country_name is required'],
    unique: true,
  },
  country_code: {
    type: String,
    required: [true, 'country_code is required'],
    unique: true,
    minLength: [
      3,
      '`country_code` is shorter than the minimum allowed length (3)',
    ],
    maxLength: [
      3,
      '`country_code` is longer than the maximum allowed length (3).',
    ],
    uppercase: true,
  },
  country_first_order_administrative_level: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Country_First_Order',
    },
  ],
})

export default model('Country', Country_Schema)
