const { User } = require("../../model/userModel/userModel");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const userLogin = async (req, res) => {
  try {
    console.log("here in login in page ")
    console.log(req.body)
    const { error } = validate(req.body[0]);
    if (error)
    return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email,isBlocked:false ,verified:1});
    if (!user)
    return res.status(401).send({ message: "Invalid Email or Password" });

   
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });
    const token = user.generateAuthToken();
    res.status(200).send({ data: token,user,message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};



module.exports = {
  userLogin,
};
