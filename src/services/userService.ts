import * as orderRepository from '../repositories/userRepository'

const userService = {
    repo: orderRepository,
    async createUser() {
        try {
            console.log('In Service')
            const user = await this.repo.createUser()
            console.log('Service', user)
            return user
        } catch (e) {
            throw e
        }
    },
}
export default userService
