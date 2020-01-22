const ResetPassword = require('../../models/reset.model')
const User = require('../../models/user.model')
const {
    randomKey
} = require('../../lib/generatorkey')
const nodemailer = require('nodemailer')
const token = randomKey(54, 'aA#')


class ForgotPassword {
    constructor(req) {
        this.email = req.body.email
        this.username = req.body.username
    }

    async exec() {
        try {
            let user = await User.findOne({
                $or: [{
                    email: this.email
                }, {
                    username: this.username
                }]
            }).exec()

            if (user === null) {
                throw new Error('User not found')
            }


            let password = new ResetPassword({
                $or: [{
                        email: this.email
                    },
                    {
                        username: this.username
                    }
                ],
                token
            })
            password.save()

            const options = {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD
                }
            }

            const transporter = await nodemailer.createTransport(options)
            let request_data = {
                to: this.email,
                subject: 'Forgot Password',
                text: `Your token for reset password is: ${token}`,
                html: ''
            }

            setTimeout(async () => {
                return await transporter.sendMail(request_data, (error, res) => {
                    if (error) {
                        console.log(error)
                    }
                })
            }, 600)

            return {
                password,
                expires_in: '24 hours'
            }
        } catch (err) {
            throw err
        }

    }
}
module.exports = ForgotPassword