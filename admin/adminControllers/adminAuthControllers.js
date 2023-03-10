
const adminAuthServices = require('../adminServices/adminAuthServices');

const createAdmin = async(req, res)=> {
    try {
      const result = await adminAuthServices.createAdmin(req.body);
      console.log(result);
      if(result.success) {
        const adminToken = adminAuthServices.generateToken(result.newAdmin);
        if(adminToken){
          result.adminToken = adminToken;
          res
          .cookie('adminToken', adminToken, {httpOnly: true})
          .send({success: true});
        }
      } else {
        res.send(result);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  

const adminLogin = async(req, res) => {

    try{
      const auth = await adminAuthServices.authenticate(req.body);
      if(auth.error_info) {
        return res.send(auth);    
      }
    
      if(auth.adminToken) {
        res
          .cookie('adminToken', auth.adminToken, {httpOnly: true})
          .send(auth);
      } else {
        console.log('Falló, error inesperado. Inténtalo de nuevo o contáctanos: rcapuz@prixelart.com');
      }
  
    } catch (err) {
      res.status(500).send(err);
    }
  }

  module.exports = { createAdmin, adminLogin }
  