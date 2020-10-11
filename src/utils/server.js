import Vue from 'vue'
import axios from 'axios'
//解决axios请求发次都是不同session的问题
// Vue.config.debug = true;
// axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

let PORTURl = "http://" + window.location.hostname + ":8081/";


const axiosService=function(service,success,fail,warn,param){

}













//申请发送验证邮件
const captchaByEmailService = (email, event) => {
  let url = PORTURl + "emailCaptcha/" + email;
  axios.get(url).then(response => {
    event(response.data)
  })
}
//验证邮箱验证码
const validationByEmailService = (email, captchaText, event) => {
  let url = PORTURl + "emailCaptcha";
  axios.post(url, {
    email: email,
    captchaText: captchaText
  }).then(response => {
    event(response.data)
  })
}
//邮箱注册
const emailRegisterService = (email, password, event) => {
  let url = PORTURl + "emailRegister";
  axios.post(url, {
    account: email,
    password: password
  }).then(response => {
    event(response.data)
  })
}
// 登录图形验证码
const captcha = (event) => {
  let url = PORTURl + "captcha";
  axios.get(url).then(response => {
    event(response.data)
  })
}
//登录
const login = (account, passoword, captchaUid, captchaText, event) => {
  let url = PORTURl + "login";
  axios.post(url, {
    username: account,
    password: passoword,
    captchaUid: captchaUid,
    captchaText: captchaText
  }).then(response => {
    event(response.data)
  }).catch((e) => {
    console.log(e);
  });
}




/**
 * -----------------------------这下面请求头都需要带token-------------------------------------------
 */







//获取管理员账号数据
const getAllAdminUsersService = (curPage, pageSize, event) => {
  let url = PORTURl + "adminUsers";
  axios.get(url, {
    headers: {
      token: localStorage.getItem("token")
    },
    params: {
      curPage: curPage,
      pageSize: pageSize
    }
  }).then(response => {
    event(response.data)
  })
}
//添加一个管理员账号
const addlAdminUsersService = (username, email, phone, password, event) => {
  let url = PORTURl + "adminUser";
  axios.post(url, {
    username: username,
    email: email,
    phone: phone,
    password: password
  }, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//修改管理员信息
const updateAdminUserService = (account, email, phone, username, event) => {
  let url = PORTURl + "adminUser";
  axios.put(url, {
    account: account,
    email: email,
    phone: phone,
    username: username
  }, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })

}
//重置管理员账号的密码
const resetAdminPasswordService = (account, password, event) => {
  let url = PORTURl + "adminUser/" + account;
  axios.put(url, {
    password: password
  }, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//删除管理员账号
const deleteAdminUserService = (account, event) => {
  let url = PORTURl + "adminUser/" + account;
  axios.delete(url, {}, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//管理员模糊查询
const fuzzyQueryAdminUserService = (account, username, email, phone, event) => {
  let url = PORTURl + "queryAdminUsers";
  axios.get(url, {
    headers: {
      token: localStorage.getItem("token")
    },
    params: {
      account: account,
      username: username,
      email: email,
      phone: phone
    }
  }).then(response => {
    event(response.data)
  })
}

//获取登录账号的用户名
const getAdminUsernameService = ( event) => {
  let url = PORTURl + "adminUser/username";
  axios.get(url, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}












/**  ------------------------------------------Org 相关 -----------------------------------------------------*/



//获取用户创建的组织
const getOrganizationService = ( event) => {
  let url = PORTURl + "organization";
  axios.get(url, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//创建组织
const addOrganizationService = (name, describe, address,  event) => {
  let url = PORTURl + "organization";
  axios.post(url, {
    name: name,
    describe: describe,
    address: address,
  }, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//解散组织
const deleteOrganizationService = (id, event) => {
  let url = PORTURl + "organization/" + id;
  axios.delete(url, {}, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//搜索组织
const searchOrganizationService = (idOrName, event) => {
  let url = PORTURl + "organization/" + idOrName;

  axios.get(url, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//加入组织
const joinOrganizationService = (organizationId,  event) => {
  let url = PORTURl + "joinOrganization/"+organizationId;
  console.log(organizationId);
  axios.post(url, {
  }, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}
//获得自己加入的组织
const getWithOrganizationJoinService = (event) => {
  let url = PORTURl + "joinOrganization";

  axios.get(url, {
    headers: {
      token: localStorage.getItem("token")
    }
  }).then(response => {
    event(response.data)
  })
}


export {
  captchaByEmailService,
  validationByEmailService,
  emailRegisterService,
  getAllAdminUsersService,
  addlAdminUsersService,
  updateAdminUserService,
  resetAdminPasswordService,
  deleteAdminUserService,
  fuzzyQueryAdminUserService,
  getAdminUsernameService,

  getOrganizationService,
  addOrganizationService,
  deleteOrganizationService,
  searchOrganizationService,
  joinOrganizationService,
  getWithOrganizationJoinService,
  test,
  captcha,
  login
}
