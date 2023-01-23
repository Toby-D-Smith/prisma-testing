import { Request, RequestHandler, Response } from 'express'
import userService from '../services/userService'

export const createUser: RequestHandler = async (
    req: Request,
    res: Response
) => {
    try {
        console.log('hello')
        const user = await userService.createUser()
        res.send(user)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
