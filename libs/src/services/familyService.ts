import { FamilyService } from '../../interfaces/services/familyServices'
import { familyRepository } from '../repositories/familyRepository'

export const familyService: FamilyService = {
    repo: familyRepository,
    async createPerson(createPersonBody) {
        try {
            const user = await this.repo.createPerson(createPersonBody)
            return user
        } catch (e) {
            throw e
        }
    },
    async getPeople(getPeopleBody) {
        try {
            const users = await this.repo.getPeople(getPeopleBody)
            return users
        } catch (e) {
            throw e
        }
    },
}
