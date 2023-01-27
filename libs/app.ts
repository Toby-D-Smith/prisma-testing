import express from 'express'
import { users } from './src/routes/user'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(users)

export default app
