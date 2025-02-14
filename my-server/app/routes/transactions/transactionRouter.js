import express from 'express'
import { transactionController } from '../../controllers/transactions/transactionController.js'

export const transactionRouter = express.Router()

transactionRouter.post('/', transactionController.add)