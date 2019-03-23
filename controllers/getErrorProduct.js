module.exports = function getErrorProduct(res, err) {
    console.log('iiiiiii', err)
    res.render('error', {message: err.message, error: err})
};