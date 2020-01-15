const User = require('../../models/user.model')
const bcrypt = require('bcryptjs')

class Login {
    constructor(req) {
        (this.username = req.body.username),
        (this.email = req.body.email),
        (this.password = req.body.password)
    }

    async exec() {
        try {
            let data = await User.find({
                email: this.email
            }).exec()

            if (data.length == 0) {
                throw Error('User not found')
            } if (data[0].activated_at == null) {
                throw Error('Account has not activated')
            } if (data[0].deleted_at != null) {
                throw Error('This account not found')
            }

            let password = await bcrypt.compare(this.password, data[0].password)
            if(!password) {
                throw Error('Unauthenticated')
            }

            return {data, expires_in: '24 hours'}
        } catch(err) {
            throw err
        }
    }
}

module.exports = Login