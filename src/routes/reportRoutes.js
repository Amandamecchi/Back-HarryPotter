const express = require('express');
const router = express.Router();

const reportController = require("./../controllers/reportController");
const apiKeyMiddleware = require ("./../config/apiKey")
//router.get("/report/csv", reportController.exportWizardCSV);

router.use(apiKeyMiddleware);
router.get("/report/pdf", reportController.exportWizardPDF);

module.exports =router;