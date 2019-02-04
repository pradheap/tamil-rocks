const express = require('express');

const path = require('path');

const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 9000;
app.listen(port, () => {
// eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
