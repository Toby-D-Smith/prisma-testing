import * as orderRepository from '../repositories/userRepository'

const userService = {
    repo: orderRepository,
    async createUser() {
        try {
            const user = await this.repo.createUser({
                firstName: 'test',
                lastName: 'test',
                position: 'test',
            })
            return user
        } catch (e) {
            throw e
        }
    },
    async getUsers(
        firstName: string | undefined,
        lastName: string | undefined
    ) {
        try {
            const users = await this.repo.getUsers({ firstName, lastName })
            return users
        } catch (e) {
            throw e
        }
    },
}
export default userService
