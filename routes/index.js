const debug = require('debug')('routes:index');
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const convertSeconds = require('convert-seconds')

const storage = require(`${__dirname}/../bin/lib/storage`);
const database = require(`${__dirname}/../bin/lib/database`);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Media Archive Analyser' });
});

module.exports = router;
