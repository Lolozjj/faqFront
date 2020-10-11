import Vue from 'vue'
import axios from 'axios'
const verifyQQNumber = function (email) {
  if (email.length < 5 || email.length > 12) {
    return false;
  }
  if (!/^\d+$/.test(email)) {
    return false;
  }
  return true;
}

const verifyPassword = function (password) {
    var reg =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,18}$/;
    if(reg.test(password)){
        return true;
    }
    else{
        return false;
    }
}

export {
    verifyQQNumber,
    verifyPassword
};

