/**
 * Created by gabrielkunkel on 11/3/16 in JavaScript.
 */

import express from 'express'
import timeProcessor from './time_processor'

let app = express();

app.use(express.static(__dirname));

app.get('/:val', function (req, res) {
  res.json(timeProcessor(req.params.val));
});

app.listen(8850);

export default app;