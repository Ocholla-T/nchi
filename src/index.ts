import express from 'express'
import cors from 'cors'
import 'module-alias/register'
import 'dotenv/config'
import { db } from '@config/database'
import routes from '@routes/index'
import { errorHandler } from '@middleware/error_handler'

/*
 * ----------------------------------------------------------------
 * Check connection to the mongodb database
 * ----------------------------------------------------------------
 */
db.once('open', () => console.log('Database connection opened'))

/*
 * ----------------------------------------------------------------
 * Check for errors on connection to the database
 * ----------------------------------------------------------------
 */
db.on('error', (err: any) => console.error(err))

/*
 * ----------------------------------------------------------------
 * Initialise express server
 * ----------------------------------------------------------------
 */
const app = express()

/*
 * ----------------------------------------------------------------
 * GLOBAL MIDDLEWARE
 * ----------------------------------------------------------------
 */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*
 * ----------------------------------------------------------------
 * API ROUTES
 * ----------------------------------------------------------------
 */
app.use('/api/v1', routes)

/*
 * ----------------------------------------------------------------
 * ERROR HANDLER
 * ----------------------------------------------------------------
 */

app.use(errorHandler)

app.listen(process.env.PORT, () =>
  console.log(`server has started on port ${process.env.PORT}`)
)
