const { User, validate } = require('../../model/userModel/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anuragmk10@gmail.com',
    pass: 'nuofbwxshkmukqbc',
  },
});

const userSignup = async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).send({ message: 'User with given email already exists!!!' });
    }

    const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;
    const Email = req.body.email;
    const mailDetails = {
      from: 'anuragmk10@gmail.com',
      to: Email,
      subject: 'Bugfixer',
      html: `<p> YOUR OTP FOR REGISTRATION IN bugfixer IS ${OTP}</P>`,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log('error occurs ', err);
      } else {
        console.log('email send successfully');
      }
    });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: 'User created successfully', ...req.body, OTP });
  } catch (error) {
    res.status(500).send({ message: 'internal server error' });
  }
};

const otpVerify = (req, res) => {
  const email = req.body.email;
  try {
    User.findOneAndUpdate({ email: email }, { $set: { verified: 1 } }).then((response) => {
      res.status(200, response);
    });
  } catch (error) {}
};

module.exports = {
  userSignup,
  otpVerify,
};
