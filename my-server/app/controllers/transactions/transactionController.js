import { transactionService } from "../../services/transactions/transactionService.js"

export const transactionController = {
    add: async (req, res) => {
        const { num1, num2 } = req.body
        const response = transactionService.add(num1, num2)
        res.json(response)
    }
}
