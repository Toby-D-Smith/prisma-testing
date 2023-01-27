import { CreateUserBody } from '../models/user/createUserBody'
import { GetUsersBody } from '../models/user/getUsersBody'
import { User } from '../models/user/user'

export interface UserRepository {
    createUser(createUserBody: CreateUserBody): Promise<User>
    getUsers(getUsersBody: GetUsersBody): Promise<User[]>
}
