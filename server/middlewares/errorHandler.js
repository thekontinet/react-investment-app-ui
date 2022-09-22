const errorHandler = function(err, req, res, next){
    if(res.statusCode === 500){
        return res.json({
            message:err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        })
    }
    res.json(err.message)
}


module.exports = errorHandler