const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../middlewares/createError');
const { User } = require('../models');

const signToken = payload => 
    jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });


exports.register = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, confirmPassword, phoneNumber } = req.body;
        
        //ถ้าไม่ส่งอะไรมา firstname === ''
        if(!firstname) {
            createError('firstname is required', 400);
        }

        if(!lastname) {
            createError('lastname is required', 400);
        }
        
        if(!email) {
            createError('email is required', 400);
        }

        if(!password) {
            createError('password is required', 400);
        }

        if (password !== confirmPassword) {
            createError('password not match', 400)
        }

        if(password.length < 8) {
            createError('password is invalid format', 400)
        }

        // แปลง phoneNumber to string
        const isPhoneNumber = validator.isMobilePhone(phoneNumber + '');
        if (isPhoneNumber === false) {
            createError('phone number is invalid format', 400);
        }

        // change password to hash
        const hashPassword = await bcrypt.hash(password, 12);

        // insert to db
        const user = await User.create({
            firstname, 
            lastname,
            email,
            phoneNumber: isPhoneNumber,
            password: hashPassword
        })

        //change to token
        const token = signToken({ id: user.id })
        res.status(201).json({ token })


    } catch(err){
        next(err)
        // console.log(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {email}
        })

        //ถ้าไม่เจอจะเป็น null หรือ ''
        if(!user) {
            createError('invalid user or password', 400)
        }

        const isPassword = await bcrypt.compare(password, user.password);
        // if not match result == false
        if(!isPassword) {
            createError('invalid user or password', 400)
        }

        const token = signToken({ id: user.id })        
        res.json({ token })
    } catch(err){
        next(err);
    }
}

exports.resetPassword = async (req, res, next) => {
    try {
        
    } catch(err){

    }
}