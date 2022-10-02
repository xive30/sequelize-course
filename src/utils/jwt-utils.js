import jwt from 'jsonwebtoken';
import environment from '../config/environment';

export default class JWTUtils {
    static generateAccessToken(paylod, options = {}) {
        const{expireIn = 'id'} = options;
        return jwt.sign(payload, environment.jwtAccessTokenSecret, {expiresIn});
    }

    static generateRefreshToken(accessToken) {
        return jwt.sign(payload, environment.jwtRefreshTokenSecret);
    }

    static verifyAccessToken(accessToken) {
        return jwt.verify(accessToken, environment.jwtAccessTokenSecret);
    }

    static verifyRefreshToken(refreshToken) {
        return jwt.verify(refreshToken, environment.jwtRefreshTokenSecret);
    }
}