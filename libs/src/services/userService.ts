import { UserService } from '../../interfaces/services/userServices'
import { userRepository } from '../repositories/userRepository'

const userService: UserService = {
    repo: userRepository,
    async createUser(createUserBody) {
        try {
            const user = await this.repo.createUser(createUserBody)
            return user
        } catch (e) {
            throw e
        }
    },
    async getUsers(getUsersBody) {
        try {
            const users = await this.repo.getUsers(getUsersBody)
            return users
        } catch (e) {
            throw e
        }
    },
}
export default userService
