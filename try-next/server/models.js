const mongoose = require('mongoose')
const schemas = require('./schemas')

/**
 * Create models for all schemas
 */
function createModels(){
    const models = {}
    Object.keys(schemas).forEach(key => 
        models[key] = mongoose.model(key, new mongoose.Schema(schemas[key]))
    )
    return models
}

module.exports = createModels()