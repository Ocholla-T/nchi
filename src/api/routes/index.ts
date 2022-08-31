import { addCountry, getCountry } from '@services/index'
import { Country } from '@services/types'
import { NextFunction, Request, Response, Router } from 'express'

const router = Router()

router.get(
  '/get-country',
  async (request: Request, response: Response, next: NextFunction) => {
    /*
     * ------------------------------------------
     * Get the country from the query parameters
     * ------------------------------------------
     */
    let country_name = request.query.country

    await getCountry({ country_name } as Country)
      .then((country) => {
        response.status(200).json({ country })
      })
      .catch((error) => next(error))
  }
)

router.post(
  '/add-country',
  async (request: Request, response: Response, next: NextFunction) => {
    const { country_name, country_code } = request.body

    await addCountry({ country_name, country_code } as Country)
      .then(() =>
        response
          .status(201)
          .json({ message: `${country_name} added successfully` })
      )
      .catch((error) => next(error))
  }
)

export default router
