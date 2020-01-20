const User = require('../../models/user.model')
const bcrypt = require('bcryptjs')

class Edit {
    constructor(params, updated) {
        this.params = params,
        this.updated = updated
    }

    async exec() {
        try {
            let update = await User.findOneAndUpdate(
                this.params,
                this.updated
            ).exec()
            return update
        } catch(err) {
            throw err
        }
    }
}

module.exports = Edit


