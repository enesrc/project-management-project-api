const User = require('../models/mysql/User');
const Response = require('../utils/response.js');
const APIError = require('../utils/errors.js');
const { createToken, tokenCheck } = require('../middlewares/auth.js');


const bcrypt = require('bcrypt');
const crypto = require('crypto');

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email: email } });

    if (!user)
        throw new APIError("Email yok.")

    const resultOfComparing = await bcrypt.compare(password, user.password)

    if (!resultOfComparing)
        throw new APIError("Şifre hatalı.")

    createToken(user, res)
}

const register = async (req, res) => {
    const { email } = req.body

    const user = await User.findOne({ where: { email: email } });

    if (user)
        throw new APIError("Girmiş Olduğunuz Email Kullanımda!", 401)

    req.body.password = await bcrypt.hash(req.body.password, 10)

    const userSave = new User(req.body)

    await userSave.save()
        .then((data) => {
            return new Response(data, "Kayıt Başarıyla Eklendi").created(res)
        })
        .catch((err) => {
            console.error("Kayıt Eklenemedi Hatası:", err);
            throw new APIError("Kayıt Eklenemedi!", 400)
        })
}

const me = async (req, res) => {
    return new Response("200", req.user).success(res)
}

const logout = async (req, res) => {
    
}

module.exports = {
    register,
    login,
    me,
    logout
};