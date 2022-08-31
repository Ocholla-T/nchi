import { model, Schema } from 'mongoose'

const Country_First_Order_Schema = new Schema({
  country_first_order_name: {
    type: String,
    required: true,
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
  },
  country_second_order_administrative_level: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Country_Second_Order',
    },
  ],
})

export default model('Country_First_Order', Country_First_Order_Schema)
