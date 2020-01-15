const User = require('../../models/user.model')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const {
    randomKey
} = require('../../lib/generatorkey')
const token = randomKey(54, 'aA#')

const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.EMAIL_PASSWORD);
// const msg = {
//   to: 'amust93@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

class Register {
    constructor(req) {
        this.sendGridMail = sgMail,

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

            let insert_data = {
                name: this.name,
                email: this.email,
                username: this.username,
                phone: this.phone,
                gender: this.gender,
                activation_token: this.activation_token,
                password,
            }

            let query = new User(insert_data)
            await query.save()

            const sgm = this.sendGridMail
            sgm.setApiKey(process.env.EMAIL_PASSWORD);

            const msg = {
                to: this.email,
                from: 'admin@pertanyaanakhirpekan.com',
                subject: 'Your activation code',
                text: `Ini adalah kode aktivasi kamu  ${token}`,


            }
            const data = sgm.send(msg)

            //     const transporter = await nodemailer.createTransport(options)

            //     const data = {
            //         to: this.email,
            //         subject: 'Register and GET token to verify',
            //         text: `Here is your token: ${token}`,
            //         html: ``
            //     }

            //     setTimeout(async() => {
            //         return await transporter.sendMail(data, (error, res) => {
            //             if (error) {
            //                 console.log(error)
            //             }
            //         })
            //     }, 600)

            return {
                token,
                expires_in: '24 hours'
            }
        } catch (err) {
            throw err
        }

    }
}

module.exports = Register