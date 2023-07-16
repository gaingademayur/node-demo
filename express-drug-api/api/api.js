const express = require('express')
const path2 = require('path')
const bodyParser = require('body-parser')
const cors = require('cors');

var api = express.Router()
api.use(cors());
api.use(bodyParser.json())

const homeController = require('../Controller/homeController')

api.get('/', (req, res) => {
    res.sendFile(path2.join(__dirname, 'Pages', 'index.html'));
  });

api.get('/showDrug', homeController.showDrug);

api.get('/index', homeController.getDrugs)

api.post('/addDrug', homeController.addDrug)

api.get('/searchDrug/:id', homeController.getDrugDataById)

module.exports = api;