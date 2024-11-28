const jwt = require("jsonwebtoken")
const APIError = require("../utils/errors")
const User = require("../models/mysql/User")

const createToken = async (user, res) => {
    const payload = {
        sub: user.id,
        name: user.name
    }

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        algorithm: "HS512",
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    return res.status(201).json({
        success: true,
        token,
        message: "Token Başarıyla Oluşturuldu."
    })
}

const tokenCheck = async (req, res, next) => {
    const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ")

    if(!headerToken)
        throw new APIError("Geçersiz Oturum, Lütfen Oturum Açın..", 401)

    const token = req.headers.authorization.split(" ")[1]
    
    await jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
        if(err)
            throw new APIError("Geçersiz Token!", 401)

        const user = await User.findByPk(decoded.sub, {
            attributes: ['id', 'first_name', 'last_name', 'email']
        });
        
        if(!user)
            throw new APIError("Geçersiz Token!", 401)

        req.user = user
    })

    next()
}

module.exports = {
    createToken,
    tokenCheck
}