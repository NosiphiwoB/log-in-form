var bcrypt = require("bcryptjs");

const encryptPassword = async (password) => {
  var hashPwd = await bcrypt.hash(password, 10);
  return hashPwd;
};


const comparePassword = async (password , hashedPassword) => {
   var isCorrect = await bcrypt.compare(password, hashedPassword)
   return  isCorrect 
}



module.exports = { encryptPassword , comparePassword };