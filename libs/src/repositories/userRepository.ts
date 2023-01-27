import { PrismaClient } from '@prisma/client'
import { CreateUserBody } from '../../interfaces/models/user/createUserBody'
import { GetUsersBody } from '../../interfaces/models/user/getUsersBody'
import { User } from '../../interfaces/models/user/user'
import { UserRepository } from '../../interfaces/repositores/userRepository'

const prisma = new PrismaClient({ log: ['query'] })
export const userRepository: UserRepository = {
    createUser: async function createUser(
        createUserBody: CreateUserBody
    ): Promise<User> {
        try {
            const user = {
                firstName: createUserBody.firstName,
                lastName: createUserBody.lastName,
                position: createUserBody.position,
            }

            console.log('IN REPO')
            const staff = await prisma.staff.create({
                data: user,
                include: {
                    manager: true,
                    team: true,
                },
            })
            return staff
        } catch (e) {
            throw e
        }
    },
    getUsers: async function getUsers({ firstName, lastName }) {
        try {
            const user: GetUsersBody = {}

            if (firstName) {
                user.firstName = firstName
            }
            if (lastName) {
                user.lastName = lastName
            }

            const response = await prisma.staff.findMany({
                where: user,
                include: {
                    manager: true,
                    team: true,
                },
            })
            return response
        } catch (e) {
            throw e
        }
    },
}
