const Admin = require('../../models/admin')
const bcrypt = require('bcryptjs')

class Get_all {
    async exec(){
        try {
            let query = await Admin.find({})
            return query
        } catch(err) {
            throw err
        }
    }
}

class Details {
    constructor(id) {
        this.id = id
    }
    async exec() {
        try {
            let data = await Admin.findOne({_id: this.id})
            if (data === null) {
                throw new Error ('Hmm seems no such data has found')
            }
            return data
        } catch(err) {
            throw err
        }
    }
}
module.exports = {
    
    Get_all,
    Details,
    
}