const router = require('express').Router();
// Note that the .js extension is implied
//  when supplying file names in require()

// note careful use of relative paths in the require() statement
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;