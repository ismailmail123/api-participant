const express = require('express');
const participantRouter = require("./src/participant/routes");
const app = express();
const port = 3000;




// const cors = require('cors');

// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// const routes = require('./routes');
// app.use(routes);

app.get(("/"), (req, res) => {
    res.send('hello world')
});

app.use('/participant', participantRouter);

app.listen(port, () => console.log(`Server is running on port : ${port}`));