import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import cheerio from 'cheerio';
import Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

var app = express();
app.server = http.createServer(app);

app.use(cors({
    exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
    limit : '100kb'
}));

app.get('/alkitab/:version/:book/:chapter', (req, res) => {
    let {version, book, chapter} = req.params;
    let url = `http://alkitab.mobi/${version}/${book}/${chapter}`;

    fetch(url)
        .then(response => response.text())
        .then(body => {
            let $ = cheerio.load(body);
            let items = [];
            $('p').filter((i, el) => {
                let data = $(el);
                let content = data.find('[data-begin]').first().text();
                let title = data.find('.paragraphtitle').first().text();
                let verse = data.find('.reftext').children().first().text();
                let type = null;

                if (!title && !content) {
                    data.find('.reftext').remove();
                    content = data.text();
                }
                
                if (title) {
                    type = 'title';
                    content = title;
                } else if (content) {
                    type = 'content';
                }

                if (data.attr('hidden') === 'hidden' || data.hasClass('loading') || data.hasClass('error')) {
                    type = null;
                }

                if (type)
                    items.push({
                        content,
                        type,
                        verse
                    });
            });
            res.json(items);
        });
});

app.get('/alkitab/:version/:book/:chapter/:verse', (req, res) => {
    let {version, book, chapter, verse} = req.params;
    let url = `http://alkitab.mobi/${version}/${book}/${chapter}/${verse}`;

    fetch(url)
        .then(response => response.text())
        .then(body => {
            let $ = cheerio.load(body);
            let item = $('p').first();
            let type = 'content';
            let version = item.find('.reftext').first().text().slice(0, -1);
            item.children().first().remove();
            let content = item.text().trim();

            let alt = [];

            $('p').filter((i, el) => {
                if (i == 0) return;
                let data = $(el);
                let version = data.find('.reftext').first().text().slice(0, -1);
                data.children().first().remove();
                let content = data.text().trim();
                alt.push({
                    content,
                    type,
                    verse,
                    version,
                })
            });

            res.json({
                content,
                type,
                verse,
                version,
                alt
            });
        });
});

app.server.listen(process.env.PORT || 8080);

console.log(`Alkitab API is up on ${app.server.address().port}`);