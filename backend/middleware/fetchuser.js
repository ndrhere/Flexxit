const jwt = require('jsonwebtoken');
const secretKey = "mysecretKey"


const fetchuser = (req, res, next) =>{

    const authToken = req.header("auth-Token")

    const payload = jwt.verify(authToken, secretKey)

    if(!payload){
        res.json({error: "Not Authorized"})
      }

      req.extra = {userId: payload.userId}

      next()



}

module.exports = fetchuser;