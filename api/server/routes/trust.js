const express = require('express');
const { getTrustAssessmentController } = require('../controllers/TrustController');
const requireJwtAuth = require('../middleware/requireJwtAuth');

const router = express.Router();

router.get('/', requireJwtAuth, getTrustAssessmentController);

module.exports = router;