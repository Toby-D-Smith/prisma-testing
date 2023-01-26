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

export const getUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('hello')
        const { firstName, lastName } = req.params
        const user = await userService.getUsers(firstName, lastName)
        res.status(200).json(user[0])
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
