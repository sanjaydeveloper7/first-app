const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.