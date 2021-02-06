const express = require('express');
const cors = require('cors');
const app = express();
require('./db/connection');
const { userRouter } = require('./User/user.routes');
const { postRouter } = require('./Post/post.routes');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.get('/health', (req, res) => {
    res.status(200).send({ message: 'API is working' });
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});