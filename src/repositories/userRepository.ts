import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query'] })

export async function createUser({
    firstName,
    lastName,
    position,
}: {
    firstName: string
    lastName: string
    position: string
}) {
    try {
        const user = {
            firstName: firstName,
            lastName: lastName,
            position: position,
        }

        console.log('IN REPO')
        const response = await prisma.staff.create({
            data: user,
        })
        return response
    } catch (e) {
        throw e
    }
}

export async function getUsers({
    firstName,
    lastName,
}: {
    firstName: string | undefined
    lastName: string | undefined
}) {
    try {
        const user: { firstName?: string; lastName?: string } = {}

        if (firstName) {
            user.firstName = firstName
        }
        if (lastName) {
            user.lastName = lastName
        }

        const response = await prisma.staff.findMany({
            where: user,
        })
        return response
    } catch (e) {
        throw e
    }
}
