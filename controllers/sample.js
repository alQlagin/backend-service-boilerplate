const SampleModel = require('../models/sample');
const {SAMPLE_C_1, SAMPLE_C_2} = require('../constants/');
module.exports = {
    asyncSampleAction,
    syncSampleAction
}

// async action with model
function asyncSampleAction({id}){
    return SampleModel.findOne({id});
}

// sync action with model
function syncSampleAction(data, {option1=SAMPLE_C_1, option2=SAMPLE_C_2}){
    if(option1 && option2) {
        return Promise.resolve(Object.assign({} , data, {additionalField: 'some value'}))
    }
    return Promise.reject('some kind of error');
}