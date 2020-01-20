const User = require('../../models/user.model')
const bcrypt = require('bcryptjs')

class Destroy {
    constructor(id) {
        this.id = id
    }
    async exec() {
        try {
            let data = await User.findOneAndDelete({_id:this.id}).exec()
        
        if (data === null) {
            throw new Error('Hmm seems no such data has found')
        }
        let updateUser = await User.findOneAndUpdate({_id: data._id}, { deleted_at: Date.now() }).exec()
        return data
        }catch(err){
            throw err
        }
    }
}
module.exports = Destroy
