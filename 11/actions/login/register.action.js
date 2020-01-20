const User = require('../../models/user.model')
const Role = require('../../models/role.model')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const { randomKey } = require ('../../lib/generatorkey')
const token = randomKey(54, 'aA#')

class Register {
    constructor(req){
        (this.name = req.body.name),
        (this.email = req.body.email),
        (this.username = req.body.username),
        (this.phone = req.body.phone),
        (this.password = req.body.password),
        (this.password_confirmation = req.body.password_confirmation),
        (this.gender = req.body.gender),
        (this.activation_token = token)
    }

    async exec() {
        try {
            const options = {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD
                }
            }
            let password = bcrypt.hashSync(this.password, 8)
            console.log(`Hashing password ${password}`)

            let get_role = await Role.findOne({ name: 'user' }).exec()

            let insert_data = {
                name: this.name,
                email: this.email,
                username: this.username,
                phone: this.phone,
                gender: this.gender,
                role_id: get_role._id,
                activation_token: this.activation_token,
                password,
            }

            let query = new User(insert_data)
            await query.save()

            const transporter = await nodemailer.createTransport(options)

            const data = {
                to: this.email,
                subject: 'Register and GET token to verify',
                text: `Here is your token: ${token}`,
                html: ``
            }

            setTimeout(async() => {
                return await transporter.sendMail(data, (error, res) => {
                    if (error) {
                        console.log(error)
                    }
                })
            }, 600)

            return {token, expires_in: '24 hours'}
        } catch (err) {
            throw err
        }

    }
}

module.exports = Register