import { getStudent } from '../services/studentsService.js';
import jwt from 'jsonwebtoken';
import {config} from '../configs/config.js';

export const getToken = async (nickName) => {
    const existingStudent = await getStudent(nickName);

    if (!existingStudent) {
        return null;
    }

    const accessToken = jwt.sign({ sub: existingStudent.nickName }, config.secret, {
        algorithm: 'HS256',
        expiresIn: "1h"
    })

    return accessToken;
}