module.exports = function getHomepage(req, res, next) {
  res.render('index', { title: 'Test nodejs' });
};