module.exports = {
  "user.email": {
    notEmpty: true,
    isEmail: true
  },
  "user.password": {
    notEmpty: true,
    isString: true
  },
  "user.name":{
    isString: true,
    notEmpty: false
  },
   "user.selectdesignation":{
    isString: true,
    notEmpty: false
  },
  "user.address":{
    isString: true,
    notEmpty: false
  },
   "user.doj":{
    notEmpty: true,
    isDate: true
  },
  "user.mobile":{
    notEmpty: true,
    isString: true
  },
   "user.gender":{
    notEmpty: true,
    isString: true
  },
 
};
  
  
 
