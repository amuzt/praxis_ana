const register = require ('./register.route')
const activation = require ('./activation.route')
const login = require ('./login.route')
const reset = require ('./reset.route')
const role = require ('./role.route')
const user = require ('./user.route')
const admin = require ('./admin.route')

const routes = (app) => {
    app.use('/register', register)
    app.use('/activation', activation)
    app.use('/login', login)
    app.use('/reset', reset)
    app.use('/role', role)
    app.use('/user', user)
    app.use('/admin', admin)
}

module.exports = routes