import express from 'express'
import { users } from './src/routes/user'
import { family } from './src/routes/family'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(users)
app.use(family)

export default app
