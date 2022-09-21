const jwt = require('jsonwebtoken');
const createError = require("./createError");
const { User } = require("../models");

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        //ถ้าไม่ส่ง authorization มา = undefined
        if (!authorization || !authorization.startsWith('Bearer')) {
            createError('unauthorized', 401)
            console.log(authorization)
        }

        //split เอาค่าหลัง Bearer
        const token = authorization.split(' ')[1];
        if (!token) {
            createError('unauthorized', 401)
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        

        const user = await User.findOne({ 
            where: {id: payload.id},
            attributes: {
                exclude: ['password']
            } 
        })

        // ส่ง user ไปใน่ req
        req.user = user;
        next();

    } catch(err) {
        next(err);
    }
}