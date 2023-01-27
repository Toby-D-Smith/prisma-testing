import { CreateUserBody } from '../models/user/createUserBody'
import { User } from '../models/user/user'
import { GetUsersBody } from '../models/user/getUsersBody'
import { UserRepository } from '../repositores/userRepository'

export interface UserService {
    repo: UserRepository
    createUser(createUserBody: CreateUserBody): Promise<User>
    getUsers(getUsersBody: GetUsersBody): Promise<User[]>
}
