const SampleCtrl = require('../controllers/sample')

module.exports = {
    mid1,
    mid2
}
// /api/sample/:id
function mid1(req, res, next, paramId){
    SampleCtrl.asyncSampleAction({id: paramid})
        .then((result) => {
            if (result) {
                req.sample = result;
                return next()
            } else {
                res.status(404).end()
            }
        })
        .catch(next);                       // всегда должна быть обработка чтобы запрос не завис
}

function mid2(req, res, next){
    SampleCtrl.asyncSampleAction(req.body)
        .then((result) => res.status(200).json(result))
        .catch(next);
}