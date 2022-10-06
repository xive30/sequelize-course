import jwt from 'jsonwebtoken';
import environment from '../config/environment';

export default class JWTUtils {
    static generateAccessToken(payload) {

        return jwt.sign(payload, environment.jwtAccessTokenSecret, { expiresIn: '1d' });
    }

    static generateRefreshToken(payload) {
        return jwt.sign(payload, environment.jwtRefreshTokenSecret);
    }

    static verifyAccessToken(accessToken) {
        return jwt.verify(accessToken, environment.jwtAccessTokenSecret);
    }

    static verifyRefreshToken(accessToken) {
        return jwt.verify(accessToken, environment.jwtRefreshTokenSecret);
    }
}