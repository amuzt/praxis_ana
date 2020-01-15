const register = require ('./register.route')
const activation = require ('./activation.route')
const login = require ('./login.route')

const routes = (app) => {
    app.use('/register', register)
    app.use('/activation', activation)
    app.use('/login', login)
}

module.exports = routes