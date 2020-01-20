const Admin = require('../../models/admin')
const bcrypt = require('bcryptjs')

class Destroy {
    constructor(id) {
        this.id = id
    }
    async exec() {
        try {
            let data = await Admin.findOneAndDelete({_id:this.id}).exec()
        
        if (data === null) {
            throw new Error('Hmm seems no such data has found')
        }
        let updateAdmin = await Admin.findOneAndUpdate({_id: data._id}, { deleted_at: Date.now() }).exec()
        return data
        }catch(err){
            throw err
        }
    }
}
module.exports = Destroy
