import {
  countryNameFormatter,
  capitalizeCountryCode,
} from '@helpers/format_country_name'
import CountryModel from '@models/country_model'
import { Country } from './types'

export const addCountry = async ({ country_name, country_code }: Country) => {
  try {
    const new_country = new CountryModel({
      country_name: await countryNameFormatter(country_name),
      country_code: await capitalizeCountryCode(country_code),
    })

    await new_country.save()

    return new_country._id
  } catch (error) {
    throw error
  }
}
