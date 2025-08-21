const express  = require('express');
const router = express.Router();
const pages = require('../controller/pages_controller');
const verify_token = require('../middleware/verify_token');
const verifyAdmin = require('../middleware/verifyAdmin');

router.get('/signin',pages.login);
router.get('/logout',pages.logout)
router.get('/userDashboard',verify_token,pages.userDashboard);
router.get('/transaction-details',verify_token,pages.transactionDetails)
router.get('/view-transaction',verify_token,pages.view_transaction)

// ADMIN END

router.get('/',pages.AdminLogin);
router.get('/adminDashboard',verifyAdmin,pages.adminDashboard)

module.exports=router