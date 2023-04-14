import jwt from "jsonwebtoken";
import { config } from '../configs/config.js';

const extractToken = (req) => {
    const authHeader = req.headers['authorization'];

    const pattern = new RegExp('^bearer', 'i');
    const bearer = pattern.test(authHeader);
    return bearer ? authHeader : authHeader;
}

export const authenticate = (req, res, next) => {
    const token = extractToken(req);
    try {
        jwt.verify(token, config.secret);
        next();
    } catch (e) {
        console.log(e)
        res.status(401).send('Not authorised!');
    }
}