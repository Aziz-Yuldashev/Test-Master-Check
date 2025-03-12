import { config } from 'dotenv'
import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import './models/index.js'
config()
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', router)

const PORT = process.env['PORT'] ?? 8000

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.error('Error connecting to the database:', error)
    }
}
start()
