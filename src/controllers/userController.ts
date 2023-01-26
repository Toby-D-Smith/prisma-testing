import { Request, RequestHandler, Response } from 'express'
import userService from '../services/userService'

export const createUser: RequestHandler = async (
    req: Request,
    res: Response
) => {
    try {
        console.log('hello')
        const user = await userService.createUser()
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
        console.log(req)
        const { firstName, lastName } = req.query

        console.log('Getting Users', firstName, lastName)

        const user = await userService.getUsers(firstName, lastName)
        res.status(200).json(user[0])
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
