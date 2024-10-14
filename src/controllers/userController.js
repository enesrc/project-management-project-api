const User = require('../models/mysql/User');

const register = async (req, res) => {
    const { name, surname, email, phone, gender, birthdate, profileImageUrl, country, city, password } = req.body;

    try {
        const newUser = await User.create({
            name,
            surname,
            email,
            phone,
            gender,
            birthdate,
            profileImageUrl,
            country,
            city,
            password,
            lastActiveAt: new Date()
        });

        res.status(201).json(newUser);
        console.log("Account was created successfully.");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
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

module.exports = {
    register,
    login
};