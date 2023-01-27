import * as express from 'express'
import { Router } from 'express'
import { createPerson, getPeople } from '../controllers/familyController'

export const family: Router = express.Router()

family.route('/family/createPerson').get(createPerson)

family.route('/family/getPeople').get(getPeople)
