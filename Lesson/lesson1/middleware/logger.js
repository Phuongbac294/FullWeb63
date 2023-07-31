const mylog = (req, res, next) => {
    console.log(req.headers);
    next();
}

module.exports = mylog;