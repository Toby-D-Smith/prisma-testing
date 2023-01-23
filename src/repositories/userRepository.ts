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
        // const response = await prisma.staff.findMany({
        //     // where: {
        //     //     team: {
        //     //         teamLead: {
        //     //             firstName: {
        //     //                 contains: 'Cheryl',
        //     //             },
        //     //         },
        //     //     },
        //     // },
        //     // select: {
        //     //     // firstName: true,
        //     //     // lastName: true,
        //     //     team: {
        //     //         select: {
        //     //             name: true,
        //     //             staff: {
        //     //                 select: {
        //     //                     firstName: true,
        //     //                 },
        //     //             },
        //     //         },
        //     //     },
        //     // },
        // })

        return response
    } catch (e) {
        throw e
    }
}
