import { Request, RequestHandler, Response } from 'express'

export const createUser: RequestHandler = async (
    req: Request,
    res: Response
) => {
    try {
        console.log('hello')
    } catch (e) {
        res.status(500).json(e)
    }
}
