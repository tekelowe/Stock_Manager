import cors from 'cors'
import express from 'express'
import { transactionRouter } from './app/routes/transactions/transactionRouter.js';

const app = express();

const PORT = 5002;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.use('/api/transactions', transactionRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
