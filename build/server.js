'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _time_processor = require('./time_processor');

var _time_processor2 = _interopRequireDefault(_time_processor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by gabrielkunkel on 11/3/16 in JavaScript.
 */

var port = process.env.$PORT || 8850;
var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname));

app.get('/:val', function (req, res) {
  res.json((0, _time_processor2.default)(req.params.val));
});

app.listen(port);

exports.default = app;