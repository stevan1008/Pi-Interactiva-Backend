const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const UnauthenticatedError = require('../errors/unanuthenticated')
const BadRequestError = require('../errors/bad-request')

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
    const { email, password } = req.body

    if(!email || !password){
        throw new BadRequestError('Email y Password son requeridos')
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw new UnauthenticatedError('Credenciales invalidas')
      }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Credenciales invalidas')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name },token })
}

module.exports = { 
    register,
    login
}