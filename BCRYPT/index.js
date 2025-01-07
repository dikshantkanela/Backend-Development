const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  // to generate salts (rounds)
  // salt should change in every console.log
  // this adds uniqueness to the hashed password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, salt);
  // OR : 
//   const hash = await bcrypt.hash(10,pw)
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const check = await bcrypt.compare(pw, hashedPw);
  if (check) {
    console.log("LOGGED IN!");
  } else {
    console.log("INCORRECT PASSWORD!");
  }
};

// hashPassword("monkey");
login("monkey!","$2b$10$io3hjLMjx1H3xHY/Rbzd1ehl4AZrco.S4UHLG/Hf/KQbKEPm435UO")
// HENCE WE GET INCORRECT PASSWORD since the bcrypt.compare(pw,hasedPw) generates false cuz the password was different!