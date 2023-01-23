import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query'] })

export async function createUser() {
    try {
        console.log('IN REPO')
        const response = await prisma.staff.findMany()
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
        console.log(response)

        return response
    } catch (e) {
        throw e
    }
}
