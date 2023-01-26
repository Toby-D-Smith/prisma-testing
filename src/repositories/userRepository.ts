import { PrismaClient } from '@prisma/client'
import { response } from 'express'

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
    firstName: string
    lastName: string
}) {
    try {
        const user: { firstName?: string; lastName?: string } = {}

        if (firstName) {
            user.firstName = firstName
        }
        if (lastName) {
            user.lastName = lastName
        }

        console.log('IN REPO')
        const response = await prisma.staff.findMany({
            where: user,
        })
        return response
    } catch (e) {
        throw e
    }
}
