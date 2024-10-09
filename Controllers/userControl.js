const { BaseControllers } = require('./baseСontrol')
class UserControllers extends BaseControllers {
    constructor() {
        super()
        this.Api_user_profile = '/users/profile';
        this.Api_user = '/users/current'
    }
    async getUserProfile() {
        return this.get(this.Api_user_profile)
    }
    async getCurrentUser() {
        return this.get(this.Api_user)
    }
}
module.exports.UserControllers = UserControllers