import { Request, RequestHandler, Response } from 'express'
import userService from '../services/userService'

interface createUserBody extends Request {
    firstName?: string | undefined
    lastName?: string | undefined
    position?: string | undefined
}

export const createUser: RequestHandler<
    any,
    unknown,
    createUserBody,
    any
> = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, position } = req.body
        const user = await userService.createUser({
            firstName,
            lastName,
            position,
        })
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

interface getUserRequest extends Request {
    firstName?: string | undefined
    lastName?: string | undefined
}

export const getUser: RequestHandler<
    any,
    unknown,
    unknown,
    getUserRequest
> = async (req, res: Response) => {
    try {
        const { firstName, lastName } = req.query
        const user = await userService.getUsers({ firstName, lastName })
        res.status(200).json(user[0])
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
