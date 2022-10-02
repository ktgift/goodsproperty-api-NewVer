const { ThaiProvince } = require('../models');
const { ThaiAmphure } = require('../models');
const { ThaiTambon } = require('../models');

exports.getProvince = async  (req, res, next) => {
    try{
        const province = await ThaiProvince.findAll({
            attributes: ['id', 'nameTh', 'nameEn']
        });
        // console.log(JSON.stringify(province, null, 2))

        // res.send(province)
        res.json({allProvince: province})

    } catch(err) {
        next(err);
    }
}

exports.getAmphure = async (req, res, next) => {
    try {
        const amphure = await ThaiAmphure.findAll({
            attributes: ['id', 'nameTh', 'nameEn', 'provinceId']
        })
        res.json({allAmphure: amphure})
    } catch(err) {
        next(err)
    }
}

exports.getTombon = async (req, res, next) => {
    try{
        const tambon = await ThaiTambon.findAll({
            attributes: ['id', 'nameTh', 'nameEn', 'amphureId']
        })
        res.json({ allTambon: tambon })
    } catch(err){
        next(err)
    }
}