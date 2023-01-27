import { FamilyRepository } from '../repositores/familyRepository'
import { CreatePersonBody } from '../models/family/createPersonBody'
import { GetPeopleBody } from '../models/family/getPeopleBody'
import { Person } from '../models/family/person'

export interface FamilyService {
    repo: FamilyRepository
    createPerson(createPersonBody: CreatePersonBody): Promise<Person>
    getPeople(getPeopleBody: GetPeopleBody): Promise<Person[]>
}
