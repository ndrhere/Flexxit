const express = require('express')
const mongoDB = require('./db');
const port = 7000
const app = express();
const User = require('./Schema/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');
const fetchuser = require('./middleware/fetchuser')
const Details = require('./Schema/DetailsSchema')
const cors = require('cors')
const secretKey = "mysecretKey"
app.use(express.json())
app.use(cors())
mongoDB();


app.post('/createuser', body('name').isLength({min:3}),
body('email').isEmail(),
body('password').isLength({ min: 4 }),
 async(req, res) =>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let user = await User.findOne({"email": req.body.email})
    if(user){
      res.send('Email address already registered')
    }
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(req.body.password, salt)

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      confirmPassword: hashPassword

    })

    const payload = {
      userId: user._id
      //By assigning the result of User.create() to the user variable, you are capturing the promise that represents the creation of the user. Once the promise is fulfilled (i.e., the user document is successfully created in the database), the user variable will hold the created user document.

      //To access the _id property of the user document, you can indeed use user._id, assuming the promise has been fulfilled and the user variable contains the user document. This _id property represents the unique identifier assigned to that specific user document by MongoDB.
    }
     
     const authToken = jwt.sign(payload, secretKey)

     res.json({authToken})


})


app.post('/addpayment',
body('CardNumber').isLength({min: 16}),
body('FirstName').isLength({ min: 2 }),
body('LastName').isLength({ min: 2 }),
body('CVV').isLength({ min: 3 }),


async (req, res) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const details = await Details.create({
 CardNumber: req.body.CardNumber,
 FirstName: req.body.FirstName,
 LastName: req.body.LastName,
 CVV: req.body.CVV,
 ExpirationDate: req.body.ExpirationDate,
})

res.json({details})
})



app.post('/login',
body('email').isEmail(),
body('password').isLength({ min: 4 }),
async (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
   
  let user = await User.findOne({"email": req.body.email})
  if(!user){
    res.status(400).send('Please log-in with correct credentials')
  }

  const passwordCompare = await bcrypt.compare( req.body.password, user.password)
  if(!passwordCompare){
    res.status(400).json({error: "Please login with the correct credentials"})
  }

  const payload = {
    userId: user._id
  }

  const authToken = jwt.sign(payload, secretKey)

  res.json({authToken})

})







app.get('/getuser', fetchuser, async(req, res)=>{
   userId = req.extra.userId
   const user = await User.findById(userId)
   res.send(user)

})










app.listen(`${port}`, ()=>{
  console.log("App is listening on port 7000")
})