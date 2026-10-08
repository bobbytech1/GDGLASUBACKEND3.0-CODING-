const checkAgeLimit = (req, res, next) => {
    const {age} = req.body;
    if (age && age < 16){
        return res.status(403).json({success: false, message: 'User must be atleast 16 or above 16 years '})
    }
    next();
};

module.exports = checkAgeLimit;