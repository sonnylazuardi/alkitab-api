'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _cors2.default)({
    exposedHeaders: ['Link']
}));

app.use(_bodyParser2.default.json({
    limit: '100kb'
}));

app.get('/alkitab/:version/:book/:chapter', function (req, res) {
    var _req$params = req.params;
    var version = _req$params.version;
    var book = _req$params.book;
    var chapter = _req$params.chapter;

    var url = 'http://alkitab.mobi/' + version + '/' + book + '/' + chapter;

    (0, _isomorphicFetch2.default)(url).then(function (response) {
        return response.text();
    }).then(function (body) {
        var $ = _cheerio2.default.load(body);
        var items = [];
        $('p').filter(function (i, el) {
            var data = $(el);
            var content = data.find('[data-begin]').first().text();
            var title = data.find('.paragraphtitle').first().text();
            var verse = data.find('.reftext').children().first().text();
            var type = null;

            if (!title && !content) {
                data.find('.reftext').remove();
                content = data.text();
            }

            if (title) {
                type = 'title';
            } else if (content) {
                type = 'content';
            }

            if (content) items.push({
                content: content,
                type: type,
                verse: verse
            });
        });
        res.json(items);
    });
});

app.get('/alkitab/:version/:book/:chapter/:verse', function (req, res) {
    var _req$params2 = req.params;
    var version = _req$params2.version;
    var book = _req$params2.book;
    var chapter = _req$params2.chapter;
    var verse = _req$params2.verse;

    var url = 'http://alkitab.mobi/' + version + '/' + book + '/' + chapter + '/' + verse;

    (0, _isomorphicFetch2.default)(url).then(function (response) {
        return response.text();
    }).then(function (body) {
        var $ = _cheerio2.default.load(body);
        var item = $('p').first();
        var type = 'content';
        var version = item.find('.reftext').first().text().slice(0, -1);
        item.children().first().remove();
        var content = item.text().trim();

        var alt = [];

        $('p').filter(function (i, el) {
            if (i == 0) return;
            var data = $(el);
            var version = data.find('.reftext').first().text().slice(0, -1);
            data.children().first().remove();
            var content = data.text().trim();
            alt.push({
                content: content,
                type: type,
                verse: verse,
                version: version
            });
        });

        res.json({
            content: content,
            type: type,
            verse: verse,
            version: version,
            alt: alt
        });
    });
});

app.server.listen(process.env.PORT || 8080);

console.log('Alkitab API is up on ' + app.server.address().port);
