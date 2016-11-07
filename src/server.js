/**
 * Created by gabrielkunkel on 11/3/16 in JavaScript.
 */

import express from 'express'
import timeProcessor from './time_processor'

let port = process.env.PORT || 8850;
let app = express();


app.use(express.static(__dirname));

app.get('/:val', function (req, res) {
  res.json(timeProcessor(req.params.val));
});

app.listen(port);

export default app;