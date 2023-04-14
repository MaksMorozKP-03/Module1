import express from 'express';
import { getToken } from '../controllers/authController.js';

const authRouter = express.Router();


authRouter.post('/login', async (req, res) => {
  const { nickName } = req.body;

  const accessToken = await getToken(nickName);

  if (!accessToken) {
    return res.status(401).send('Unauthorised');
  }

  res.status(200).json({ accessToken });
});

export default authRouter;