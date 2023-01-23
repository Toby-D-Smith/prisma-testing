import * as express from 'express'
import { Router } from 'express'
import { createUser } from '../controllers/userController'

export const users: Router = express.Router()

users.route('/users/:createUser').get(createUser)
