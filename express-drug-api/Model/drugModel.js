const db = require('../database')
const joi = require('joi')

const schema = joi.object({
    id: joi.number().integer().positive(),
    Name: joi.string().required,
    email: joi.string().email().required()
})

const myModel = {
    getDrugsData: (callback) => {
        const query = 'select id, compname from registration'

        db.query(query, (error, results) => {
            if(error){
                callback(error)
            }
            else{
                callback(results)
            }
        })
    },

    addDrug: (compname, molucularfor, structure, molucularwt, smile,
        phycheproperties, genus, speciesname, family, geolocation, chemicalclassification,
        meltingpoint, massspectra, msms, uv, irspector, hmnr, cmnr, hplc, activity, 
        toxicity, clinicaltrial, afi, reference, callback) => {
        
        const query = `insert into drugs (compname, molucularfor, structure, molucularwt, smile, phycheproperties, genus, speciesname, family, geolocation, chemicalclassification, meltingpoint, massspectra, msms, uv, irspector, hmnr, cmnr, hplc, activity, toxicity, clinicaltrial, afi, reference) values ('${compname}', '${molucularfor}', '${structure}', '${molucularwt}', '${smile}', '${phycheproperties}', '${genus}', '${speciesname}', '${family}', '${geolocation}', '${chemicalclassification}', '${meltingpoint}', '${massspectra}', '${msms}', '${uv}', '${irspector}', '${hmnr}', '${cmnr}', '${hplc}', '${activity}', '${toxicity}', '${clinicaltrial}', '${afi}', '${reference}')`
        db.query(query, (results, error) => {
console.log('22')
            if(results){
                console.log('hello');
                callback(results)
            }
            else{
                callback(error)
            }
        })
    },

    getDrugDataById: (id, callback) => {
        console.log(id)
        const query =  `select * from registration where id = ${id}`
        db.query(query, (results, error) => {
            if(results){
                callback(results)
            }
            else{
                callback(error)
            }
        })
    }
}

module.exports = myModel