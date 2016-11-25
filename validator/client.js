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
   "user.machinedetails":{
    isString: true,
    notEmpty: false
  },
  "user.companyname":{
    isString: true,
    notEmpty: false
  },
   "user.assign date":{
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
  
  
 
