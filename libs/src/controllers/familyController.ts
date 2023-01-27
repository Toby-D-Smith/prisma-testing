import { Request, RequestHandler, Response } from 'express'
import { familyService } from '../services/familyService'

interface createPersonBody extends Request {
    firstName?: string | undefined
    lastName?: string | undefined
    dateOfBirth?: string | undefined
}

export const createPerson: RequestHandler<
    any,
    unknown,
    createPersonBody,
    any
> = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, dateOfBirth } = req.body
        const person = await familyService.createPerson({
            firstName,
            lastName,
            dateOfBirth,
        })
        res.status(200).json(person)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
interface getPeopleRequest extends Request {
    firstName?: string | undefined
    lastName?: string | undefined
}

export const getPeople: RequestHandler<
    any,
    unknown,
    unknown,
    getPeopleRequest
> = async (req, res: Response) => {
    try {
        const { firstName, lastName } = req.query
        const user = await familyService.getPeople({ firstName, lastName })
        res.status(200).json(user[0])
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
