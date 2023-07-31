const jwt = require('jsonwebtoken');
const private = "afgwgjhgagalafakhardfy";

const validateToken = (req, res, next) => {
    const { authorization} = req.headers;
    if (!authorization || authorization === "") {
        res.status(403).send("Unauthorized");
        return;
    } else {
        try {
            const token = authorization.split(" ")[1];
            const decoded = jwt.verify(token, private);
            if (decoded) {
                next();
            }
        } catch (e) {
            res.status(403).send("invalid token");
        }
    }  
}

module.exports = validateToken;