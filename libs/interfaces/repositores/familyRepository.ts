import { CreatePersonBody } from '../models/family/createPersonBody'
import { GetPeopleBody } from '../models/family/getPeopleBody'
import { Person } from '../models/family/person'

export interface FamilyRepository {
    createPerson(createPersonBody: CreatePersonBody): Promise<Person>
    getPeople(getPeopleBody: GetPeopleBody): Promise<Person[]>
}
