import { Request, Response, NextFunction } from 'express'

type Errors = {
  [key: string]: string
}

type ApiError = {
  errors: {
    [key: string]: {
      name: string
      message: string
    }
  }
  name: string
  statusCode: number
  message: string
}

export const errorHandler = (
  error: ApiError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let errors: Errors = {}

  if (error.name === 'ValidationError') {
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message
    })

    return response.status(400).json({ errors })
  }
}
