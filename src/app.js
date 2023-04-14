import express from 'express';
import studentsRouter from './routers/studentsRouter.js';
import authRouter from './routers/authRouter.js';
import { config } from './configs/config.js';
import { createStudent } from './controllers/studentsController.js';
const app = express()

// parse application/json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/students', studentsRouter);
app.use('/auth', authRouter);

app.listen(config.server.port, () => {
  console.log(`Example app listening on port ${config.server.port}`);
  
  createStudent({ firstName: 'Maksym', lastName: 'Moroz', nickName: 'nickName' });
})