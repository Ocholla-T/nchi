import CountryModel from '@models/country_model'
import { Country } from './types'

export const getCountry = async ({ country_name }: Country) => {
  try {
    const foundCountry: Country | null = await CountryModel.findOne({
      country_name: country_name,
    })

    return foundCountry
  } catch (error) {
    throw error
  }
}
