const Admin = require('../../models/admin')
const bcrypt = require('bcryptjs')

class Create {
    constructor(req){
        (this.name = req.body.name),
        (this.username = req.body.username),
        (this.password = req.body.password),
        (this.email = req.body.email),
        (this.gender = req.body.gender),
        (this.phone = req.body.phone),
        (this.role_id = req.body.role_id),
        (this.password_confirmation = req.body.password_confirmastion)
    } async exec() {
        try {
        let password = bcrypt.hashSync(this.password, 6)
        let inputData = {
            name: this.name,
            username: this.username,
            email: this.email,
            gender: this.gender,
            phone: this.phone,
            role_id: this.role_id,
            password,
        }
        
        let query = new Admin (inputData)
        await query.save()
        } catch(err) {
            throw err
        }
    }
}

module.exports = Create
