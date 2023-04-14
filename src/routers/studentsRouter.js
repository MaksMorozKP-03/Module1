import express from 'express';
import { getStudents, createStudent } from '../controllers/studentsController.js';
import { authenticate } from '../middlewares/authenticateMiddleware.js';

const studentsRouter = express.Router();


studentsRouter.get('/all', async (req, res) => {
    const results = await getStudents();
    res.status(200).json(results);
});


studentsRouter.post('/', authenticate, async (req, res) => {
    const result = await createStudent(req.body);
    if (!result)
        return res.status(400).send('db is already contains this student');
    res.status(200).send(`Student is created! Id: ${result.insertedId}`);
});

export default studentsRouter;