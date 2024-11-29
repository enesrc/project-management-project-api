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

/*const register = async (req, res) => {
    const { name, surname, email, phone, gender, birthdate, profileImageUrl, country, city, password } = req.body;

    await User.create({
        name,
        surname,
        email,
        phone,
        password,
        gender,
        birthdate,
        profileImageUrl,
        country,
        city
    }).then(newUser => {
        new Response(201, "Account was created successfully.", newUser).success(res)
        console.log("Account was created successfully.");
    }).catch(error => {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    })
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials!' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
};

const getUsers = async (req, res) => {
    await User.findAll()
        .then(users => {
            new Response(200, "All user information was successfully pulled.", users).success(res);
        })
        .catch(error => {
            res.status(531).json(error);
        });
}

const deleteUsers = async (req, res) => {
    await User.destroy({
        truncate: true
    }).then(users => {
        new Response(200, 'Records deleted', users).success(res);
    }).catch(error => {
        res.status(531).json(error);
    });
}*/

module.exports = {
    register,
    login,
    me
};