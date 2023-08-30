const jwt = require('jsonwebtoken');
const praviter_Key = "galkghakfdklgrgldkaal"

const validateToken = (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization || authorization === null) {
        res.status(403).send("Unauthorized");
        return
    } else {
        try {
            const token = authorization.split(" ")[1];
            const decoded = jwt.verify(token, praviter_Key)
            if (decoded) {
                next();
            }
        } catch (e) {
            res.status(403).send('Invalid authorization')
        }
    }
}

module.exports = validateToken;