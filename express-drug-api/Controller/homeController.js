const drugModel = require('../Model/drugModel')
const conn = require('../database')
const path2 = require('path')
const bodyParser = require('body-parser')


function getDrugs(req, res){
    drugModel.getDrugsData((results, error) => {
        if (results) {
          res.json(results);
        }
        else{
            res.send(error);
        }
      });
}
function addDrug(req, res){
    const compname = req.body.compname
    const molucularfor = req.body.molucularfor
    const structure = req.body.structure
    const molucularwt = req.body.molucularwt
    const smile = req.body.smile
    const phycheproperties = req.body.phycheproperties
    const genus = req.body.genus
    const speciesname = req.body.speciesname
    const family = req.body.family
    const geolocation = req.body.geolocation

    const chemicalclassification = req.body.chemicalclassification
    const meltingpoint = req.body.meltingpoint
    const massspectra = req.body.massspectra
    const msms = req.body.msms
    const uv = req.body.uv
    const irspector = req.body.irspector
    const hmnr = req.body.hmnr
    const cmnr = req.body.cmnr
    const hplc = req.body.hplc
    const activity = req.body.activity
    const toxicity = req.body.toxicity
    const clinicaltrial = req.body.clinicaltrial
    const afi = req.body.afi
    const reference = req.body.reference
console.log('controller,')
    drugModel.addDrug(compname, molucularfor, structure, molucularwt, smile,
        phycheproperties, genus, speciesname, family, geolocation, chemicalclassification,
        meltingpoint, massspectra, msms, uv, irspector, hmnr, cmnr, hplc, activity, 
        toxicity, clinicaltrial, afi, reference, (results, error) => {
        console.log("in add drug model")
        if(results){
            res.send(results)
        }
        else{
            res.send(error)
        }
    })
}
function getDrugDataById(req, res){
    const id = req.params.id;
    drugModel.getDrugDataById(id, (results, error) =>{
        if(results){
            res.send(results)
        }
        else{
            res.send(error)
        }
    })
}

function showDrug(req, res) {
    const filePath = path2.join(__dirname, '..', 'api', 'Pages', 'showDrug.html');
    res.sendFile(filePath);
  }

module.exports = { getDrugs, addDrug, getDrugDataById, showDrug }