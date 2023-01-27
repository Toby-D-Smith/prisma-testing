import { PrismaClient } from '../../../prisma/generated/client1'
import { CreatePersonBody } from '../../interfaces/models/family/createPersonBody'
import { GetPeopleBody } from '../../interfaces/models/family/getPeopleBody'
import { FamilyRepository } from '../../interfaces/repositores/familyRepository'

const prisma = new PrismaClient({ log: ['query'] })

export const familyRepository: FamilyRepository = {
    async createPerson(createPersonBody: CreatePersonBody) {
        try {
            const person = await prisma.person.create({
                data: createPersonBody,
            })
            return person
        } catch (e) {
            throw e
        }
    },
    getPeople: async function getPeople({ firstName, lastName }) {
        try {
            const person: GetPeopleBody = {}

            if (firstName) {
                person.firstName = firstName
            }
            if (lastName) {
                person.lastName = lastName
            }
            await prisma.$connect()
            const response = await prisma.person
                .findMany
                // {
                // where: person,
                // }
                ()
            return response
        } catch (e) {
            throw e
        } finally {
            await prisma.$disconnect()
        }
    },
}
