import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.staff.findMany({
        where: {
            team: {
                team_lead: 21,
            },
        },
    })
    console.log(allUsers)
}

try {
    main()
} catch (e) {
    console.log(e)
}
