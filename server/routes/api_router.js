const express = require('express');
const router = express.Router();
const api_routes = require('../controller/api_controller');



router.post('/login',api_routes.login);

router.post('/transaction',api_routes.transaction);
router.post('/admin_transaction',api_routes.admin_transaction);
router.get('/getbank',api_routes.getbank);
router.get('/getname/:account_number',api_routes.getname);


//admin route
router.post('/createAdmin',api_routes.createAdmin);
router.post('/admin_login',api_routes.AdminLogin);
router.post('/createAccount',api_routes.createAcount)
router.post('/updatebalance',api_routes.updateBalance);
router.post('/updatebank',api_routes.uploadBank);
router.get('/search_balance/:accountNumber',api_routes.search_balance);
module.exports = router