const errorHandler = function(err, req, res,next){
    res.status(err.statusCode || 500).json(err.message)
}


module.exports = errorHandler