const User = require('../models/mysql/User');
const UserProfile = require('../models/mysql/UserProfile');
const Response = require('../utils/response.js');
const APIError = require('../utils/errors.js');

const getProfileData = async (req, res, next) => {
    const { nickname } = req.params;    

    const user = await User.findOne({
        where: { nickname: nickname },
        attributes: ['nickname', 'first_name', 'last_name', 'email','gender','birth_date', 'country'],
        include: [{
            model: UserProfile,
            attributes: ['profile_image', 'wallpaper', 'bio', 'social_links', 'title'] // İstediğiniz alanları buraya ekleyin
        }]
    });
    
    if (!user) {
        return new Response(404, "User not found").error404(res);
    }

    return new Response(200, "User profile data retrieved successfully", user).success(res);
}

module.exports = {
    getProfileData,
};