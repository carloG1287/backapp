import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import blogModel from './models/BlogModel.js';
import blogRouter from './routes/routesBlog.js';
import itemRouter from './routes/routesItem.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRouter)
app.use('/items', itemRouter);

try {
    await db.authenticate();
    console.log('Database connected');
}
catch (error) {
    console.log(error);
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server is running');
});
