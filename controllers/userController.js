exports.getAllUser = async (req, res, next) => {
    try {

    } catch(err){

    }
};
exports.getUserlogin = async (req, res, next) => {
    const user = JSON.parse(JSON.stringify(req.user));
    //เอา user จาก authenticate (req.user=user)
    res.json({ user })
};

exports.updateUser = async (req, res, next) => {
    try {

    } catch(err){

    }
};

exports.updateProfilePic = async (res, req, next) => {
    try {

    } catch(err){

    }
}

exports.deleteUser = async (req, res, next) => {
    try {

    } catch(err){

    }
}