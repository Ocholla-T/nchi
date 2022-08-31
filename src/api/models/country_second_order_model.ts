import { model, Schema, Types } from 'mongoose'

const Country_Second_Order_Schema = new Schema({
  country_second_order_name: {
    type: String,
    required: true,
  },
  country_third_order_administrative_level: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
})

export default model('Country_Second_Order', Country_Second_Order_Schema)
