const router = require('express').Router();
const userRoutes = require('./user-routes');


router.use('/api/users', (req,res)=> {
    console.log('/API/USERS ROUTE HIT')
})


router.use('/users', userRoutes);

module.exports = router;
