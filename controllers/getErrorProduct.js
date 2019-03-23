module.exports = function getHomepage(res, err) {
    console.log('iiiiiii', err)
    res.render('error', {message: err.message, error: err})
};